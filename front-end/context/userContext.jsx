import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({}); // Capitalized for consistency

export function UserContextProvider({ children }) { // Capitalized for React component
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      axios
        .get("http://localhost:3000/api/auth/profile")
        .then(({ data }) => {
          setUser(data);
        })
        .catch((err) => {
          console.error("Error fetching user data:", err);
        });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
