import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create context
const UserContext = createContext();

// Hook to easily use it
export const useUser = () => useContext(UserContext);

// Provider component
export function UserProvider({ children }) {
  const [user, setUser] = useState(null); // null when not logged in
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await axios.get("http://localhost:8080/api/auth/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(res.data);
        } catch (error) {
          console.error("Failed to fetch profile", error);
          localStorage.removeItem("token"); // Invalid token
        }
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
}
