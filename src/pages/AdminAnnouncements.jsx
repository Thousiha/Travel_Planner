import React, { useState } from "react";
import { Typography, TextField, Button, Paper, List, ListItem, ListItemText } from "@mui/material";

const AdminAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([
    "System maintenance on Friday at 6 PM.",
    "New travel policy updated.",
  ]);
  const [newAnnouncement, setNewAnnouncement] = useState("");

  const handlePost = () => {
    if (newAnnouncement.trim()) {
      setAnnouncements([newAnnouncement, ...announcements]);
      setNewAnnouncement("");
    }
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Admin Announcements</Typography>
      <TextField
        fullWidth
        label="New Announcement"
        value={newAnnouncement}
        onChange={(e) => setNewAnnouncement(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={handlePost}>Post Announcement</Button>
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

