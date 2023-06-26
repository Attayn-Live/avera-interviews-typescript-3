import { Book, BookLibrary } from '../src/q2'; // Assuming the classes are defined in separate files

describe('BookLibrary', () => {
  let library: BookLibrary;
  let book1: Book;
  let book2: Book;
  let book3: Book;

  beforeEach(() => {
    library = new BookLibrary();
    book1 = new Book("The Catcher in the Rye", "J.D. Salinger", "Fiction", 1951);
    book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction", 1960);
    book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Fiction", 1925);
  });

  it('should add a book to the library', () => {
    library.addBook(book1);
    expect(library.getAllBooks()).toContain(book1);
  });

  it('should remove a book from the library', () => {
    library.addBook(book1);
    library.addBook(book2);

    expect(library.removeBook("To Kill a Mockingbird")).toBe(true);
    expect(library.getAllBooks()).not.toContain(book2);
  });

  it('should return false when removing a non-existent book from the library', () => {
    library.addBook(book1);
    library.addBook(book2);

    expect(library.removeBook("The Great Gatsby")).toBe(false);
    expect(library.getAllBooks()).toContain(book1);
    expect(library.getAllBooks()).toContain(book2);
  });

  it('should search for books in the library by title, author, and genre', () => {
    library.addBook(book1);
    library.addBook(book2);
    library.addBook(book3);

    const searchResults = library.searchBooks("great");

    expect(searchResults.length).toBe(1);
    expect(searchResults[0].title).toBe("The Great Gatsby");
  });

  it('should return an empty array when no books match the search term', () => {
    library.addBook(book1);
    library.addBook(book2);
    library.addBook(book3);

    const searchResults = library.searchBooks("nonexistent");

    expect(searchResults.length).toBe(0);
  });

  it('should return all books in the library', () => {
    library.addBook(book1);
    library.addBook(book2);
    library.addBook(book3);

    const allBooks = library.getAllBooks();

    expect(allBooks.length).toBe(3);
    expect(allBooks).toContain(book1);
    expect(allBooks).toContain(book2);
    expect(allBooks).toContain(book3);
  });

  it('should not add a duplicate book to the library', () => {
    library.addBook(book1);
    library.addBook(book2);

    // Attempt to add a book with the same title as book1
    library.addBook(new Book("The Catcher in the Rye", "J.D. Salinger", "Fiction", 1951));

    expect(library.getAllBooks().length).toBe(2);
  });

  it('should handle removing a book with case-insensitive title match', () => {
    library.addBook(book1);
    library.addBook(book2);
    library.addBook(book3);

    expect(library.removeBook("the catcher in the rye")).toBe(true);
    expect(library.getAllBooks()).not.toContain(book1);
  });
});
