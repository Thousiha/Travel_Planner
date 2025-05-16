import React, { useState } from 'react';
import { Box, Typography, Paper, TextField, Button, Avatar, Grid } from '@mui/material';

const AdminProfile = () => {
  const [profile, setProfile] = useState({
    name: 'Admin User',
    email: 'admin@example.com',
    phone: '+1987654321',
    department: 'Travel Management',
    role: 'Senior Administrator',
    joinDate: '2023-01-01',
    managedRequests: 150,
    approvedTrips: 120
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    // Add API call to save profile changes
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Avatar
            sx={{ width: 100, height: 100, mr: 3 }}
            src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg"
          />
          <Box>
            <Typography variant="h4" gutterBottom>Admin Profile</Typography>
            <Typography variant="body2" color="textSecondary">
              Administrator since: {profile.joinDate}
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              value={profile.name}
              disabled={!isEditing}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              value={profile.email}
              disabled={!isEditing}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone"
              value={profile.phone}
              disabled={!isEditing}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Department"
              value={profile.department}
              disabled={!isEditing}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Role"
              value={profile.role}
              disabled={!isEditing}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>Activity Summary</Typography>
          <Typography>Total Requests Managed: {profile.managedRequests}</Typography>
          <Typography>Trips Approved: {profile.approvedTrips}</Typography>
        </Box>

        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
          {isEditing ? (
            <>
              <Button onClick={() => setIsEditing(false)} sx={{ mr: 2 }}>
                Cancel
              </Button>
              <Button variant="contained" onClick={handleSave}>
                Save Changes
              </Button>
            </>
          ) : (
            <Button variant="contained" onClick={() => setIsEditing(true)}>
              Edit Profile
            </Button>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default AdminProfile;