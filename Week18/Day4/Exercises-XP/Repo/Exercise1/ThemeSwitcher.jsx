import React, { createContext, useState, useContext } from 'react';

// Create context
export const ThemeContext = createContext();

// Provider
export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light'); // default theme is "light"

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Theme switcher component
export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Toggle to {theme === 'light' ? 'dark' : 'light'} theme
    </button>
  );
};

// Custom hook for easy access
export const useTheme = () => useContext(ThemeContext);