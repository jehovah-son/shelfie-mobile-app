import { createContext, ReactNode, useEffect, useState } from "react";
import { databases } from "../lib/appwrite";
import { ID, Permission, Query, Role } from "appwrite";
import { userUser } from "../hooks/useUser";

const DataBase_ID = "69fb1774001b99a2c366";
const Collection_ID = "books";

export const BookContext = createContext({
  fetchBooks: async () => {},
  fetchBooksById: async (id: string) => {},
  createBook: async (data: any) => {},
  deleteBook: async (id: string) => {},
  books: [] as any[],
});

export function BookProvider({ children }: { children: ReactNode }) {
  const [books, setBooks] = useState<any[]>([]);
  const { user } = userUser();

  async function fetchBooks() {
    try {
      const response = await databases.listDocuments(
        DataBase_ID,
        Collection_ID,
        [Query.equal("userId", user.$id)],
      );
      setBooks(response.documents);
      console.log("Fetched books:", response.documents);
    } catch (error) {
      console.log("Error fetching books:", error);
    }
  }

  async function fetchBooksById(id: string) {
    try {
    } catch (error) {
      console.log("Error fetching book by ID:", error);
    }
  }

  async function createBook(data: any) {
    try {
      const newBook = await databases.createDocument(
        DataBase_ID,
        Collection_ID,
        ID.unique(),
        {
          ...data,
          userId: user.$id,
        },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ],
      );
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

  useEffect(() => {
    if (user) {
      fetchBooks();
    } else {
      setBooks([]);
    }
  }, [user]);

  return (
    <BookContext.Provider
      value={{
        books,
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
