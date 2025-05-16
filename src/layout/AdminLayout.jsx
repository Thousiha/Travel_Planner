import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import travel from "../assets/travel.png";

const AdminLayout = () => {
  const location = useLocation();

  const navItems = [
    { text: "Home", path: "/" },
    { text: "Trip Request", path: "/trip-request" },
    { text: "Request Status", path: "/request-status" },
    { text: "Discover", path: "/discover" },
    { text: "Contact", path: "/contact" },
    { text: "About", path: "/About" },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* AppBar */}
      <AppBar position="fixed" sx={{ backgroundColor: "#0288d1" }}>
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
          {/* Left: Logo */}
          <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
            <img 
              src={travel} 
              alt="Travel Logo" 
              style={{ 
                height: '60px', 
                marginRight: '10px',
                
              }} 
            />
            <Typography variant="h6" color="inherit">
              Tia
            </Typography>
          </Box>

          {/* Center: Nav Items */}
          <Stack direction="row" spacing={2} sx={{ flex: 2, justifyContent: "center" }}>
            {navItems.map(({ text, path }) => (
              <Button
                key={text}
                component={Link}
                to={path}
                color="inherit"
                sx={{
                  textTransform: "none",
                  fontWeight: location.pathname === path ? "bold" : "normal",
                  borderBottom: location.pathname === path ? "2px solid white" : "none",
                }}
              >
                {text}
              </Button>
            ))}
          </Stack>

          {/* Right: (Placeholder for future items like profile dropdown) */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            {/* Placeholder or add ProfileDropdown component here */}
          </Box>
        </Toolbar>
        <Divider sx={{ width: "100%", borderColor: "rgba(255,255,255,0.2)" }} />
      </AppBar>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          backgroundColor: "#e3f2fd",
          flexGrow: 1,
          p: 3,
          mt: "6px", // Offset for AppBar height
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;