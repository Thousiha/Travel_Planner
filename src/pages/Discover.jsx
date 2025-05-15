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
} from "@mui/material";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import destinationPackages from "../pages/DestinationPackages";
import Payment from "./Payment";

import azer from "../assets/azer.jpg";
import bali from "../assets/bali.jpg";
import bangkok from "../assets/bangkok.jpg";
import cambodia from "../assets/cambodia.jpg";
import costa from "../assets/costarica.jpg";
import dubai from "../assets/dubai.jpg";
import egypt from "../assets/egypt.jpg";
import hungary from "../assets/hungary.jpg";
import indonesia from "../assets/indonesia.jpg";
import kazakh from "../assets/kazakh.jpg";
import kenya from "../assets/kenya.jpg";
import krabi from "../assets/krabi.jpg";
import maldives from "../assets/maldives.jpg";
import mauritius from "../assets/mauritius.jpg";
import nether from "../assets/netherland.jpg";
import phillip from "../assets/phillipine.jpg";
import saudi from "../assets/saudi.jpg";

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const destinations = [
  { name: "Azerbaijan", lat: 40.1431, lng: 47.5769, image: azer },
  { name: "Bali", lat: -8.3405, lng: 115.092, image: bali },
  { name: "Bangkok", lat: 13.7563, lng: 100.5018, image: bangkok },
  { name: "Cambodia", lat: 12.5657, lng: 104.991, image: cambodia },
  { name: "Costa Rica", lat: 9.7489, lng: -83.7534, image: costa },
  { name: "Dubai", lat: 25.276987, lng: 55.296249, image: dubai },
  { name: "Egypt", lat: 26.8206, lng: 30.8025, image: egypt },
  { name: "Hungary", lat: 47.1625, lng: 19.5033, image: hungary },
  { name: "Indonesia", lat: -0.7893, lng: 113.9213, image: indonesia },
  { name: "Kazakhstan", lat: 48.0196, lng: 66.9237, image: kazakh },
  { name: "Kenya", lat: -0.0236, lng: 37.9062, image: kenya },
  { name: "Krabi", lat: 8.0863, lng: 98.9063, image: krabi },
  { name: "Maldives", lat: 3.2028, lng: 73.2207, image: maldives },
  { name: "Mauritius", lat: -20.348404, lng: 57.552152, image: mauritius },
  { name: "Netherlands", lat: 52.1326, lng: 5.2913, image: nether },
  { name: "Philippines", lat: 13.41, lng: 122.56, image: phillip },
  { name: "Saudi Arabia", lat: 23.8859, lng: 45.0792, image: saudi },
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
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>{selectedDestination.name} Packages</DialogTitle>
      <DialogContent>
        {packages.map((pkg, index) => (
          <Box key={index} mb={2} borderBottom="1px solid #ccc" pb={2}>
            <Typography variant="h6">{pkg.title}</Typography>
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
              <ListItem>
                <ListItemText
                  primary={`Features: ${pkg.features.join(", ")}`}
                />
              </ListItem>
            </List>
            <Box display="flex" justifyContent="flex-end">
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
          </Box>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

  return (
    <div>
      {/* Search Bar */}
      <Box mt={3} mb={3} textAlign="center">
        <TextField
          label="Search Destinations"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: "80%", maxWidth: 400 }}
        />
      </Box>

      {/* Map */}
      <Box mb={5}>
        <MapContainer center={[20, 0]} zoom={2} style={{ height: "400px", width: "100%" }}>
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
                <strong>{dest.name}</strong>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>

      {/* Trending Destinations Title */}
      <Typography variant="h4" align="center" gutterBottom>
        Trending Destinations
      </Typography>

      {/* Destination Cards */}
      <Grid container spacing={3} justifyContent="center">
        {filteredDestinations.map((dest, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia
                component="img"
                image={dest.image}
                alt={dest.name}
                sx={{ height: 200, objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" align="center">{dest.name}</Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", mt: "auto" }}>
                <Button onClick={() => handleClickOpen(dest)}>View Packages</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {renderPackageDialog()}
    </div>
  );
};

export default Discover;
