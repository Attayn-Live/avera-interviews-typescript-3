import { Data, fetchAndFilterData } from "../src/q1"; // Import the implementation function from the actual implementation file
import axios from "axios";

jest.mock("axios");

describe("Fetch data from API", () => {
  const mockUsers = [
    { id: 1, name: "John Doe", email: "johndoe@test.com" },
    { id: "", name: "Sussan", email: "susan@test.com" },
    { name: "Juliet", email: "juliet@test.com" },
    { id: 4, name: "Michael", email: "micahel@test.com" },
    { id: 5, name: "Paul", email: "paul@test.com" },
    {},
    { id: 7, name: "", email: "billy@test.com" },
    { id: 8, name: "Bill", email: "" },
  ];
  (axios.get as jest.Mock).mockResolvedValue({ data: mockUsers });
  test("should filter out objects with undefined id", async () => {
    const filteredUsers = await fetchAndFilterData("");

    expect(filteredUsers.every((user) => user.id !== undefined)).toBe(true);
  });

  test("should filter out objects with undefined or empty name", async () => {
    const filteredUsers = await fetchAndFilterData("");

    expect(
      filteredUsers.every((user) => user.name != undefined && user.name != "")
    ).toBe(true);
  });

  test("should filter out objects with undefined or empty email", async () => {
    const filteredUsers = await fetchAndFilterData("");

    expect(
      filteredUsers.every((user) => user.email != undefined && user.email != "")
    ).toBe(true);
  });

  test("should include objects with all three fields", async () => {
    const filteredUsers = await fetchAndFilterData("");

    expect(filteredUsers).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.anything(),
          name: expect.anything(),
          email: expect.anything(),
        }),
      ])
    );
  });
});
