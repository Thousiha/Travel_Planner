import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import CountUp from "react-countup";
import HeroImage from "../assets/hero.jpg";
import t3 from "../assets/t3.jpg";
import t4 from "../assets/t4.jpg";
import t5 from "../assets/t5.jpg";
import t8 from "../assets/t8.jpg";
import t9 from "../assets/t9.jpg";
import t10 from "../assets/t10.jpg";
import t11 from "../assets/t11.jpg";
import t12 from "../assets/t12.jpg";
import t13 from "../assets/t13.jpg";
import t14 from "../assets/t14.jpg";
import t15 from "../assets/t15.jpg";
import t16 from "../assets/t16.jpg";
import t17 from "../assets/t17.jpg";

const icebergStories = [
  {
    title: "Scaling the Frozen Giants of Antarctica",
    story:
      "Battling icy winds and slippery slopes, we climbed towering icebergs under the ethereal glow of the polar sun. A surreal adventure in a world of ice and silence.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Kayaking Through Crystal Blue Ice Caves",
    story:
      "Paddling through narrow tunnels carved inside glaciers, the light refracted into mesmerizing shades of blue — an otherworldly journey beneath the frozen surface.",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Camping on an Iceberg in Greenland",
    story:
      "Sleeping under the shimmering Northern Lights atop a drifting iceberg — a humbling, magical night in the heart of the Arctic wilderness.",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
  },
];

function StoryCard({ story }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: 8,
          },
          borderRadius: 3,
        }}
        onClick={() => setExpanded(!expanded)}
        elevation={3}
      >
        <Box
          component="img"
          src={story.image}
          alt={story.title}
          sx={{
            width: "100%",
            height: 220,
            objectFit: "cover",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
        />
        <CardContent>
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "#004d80" }}
          >
            {story.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              maxHeight: expanded ? "none" : 60,
              overflow: "hidden",
              transition: "max-height 0.3s ease",
              userSelect: "none",
            }}
          >
            {story.story}
          </Typography>
          <Typography
            variant="body2"
            color="primary"
            sx={{ mt: 1, fontWeight: "bold", userSelect: "none" }}
          >
            {expanded ? "Show Less ▲" : "Read More ▼"}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

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
          color: "white",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Plan Your Dream Trip Today!
        </Typography>
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
            {
              title: "Personalized Plans",
              desc: "Tailor your trip exactly the way you want.",
            },
            {
              title: "Real-time Recommendations",
              desc: "Get smart suggestions based on your preferences.",
            },
            {
              title: "Secure Login",
              desc: "Your data is safe and encrypted.",
            },
            {
              title: "Notifications",
              desc: "Stay updated with your travel progress.",
            },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {feature.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Travel Motivation Gallery */}
      <Container sx={{ mt: 8, px: 0 }} maxWidth="xl" disableGutters>
        <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4 }}>
          Get Inspired to Explore
        </Typography>
        <Grid container spacing={3}>
          {[t3, t4, t5, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17].map(
            (img, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  component="img"
                  src={img}
                  alt={`Travel Image ${index + 1}`}
                  sx={{
                    width: "100%",
                    height: 250,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Grid>
            )
          )}
        </Grid>
      </Container>

      {/* Travel Stories Section (Iceberg Adventure Theme) */}
      <Container
        sx={{
          mt: 8,
          pb: 6,
          background: "linear-gradient(135deg, #d0f0fd 0%, #a0d8ef 100%)",
          borderRadius: 3,
          boxShadow: "0 8px 24px rgba(0, 128, 255, 0.15)",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ mb: 5, fontWeight: "bold", color: "#0a4d8c" }}
        >
          Thrilling Adventures from Our Iceberg Explorers
        </Typography>
        <Grid container spacing={4}>
          {icebergStories.map((story, index) => (
            <StoryCard key={index} story={story} />
          ))}
        </Grid>
      </Container>

      {/* Statistics Section */}
      <Container sx={{ mt: 6, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Why Choose Us?
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[
            { title: "Users", count: 1200 },
            { title: "Trips Completed", count: 850 },
            { title: "Destinations Covered", count: 90 },
          ].map((stat, i) => (
            <Grid
              item
              xs={12}
              sm={4}
              key={i}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Typography variant="h3" color="primary">
                <CountUp end={stat.count} duration={2} />+
              </Typography>
              <Typography variant="h6">{stat.title}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: "#f5f5f5", py: 4, textAlign: "center", mt: 8 }}>
        <Typography variant="body2">
          © 2025 Travel Planner. All rights reserved.
        </Typography>
        <Box mt={1}>
          <Button href="/Contact" size="small" aria-label="Contact Support">
            Contact
          </Button>
          <Button href="/about" size="small" aria-label="Learn more about us">
            About
          </Button>
          <Button
            href="/terms"
            size="small"
            aria-label="Read Terms and Conditions"
          >
            Terms
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
