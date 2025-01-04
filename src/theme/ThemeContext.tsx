import React, { createContext, useState, useMemo, useContext } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createCustomTheme, THEME_MODE } from "./theme";

interface ThemeContextType {
  toggleTheme: () => void;
  mode: THEME_MODE;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<THEME_MODE>(THEME_MODE.LIGHT); 

  const toggleTheme = () => {
    setMode((prevMode) =>
      prevMode === THEME_MODE.LIGHT ? THEME_MODE.DARK : THEME_MODE.LIGHT
    );
  };

  const theme = useMemo(() => createCustomTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
