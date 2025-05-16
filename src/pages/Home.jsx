import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Container,
  CardMedia,
  CardActions,
} from "@mui/material";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";

const icebergStories = [
  {
    title: "Scaling the Frozen Giants of Antarctica",
    story:
      "Battling icy winds and slippery slopes, we climbed towering icebergs under the ethereal glow of the polar sun. A surreal adventure in a world of ice and silence.",
    image: "https://images.pexels.com/photos/416779/pexels-photo-416779.jpeg",
  },
  {
    title: "Kayaking Through Crystal Blue Ice Caves",
    story:
      "Paddling through narrow tunnels carved inside glaciers, the light refracted into mesmerizing shades of blue — an otherworldly journey beneath the frozen surface.",
    image: "https://images.pexels.com/photos/1266831/pexels-photo-1266831.jpeg",
  },
  {
    title: "Camping on an Iceberg in Greenland",
    story:
      "Sleeping under the shimmering Northern Lights atop a drifting iceberg — a humbling, magical night in the heart of the Arctic wilderness.",
    image: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg",
  },
];

const featuredDestinations = [
  {
    title: "Maldives Paradise",
    image: "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg",
    description: "Crystal clear waters and luxury overwater villas",
  },
  {
    title: "Swiss Alps Adventure",
    image: "https://images.pexels.com/photos/355770/pexels-photo-355770.jpeg",
    description: "Majestic mountains and winter sports",
  },
  {
    title: "Japanese Gardens",
    image: "https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg",
    description: "Tranquil gardens and cultural experiences",
  },
];

function StoryCard({ story }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: 8,
          },
          borderRadius: 3,
        }}
        onClick={() => setExpanded(!expanded)}
      >
        <CardMedia
          component="img"
          height="300"
          image={story.image}
          alt={story.title}
          sx={{ objectFit: "cover" }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom color="#004d80">
            {story.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              maxHeight: expanded ? "none" : 60,
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}
          >
            {story.story}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            {expanded ? "Show Less ▲" : "Read More ▼"}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: "url(https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
          },
        }}
      >
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Typography variant="h2" fontWeight="bold" mb={3}>
            Explore the World with Us
          </Typography>
          <Typography variant="h5" mb={4}>
            Your journey to extraordinary destinations begins here
          </Typography>
          <Box>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mx: 1, px: 4, py: 1.5 }}
              onClick={() => navigate("/signup")}
            >
              Start Your Journey
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              sx={{ mx: 1, px: 4, py: 1.5 }}
              onClick={() => navigate("/discover")}
            >
              Explore Destinations
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Featured Destinations */}
      <Container sx={{ my: 8 }}>
        <Typography variant="h3" textAlign="center" mb={6} color="primary">
          Featured Destinations
        </Typography>
        <Grid container spacing={4}>
          {featuredDestinations.map((destination, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={destination.image}
                  alt={destination.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" gutterBottom>
                    {destination.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {destination.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => navigate("/discover")}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Travel Stories Section */}
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
          variant="h3"
          align="center"
          gutterBottom
          sx={{ pt: 6, mb: 5, fontWeight: "bold", color: "#0a4d8c" }}
        >
          Adventure Stories
        </Typography>
        <Grid container spacing={4}>
          {icebergStories.map((story, index) => (
            <StoryCard key={index} story={story} />
          ))}
        </Grid>
      </Container>

      {/* Statistics Section */}
      <Container sx={{ my: 8, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom color="primary">
          Our Global Impact
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          {[
            { title: "Happy Travelers", count: 1200 },
            { title: "Destinations", count: 90 },
            { title: "Travel Experts", count: 50 },
          ].map((stat, i) => (
            <Grid item xs={12} sm={4} key={i}>
              <Card sx={{ p: 4, height: '100%' }}>
                <Typography variant="h3" color="primary" gutterBottom>
                  <CountUp end={stat.count} duration={2.5} />+
                </Typography>
                <Typography variant="h6">{stat.title}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: "#f5f5f5", py: 4, textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          © 2025 Travel Planner. All rights reserved.
        </Typography>
        <Box mt={2}>
          <Button href="/contact" size="small">
            Contact
          </Button>
          <Button href="/about" size="small">
            About
          </Button>
          <Button href="/terms" size="small">
            Terms
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;