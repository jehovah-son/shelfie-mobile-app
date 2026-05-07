import { createContext, ReactNode, useState } from "react";

const DataBase_ID = "69fb1774001b99a2c366";
const Collection_ID = "books";

export const BookContext = createContext({
  //  fetchBooks: async () => {},
  //  fetchBooksById: async (id: string) => {},
  //  createBook: async (data: any) => {},
  //  deleteBook: async (id: string) => {},
  //  books: [] as any[],
  //  setBooks: (books: any[]) => {},
});

export function BookProvider({ children }: { children: ReactNode }) {
  const [books, setBooks] = useState<any[]>([]);

  async function fetchBooks() {
    try {
    } catch (error) {
      console.log("Error fetching books:", error);
    }
  }

  async function fetchBooksById() {
    try {
    } catch (error) {
      console.log("Error fetching book by ID:", error);
    }
  }

  async function createBook(data: any) {
    try {
    } catch (error) {
      console.log("Error creating book:", error);
    }
  }

  async function deleteBook(id: string) {
    try {
    } catch (error) {
      console.log("Error deleting book:", error);
    }
  }

  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
        fetchBooks,
        fetchBooksById,
        createBook,
        deleteBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
