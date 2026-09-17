import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('graapes-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (username, password, rememberMe) => {
    // Demo credentials
    if (username.toLowerCase() === 'admin' && password === 'admin@123') {
      const userData = { username: 'Admin', role: 'Administrator', email: 'admin@graapes.com' };
      setUser(userData);
      if (rememberMe) {
        localStorage.setItem('graapes-user', JSON.stringify(userData));
      } else {
        sessionStorage.setItem('graapes-user', JSON.stringify(userData));
      }
      return { success: true };
    }
    return { success: false, message: 'Invalid username or password.' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('graapes-user');
    sessionStorage.removeItem('graapes-user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
