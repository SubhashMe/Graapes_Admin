import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const theme = 'light';
  const setTheme = () => {};

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('data-theme', 'light');
    localStorage.removeItem('graapes-theme');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
