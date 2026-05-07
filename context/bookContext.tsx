import { createContext, useState } from "react";

export const BookContext = createContext({
  //   books: [],
  //   addBook: (book: any) => {},
  //   removeBook: (id: string) => {},
});

export const BookProvider = ({ children }: { children: React.ReactNode }) => {
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
    } catch (error) {}
  }

  <BookContext.Provider value={{ books, setBooks }}>
    {children}
  </BookContext.Provider>;
};
