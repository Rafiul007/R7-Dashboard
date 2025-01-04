import React, { FC } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme
} from "@mui/material";
import {
  HomeRounded,
  DashboardRounded,
  PersonRounded,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

interface ISidebar {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const Sidebar: FC<ISidebar> = ({ isOpen = false, toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const menuItems = [
    {
      text: "Home",
      icon: <HomeRounded />,
      path: "/",
    },
    {
      text: "Dashboard",
      icon: <DashboardRounded />,
      path: "/home",
    },
    {
      text: "Profile",
      icon: <PersonRounded />,
      path: "/profile",
    },
  ];

  return (
    <Drawer
      variant="temporary"
      open={isOpen}
      onClose={toggleSidebar}
      anchor="left"
      sx={{
        width: 200,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 200,
          boxSizing: "border-box",
        },
      }}
    >
      <List sx={{ mt: 10 }}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                  toggleSidebar();
                }}
                sx={{
                  color: isActive ? theme.palette.info.main : theme.palette.text.secondary,
                  "&:hover": { backgroundColor: "action.hover" },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isActive ? theme.palette.info.main : theme.palette.text.secondary,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    color: isActive ? theme.palette.info.main : theme.palette.text.secondary,
                    fontWeight: isActive ? "bold" : "normal",
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
