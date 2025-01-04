import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Toolbar, useTheme } from "@mui/material";
import Sidebar from "../ui/Sidebar";
import Header from "../ui/Header";

export const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const theme = useTheme();

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
