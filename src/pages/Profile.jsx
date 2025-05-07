import React, { useState } from "react";
import { TextField, Button, Typography, Paper, Box } from "@mui/material";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Thousiha",
    email: "admin@example.com",
    role: "Admin",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Updated Profile:", profile);
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Profile</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField label="Name" name="name" value={profile.name} onChange={handleChange} />
        <TextField label="Email" name="email" value={profile.email} onChange={handleChange} />
        <TextField label="Role" name="role" value={profile.role} disabled />
        <Button variant="contained" color="primary" onClick={handleSave}>Save Changes</Button>
      </Box>
    </Paper>
  );
};

export default Profile;
