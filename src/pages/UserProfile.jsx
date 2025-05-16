import React, { useState } from 'react';
import { Box, Typography, Paper, TextField, Button, Avatar, Grid } from '@mui/material';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'user@example.com',
    phone: '+1234567890',
    address: '123 User Street',
    preferences: 'Adventure Travel, Cultural Experiences',
    joinDate: '2024-01-01',
    tripsBooked: 5
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
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
          />
          <Box>
            <Typography variant="h4" gutterBottom>User Profile</Typography>
            <Typography variant="body2" color="textSecondary">
              Member since: {profile.joinDate}
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
              label="Address"
              value={profile.address}
              disabled={!isEditing}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Travel Preferences"
              value={profile.preferences}
              disabled={!isEditing}
              multiline
              rows={2}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>Activity Summary</Typography>
          <Typography>Total Trips Booked: {profile.tripsBooked}</Typography>
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

export default UserProfile;