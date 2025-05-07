import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";

const drawerWidth = 240;

const AdminLayout = () => {
  const location = useLocation();
  const navItems = [
    { text: "Dashboard", path: "/" },
    { text: "Trip Request", path: "/trip-request" },
    { text: "Request Status", path: "/request-status" },
    { text: "Profile", path: "/profile" },
    { text: "Recommendations", path: "/recommendations" },
    { text: "Admin Requests", path: "/admin-requests" },
    { text: "Admin Announcements", path: "/admin-announcements" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ zIndex: 1201 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>Travel Planner Admin</Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <List>
          {navItems.map(({ text, path }) => (
            <ListItem
              button
              key={text}
              component={Link}
              to={path}
              sx={{
                backgroundColor: location.pathname === path ? "rgba(63, 81, 181, 0.2)" : "transparent",
                color: location.pathname === path ? "#3f51b5" : "inherit",
                "&:hover": {
                  backgroundColor: "rgba(63, 81, 181, 0.1)",
                },
              }}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "#f0f0f0", // Temporarily use solid background
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        {/* This is where child components (like Recommendations) will render */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
