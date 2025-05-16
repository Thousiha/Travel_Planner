import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  CardMedia,
  Box,
  TextField,
  Container,
} from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import destinationPackages from "./DestinationPackages";

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const destinations = [
  {
    name: "Azerbaijan",
    lat: 40.1431,
    lng: 47.5769,
    image: "https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg",
    description: "Ancient temples and modern architecture blend seamlessly",
  },
  {
    name: "Bali",
    lat: -8.3405,
    lng: 115.092,
    image: "https://images.pexels.com/photos/1802255/pexels-photo-1802255.jpeg",
    description: "Tropical paradise with rich cultural heritage",
  },
  {
    name: "Bangkok",
    lat: 13.7563,
    lng: 100.5018,
    image: "https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg",
    description: "Vibrant street life and ornate temples",
  },
  {
    name: "Cambodia",
    lat: 12.5657,
    lng: 104.991,
    image: "https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg",
    description: "Home to the magnificent Angkor Wat",
  },
  {
    name: "Costa Rica",
    lat: 9.7489,
    lng: -83.7534,
    image: "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg",
    description: "Rainforests and pristine beaches",
  },
  {
    name: "Dubai",
    lat: 25.276987,
    lng: 55.296249,
    image: "https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg",
    description: "Ultramodern architecture and luxury shopping",
  },
  {
    name: "Egypt",
    lat: 26.8206,
    lng: 30.8025,
    image: "https://images.pexels.com/photos/3689859/pexels-photo-3689859.jpeg",
    description: "Ancient pyramids and rich history",
  },
  {
    name: "Hungary",
    lat: 47.1625,
    lng: 19.5033,
    image: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg",
    description: "Thermal baths and stunning architecture",
  },
  {
    name: "Indonesia",
    lat: -0.7893,
    lng: 113.9213,
    image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg",
    description: "Diverse islands and unique wildlife",
  },
  {
    name: "Kazakhstan",
    lat: 48.0196,
    lng: 66.9237,
    image: "https://images.pexels.com/photos/3889663/pexels-photo-3889663.jpeg",
    description: "Vast steppes and modern cities",
  },
  {
    name: "Kenya",
    lat: -0.0236,
    lng: 37.9062,
    image: "https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg",
    description: "Safari adventures and wildlife",
  },
  {
    name: "Krabi",
    lat: 8.0863,
    lng: 98.9063,
    image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg",
    description: "Dramatic limestone cliffs and beaches",
  },
  {
    name: "Maldives",
    lat: 3.2028,
    lng: 73.2207,
    image: "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg",
    description: "Luxury resorts and coral reefs",
  },
  {
    name: "Mauritius",
    lat: -20.348404,
    lng: 57.552152,
    image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg",
    description: "Pristine beaches and diverse culture",
  },
  {
    name: "Netherlands",
    lat: 52.1326,
    lng: 5.2913,
    image: "https://images.pexels.com/photos/2031706/pexels-photo-2031706.jpeg",
    description: "Picturesque canals and windmills",
  },
  {
    name: "Philippines",
    lat: 13.41,
    lng: 122.56,
    image: "https://images.pexels.com/photos/1802255/pexels-photo-1802255.jpeg",
    description: "Tropical islands and friendly people",
  },
  {
    name: "Saudi Arabia",
    lat: 23.8859,
    lng: 45.0792,
    image: "https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg",
    description: "Ancient heritage and modern cities",
  },
];

const Discover = () => {
  const [open, setOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleClickOpen = (destination) => {
    setSelectedDestination(destination);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedDestination(null);
  };

  const filteredDestinations = destinations.filter((dest) =>
    dest.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderPackageDialog = () => {
    if (!selectedDestination) return null;

    const packages = destinationPackages[selectedDestination.name] || [];

    return (
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle sx={{ bgcolor: "primary.main", color: "white" }}>
          {selectedDestination.name} Travel Packages
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={3}>
            {packages.map((pkg, index) => (
              <Grid item xs={12} key={index}>
                <Card sx={{ mb: 2 }}>
                  <CardContent>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {pkg.title}
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <List>
                          <ListItem>
                            <ListItemText primary={`Cost: ${pkg.cost}`} />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary={`Foods: ${pkg.foods}`} />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary={`Stay: ${pkg.stay}`} />
                          </ListItem>
                        </List>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography variant="subtitle1" gutterBottom>
                          Features:
                        </Typography>
                        <List>
                          {pkg.features.map((feature, i) => (
                            <ListItem key={i}>
                              <ListItemText primary={feature} />
                            </ListItem>
                          ))}
                        </List>
                      </Grid>
                    </Grid>
                    <Box display="flex" justifyContent="flex-end" mt={2}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          handleClose();
                          navigate("/Payment");
                        }}
                      >
                        Book Now
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <Container maxWidth="xl">
      {/* Search Bar */}
      <Box mt={3} mb={3} textAlign="center">
        <TextField
          label="Search Destinations"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: "80%", maxWidth: 600 }}
        />
      </Box>

      {/* Map */}
      <Box mb={5} sx={{ height: 500, width: "100%", borderRadius: 2, overflow: "hidden" }}>
        <MapContainer
          center={[20, 0]}
          zoom={2}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />
          {filteredDestinations.map((dest, index) => (
            <Marker
              key={index}
              position={[dest.lat, dest.lng]}
              eventHandlers={{
                click: () => handleClickOpen(dest),
              }}
            >
              <Popup>
                <Typography variant="subtitle1" fontWeight="bold">
                  {dest.name}
                </Typography>
                <Typography variant="body2">{dest.description}</Typography>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>

      {/* Destinations Grid */}
      <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4 }}>
        Explore Amazing Destinations
      </Typography>

      <Grid container spacing={4}>
        {filteredDestinations.map((dest, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                }
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={dest.image}
                alt={dest.name}
                sx={{ objectFit: "cover" }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {dest.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {dest.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  fullWidth 
                  variant="contained" 
                  onClick={() => handleClickOpen(dest)}
                >
                  View Packages
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {renderPackageDialog()}
    </Container>
  );
};

export default Discover;