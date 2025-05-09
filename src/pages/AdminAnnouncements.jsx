import React, { useState } from "react";
import { Typography, TextField, Button, Paper, List, ListItem, ListItemText } from "@mui/material";

const AdminAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([
    "System maintenance on Friday at 6 PM.",
    "New travel policy updated.",
  ]);
  const [newAnnouncement, setNewAnnouncement] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePost = () => {
    if (newAnnouncement.trim()) {
      setAnnouncements([newAnnouncement, ...announcements]);
      setNewAnnouncement("");
      setErrorMessage(""); // Clear any previous error message
    } else {
      setErrorMessage("Announcement cannot be empty.");
    }
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Admin Announcements</Typography>
      
      {/* Error message announcement area */}
      {errorMessage && (
        <div role="alert" aria-live="assertive" style={{ color: 'red', marginBottom: '10px' }}>
          {errorMessage}
        </div>
      )}

      <TextField
        fullWidth
        label="New Announcement"
        value={newAnnouncement}
        onChange={(e) => setNewAnnouncement(e.target.value)}
        sx={{ mb: 2 }}
        aria-label="New Announcement Input"
      />
      <Button 
        variant="contained" 
        onClick={handlePost} 
        aria-label="Post Announcement Button"
      >
        Post Announcement
      </Button>

      {/* List of announcements */}
      <List sx={{ mt: 2 }}>
        {announcements.map((item, index) => (
          <ListItem key={index} divider>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default AdminAnnouncements;
