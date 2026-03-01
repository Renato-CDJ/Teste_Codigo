
import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const usersMock = [
  { user: "admin", pass: "123", role: "admin" },
  { user: "operador", pass: "123", role: "operador" }
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("roteiro_user")));

  const login = (username, password) => {
    const found = usersMock.find(u => u.user === username && u.pass === password);
    if (found) {
      localStorage.setItem("roteiro_user", JSON.stringify(found));
      setUser(found);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("roteiro_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
