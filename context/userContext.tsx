import { createContext, useState, ReactNode } from "react";
import { account } from "../lib/appwrite";
import { ID } from "appwrite";

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
    try {
      await account.createEmailPasswordSession(email, passWord);
      const response = await account.get();
      console.log("Login successful:", response);
      setUser(response);
    } catch (error: any) {
      console.error("Login error:", error.message || error);
    }
  }

  async function register(email: string, passWord: string) {
    // Appwrite registration logic will go here
    try {
      await account.create(ID.unique(), email, passWord);
      //log the user in immediately after registration
      await login(email, passWord);
      console.log("Registration successful");
    } catch (error) {
      console.error("Registration error:", error);
    }
  }

  async function logout() {
    // Appwrite logout logic will go here
    await account.deleteSession("current");
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
}
