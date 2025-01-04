import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createCustomTheme, THEME_MODE } from "./theme/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import RouterConfig from "./navigation/RouterConfig";

const App: React.FC = () => {
  const theme = createCustomTheme(THEME_MODE.LIGHT);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterConfig />
      </ThemeProvider>
    </Router>
  );
};

export default App;
