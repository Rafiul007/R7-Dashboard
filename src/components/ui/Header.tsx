import React, { FC } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material";
import { Menu as MenuIcon, AccountCircle } from "@mui/icons-material";

interface IHeader {
  toggleSidebar: () => void;
}

export const Header: FC<IHeader> = ({ toggleSidebar }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: theme.zIndex.drawer + 1, bgcolor: theme.palette.info.main }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "90vw",
          margin: "0 auto",
        }}
      >
        <Stack direction="row" alignItems="center" gap={6}>
          {!isMobile && (
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: theme.palette.common.white, fontWeight: "bold" }}>
              R7
            </Typography>
          )}
          <IconButton
            size="large"
            edge="start"
            onClick={toggleSidebar}
            sx={{ marginRight: 2, color: theme.palette.common.white }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Stack>
        <Stack direction="row" alignItems="center">
          <IconButton color="inherit">
            <AccountCircle fontSize="medium" sx={{ color: theme.palette.common.white }} />
          </IconButton>
          <Typography
            variant="subtitle1"
            sx={{ color: theme.palette.common.white }}
          >
            Profile
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
