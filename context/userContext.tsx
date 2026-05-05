import { createContext, useState, ReactNode, useEffect } from "react";
import { account } from "../lib/appwrite";
import { ID } from "appwrite";

// Define what your Context provides
interface UserContextType {
  user: any;
  login: (email: string, passWord: string) => Promise<void>;
  register: (email: string, passWord: string) => Promise<void>;
  logout: () => Promise<void>;
  authChecked: boolean;
}

// Initialize with undefined, but cast it to the type
export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [authChecked, setAuthChecked] = useState(false);

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

  useEffect(() => {
    // Check if user is already logged in on component mount
    const checkUser = async () => {
      try {
        const response = await account.get();
        setUser(response);
      } catch (error) {
        console.log("No active session found");
        setUser(null);
      } finally {
        setAuthChecked(true);
      }
    };
    checkUser();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, login, register, logout, authChecked }}
    >
      {children}
    </UserContext.Provider>
  );
}
