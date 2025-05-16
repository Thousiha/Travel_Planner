import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const UserDashboard = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        User Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">My Trips</Typography>
            <Typography>View and manage your travel plans</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Profile</Typography>
            <Typography>Update your personal information</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDashboard;