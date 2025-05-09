import React, { useState } from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  CardActions,
  Box,
  CardMedia,
} from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import azer from '../assets/azer.jpg';
import bali from '../assets/bali.jpg';
import bangkok from '../assets/bangkok.jpg';
import cambodia from '../assets/cambodia.jpg';
import costa from '../assets/costarica.jpg';
import dubai  from '../assets/dubai.jpg';
import egypt from '../assets/egypt.jpg';
import hungary from '../assets/hungary.jpg';
import indonesia from '../assets/indonesia.jpg';
import kazakh from '../assets/kazakh.jpg';
import kenya from '../assets/kenya.jpg';
import krabi from '../assets/krabi.jpg';
import maldives from '../assets/maldives.jpg';
import mauritius from '../assets/mauritius.jpg';
import nether from '../assets/netherland.jpg';
import phillip from '../assets/phillipine.jpg';
import saudi from '../assets/saudi.jpg';
import singapore from '../assets/singapore.jpg';
import spain from '../assets/spain.jpg';
import turkey from '../assets/turkey.jpg';
import venice from '../assets/venice.jpg';
import vietnam from '../assets/vietnam.jpg';
import ire from "../assets/ire.jpg";
import malay from "../assets/malay.jpg";
// Fix Leaflet marker icon issue in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Destination data with coordinates and image URLs
const destinations = [
  {
    name: "Azerbaijan",
    keywords: ["mountains", "culture", "caspian", "history"],
    lat: 40.1431,
    lng: 47.5769,
    image: azer,
  },
  {
    name: "Bali",
    keywords: ["beach", "relax", "nature", "island"],
    lat: -8.3405,
    lng: 115.0920,
    image: bali,
  },
  {
    name: "Bangkok",
    keywords: ["city", "nightlife", "shopping", "culture"],
    lat: 13.7563,
    lng: 100.5018,
    image: bangkok,
  },
  {
    name: "Cambodia",
    keywords: ["temples", "history", "culture", "nature"],
    lat: 12.5657,
    lng: 104.9910,
    image: cambodia,
  },
  {
    name: "Costa Rica",
    keywords: ["rainforest", "adventure", "wildlife", "beach"],
    lat: 9.7489,
    lng: -83.7534,
    image: costa,
  },
  {
    name: "Dubai",
    keywords: ["luxury", "shopping", "desert", "city"],
    lat: 25.276987,
    lng: 55.296249,
    image: dubai,
  },
  {
    name: "Egypt",
    keywords: ["pyramids", "history", "desert", "ancient"],
    lat: 26.8206,
    lng: 30.8025,
    image: egypt,
  },
  {
    name: "Hungary",
    keywords: ["culture", "europe", "history", "thermal"],
    lat: 47.1625,
    lng: 19.5033,
    image: hungary,
  },
  {
    name: "Indonesia",
    keywords: ["islands", "diving", "culture", "nature"],
    lat: -0.7893,
    lng: 113.9213,
    image: indonesia,
  },
  {
    name: "Kazakhstan",
    keywords: ["steppe", "mountains", "nature", "culture"],
    lat: 48.0196,
    lng: 66.9237,
    image: kazakh,
  },
  {
    name: "Kenya",
    keywords: ["safari", "wildlife", "nature", "africa"],
    lat: -1.2921,
    lng: 36.8219,
    image: kenya,
  },
  {
    name: "Krabi",
    keywords: ["beach", "island", "cliffs", "relax"],
    lat: 8.0863,
    lng: 98.9063,
    image: krabi,
  },
  {
    name: "Maldives",
    keywords: ["luxury", "island", "beach", "resort"],
    lat: 3.2028,
    lng: 73.2207,
    image: maldives,
  },
  {
    name: "Mauritius",
    keywords: ["beach", "island", "relax", "nature"],
    lat: -20.3484,
    lng: 57.5522,
    image: mauritius,
  },
  {
    name: "Netherlands",
    keywords: ["europe", "tulips", "cycling", "canals"],
    lat: 52.1326,
    lng: 5.2913,
    image: nether,
  },
  {
    name: "Philippines",
    keywords: ["islands", "beach", "diving", "nature"],
    lat: 13.41,
    lng: 122.56,
    image: phillip,
  },
  {
    name: "Saudi Arabia",
    keywords: ["desert", "religion", "culture", "history"],
    lat: 23.8859,
    lng: 45.0792,
    image: saudi,
  },
  {
    name: "Singapore",
    keywords: ["city", "modern", "technology", "clean"],
    lat: 1.3521,
    lng: 103.8198,
    image: singapore,
  },
  {
    name: "Spain",
    keywords: ["europe", "culture", "beach", "history"],
    lat: 40.4637,
    lng: -3.7492,
    image: spain,
  },
  {
    name: "Turkey",
    keywords: ["europe", "asia", "history", "culture"],
    lat: 38.9637,
    lng: 35.2433,
    image: turkey,
  },
  {
    name: "Venice",
    keywords: ["canals", "romance", "italy", "europe"],
    lat: 45.4408,
    lng: 12.3155,
    image: venice,
  },
  {
    name: "Vietnam",
    keywords: ["asia", "culture", "history", "nature"],
    lat: 14.0583,
    lng: 108.2772,
    image: vietnam,
  },
  {
    name:"ireland",
    keywords:["flower blossoms","chill","nature"],
    lat:14.0583,
    lng:108.2772,
    image: ire,
  },
  {
    name:"malaysia",
    keywords:["culture","people","nature"],
    lat:14.0583,
    lng:108.2772,
    image: malay,
  },
];


const Recommendations = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState(destinations);

  const handleSearch = () => {
    const interests = input.toLowerCase().split(/[\s,]+/);
    const matched = destinations.filter((dest) =>
      dest.keywords.some((k) => interests.includes(k))
    );
    setResults(matched.length > 0 ? matched : []);
  };

  const handleMapClick = (place) => {
    setResults([place]);
    setInput(place.keywords.join(", "));
  };

  return (
    <Box sx={{ width: "100%", padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Look for your desired destination
      </Typography>

      <TextField
        label="Enter interests (e.g., beach, history, city)"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={{ my: 2 }}
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>

      {/* Interactive Map */}
      <Box sx={{ height: "400px", my: 3 }}>
        <MapContainer center={[20, 0]} zoom={2} style={{ height: "100%", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {destinations.map((place) => (
            <Marker
              key={place.name}
              position={[place.lat, place.lng]}
              eventHandlers={{
                click: () => handleMapClick(place),
              }}
            >
              <Popup>{place.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>

      {/* Destination Cards */}
      <Grid container spacing={3}>
        {results.map((place) => (
          <Grid item xs={12} sm={6} md={4} key={place.name}>
            <Card>
              {place.image && (
                <CardMedia
                  component="img"
                  height="140"
                  image={place.image}
                  alt={place.name}
                />
              )}
              <CardContent>
                <Typography variant="h6">{place.name}</Typography>
                <Typography variant="body2">
                  Keywords: {place.keywords.join(", ")}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => alert(`More about ${place.name}`)}
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        {results.length === 0 && (
          <Typography variant="body1" sx={{ mt: 4, ml: 2 }}>
            No destinations matched your interests.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default Recommendations;
