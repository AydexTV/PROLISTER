import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/auth/profile")
      .then(({ data }) => {
        setUser(data);
      })
      .catch((err) => {
        console.error("Error fetching user data:", err);
      })
      .finally(() => {
        setLoading(false); // Set loading to false once the request is complete
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
}
