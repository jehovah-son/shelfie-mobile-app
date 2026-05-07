import { createContext, useState } from "react";

export const BookContext = createContext({
  //   books: [],
  //   addBook: (book: any) => {},
  //   removeBook: (id: string) => {},
});

export const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const [books, setBooks] = useState<any[]>([]);

  <BookContext.Provider value={{ books, setBooks }}>
    {children}
  </BookContext.Provider>;
};
