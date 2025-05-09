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

const AdminLayout = () => {
  const location = useLocation();

  const navItems = [
    { text: "Home", path: "/" },
    { text: "Trip Request", path: "/trip-request" },
    { text: "Request Status", path: "/request-status" },
    { text: "Recommendations", path: "/recommendations" },
    { text: "Admin Requests", path: "/admin-requests" },
    { text: "Admin Announcements", path: "/admin-announcements" },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* AppBar */}
      <AppBar position="fixed" sx={{ backgroundColor: "#0288d1" }}>
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "start", flexDirection: "row" }}>
          <Typography variant="h6" color="inherit" sx={{ pt: 1 }}>
            Travel Planner
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            {/* Nav buttons */}
            <Stack direction="row" spacing={2}>
              {navItems.map(({ text, path }) => (
                <Button
                  key={text}
                  component={Link}
                  to={path}
                  color="inherit"
                  sx={{
                    textTransform: "none",
                    fontWeight: location.pathname === path ? "bold" : "normal",
                    borderBottom: location.pathname === path ? "2px solid white" : "none"
                  }}
                >
                  {text}
                </Button>
              ))}
            </Stack>

            {/* Divider for visual separation */}
            <Divider sx={{ width: "100%", my: 1, borderColor: "rgba(255,255,255,0.2)" }} />

            
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          backgroundColor: "#e3f2fd",
          flexGrow: 1,
          p: 3,
          mt: "0px", // Offset fixed AppBar
        }}
      >

        {/* Routed child content */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;   