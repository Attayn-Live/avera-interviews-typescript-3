export class Book {
  constructor(public title: string, public author: string, public genre: string, public year: number) {
  }
}

export class BookLibrary {
  addBook(book: Book): void {
    // Implementation here
    return;
  }

  removeBook(bookTitle: string): boolean {
    // Implementation here
    return false;
  }

  searchBooks(searchTerm: string): Book[] {
    // Implementation here
    return [];
  }

  getAllBooks(): Book[] {
    // Implementation here
    return []
  }
}
