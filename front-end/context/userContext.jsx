import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const backendUrl = import.meta.env.VITE_BACKEND_URL; // Get the backend URL from environment variables

  useEffect(() => {
    axios
      .get(`${backendUrl}/api/auth/profile`, {
        withCredentials: true, // Add this line to ensure cookies are sent with the request
      })
      .then(({ data }) => {
        setUser(data);
      })
      .catch((err) => {
        console.error("Error fetching user data:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
}
