import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";

const Layout = (props) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="relative" sx={{ bgcolor: "white" }}>
          <Toolbar>
            <IconButton size="large" edge="start" color="black" aria-label="menu" sx={{ mr: 4 }}>
              <LocalLaundryServiceIcon fontSize="large" />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black", fontWeight: "bold" }}>
              Laundry Management System
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
