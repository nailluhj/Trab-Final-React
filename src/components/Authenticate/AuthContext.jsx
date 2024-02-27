/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [userLogged, setUserLogged] = useState(null);

  const contextValue = useMemo(() => {
    return { isLogged, setIsLogged, userLogged, setUserLogged };
  }, [isLogged, setIsLogged, userLogged, setUserLogged]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
