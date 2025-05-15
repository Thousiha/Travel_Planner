import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ bgcolor: "#d6efff", minHeight: "100vh", py: 8 }}>
      <Container maxWidth="md">
        <Paper elevation={4} sx={{ p: 6, borderRadius: 4 }}>
          <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
            About 
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            Tia is your ultimate trip companion. We use AI to create personalized travel experiences—helping you plan trips with smart itineraries, real-time suggestions, and efficient tracking.
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            Whether it’s a solo adventure or a family vacation, our platform offers tools that make travel stress-free and memorable.
          </Typography>
          <Typography variant="h6" color="textSecondary">
            With 1200+ happy users and 90+ destinations covered, your next dream trip starts here.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default About;
