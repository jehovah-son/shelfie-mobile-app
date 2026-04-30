import { createContext, useState, useContext, ReactNode } from "react";

// Define what your Context provides
interface UserContextType {
  user: any;
  login: (email: string, passWord: string) => Promise<void>;
  register: (email: string, passWord: string) => Promise<void>;
  logout: () => Promise<void>;
}

// Initialize with undefined, but cast it to the type
export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);

  async function login(email: string, passWord: string) {
    // Appwrite login logic will go here
  }

  async function register(email: string, passWord: string) {
    // Appwrite registration logic will go here
  }

  async function logout() {
    // Appwrite logout logic will go here
  }

  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
}
