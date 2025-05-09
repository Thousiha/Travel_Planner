import React from "react";
import { Box, Typography, Button, Grid, Card, CardContent, Container } from "@mui/material";
import CountUp from 'react-countup';
import HeroImage from "../assets/hero.jpg"; 

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white"
          
        }}
      >
        <Typography variant="h3" fontWeight="bold">Plan Your Dream Trip Today!</Typography>
        <Box mt={4}>
          <Button
            variant="contained"
            color="primary"
            sx={{ mx: 1 }}
            href="/signup"
            aria-label="Sign up for Travel Planner"
          >
            Sign Up
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ mx: 1 }}
            href="/login"
            aria-label="Login to Travel Planner"
          >
            Login
          </Button>
        </Box>
      </Box>

      {/* Feature Highlights */}
      <Container sx={{ mt: 6 }}>
        <Grid container spacing={3} justifyContent="center">
          {[
            { title: "Personalized Plans", desc: "Tailor your trip exactly the way you want." },
            { title: "Real-time Recommendations", desc: "Get smart suggestions based on your preferences." },
            { title: "Secure Login", desc: "Your data is safe and encrypted." },
            { title: "Notifications", desc: "Stay updated with your travel progress." },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">{feature.title}</Typography>
                  <Typography variant="body2" color="textSecondary">{feature.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Statistics Section */}
      <Container sx={{ mt: 6, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>Why Choose Us?</Typography>
        <Grid container spacing={3} justifyContent="center">
          {[
            { title: "Users", count: 1200 },
            { title: "Trips Completed", count: 850 },
            { title: "Destinations Covered", count: 90 },
          ].map((stat, i) => (
            <Grid item xs={12} sm={4} key={i} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Typography variant="h3" color="primary">
                <CountUp end={stat.count} duration={2} />+
              </Typography>
              <Typography variant="h6">{stat.title}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>

      
  

      {/* Footer */}
      <Box sx={{ bgcolor: '#f5f5f5', py: 4, textAlign: "center" }}>
        <Typography variant="body2">© 2025 Travel Planner. All rights reserved.</Typography>
        <Box mt={1}>
          <Button href="mailto:support@travelplanner.com" size="small" aria-label="Contact Support">Contact</Button>
          <Button href="/about" size="small" aria-label="Learn more about us">About</Button>
          <Button href="/terms" size="small" aria-label="Read Terms and Conditions">Terms</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

