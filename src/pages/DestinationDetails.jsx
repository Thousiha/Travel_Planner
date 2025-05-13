import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Grid,
  List,
  ListItem,
  Button,
} from "@mui/material";

const destinationPackages = {
  Bali: [
    {
      name: "Relaxation Paradise",
      cost: "$800",
      food: "Buffet (Seafood, Vegan, Local)",
      stay: "Beach Resort - 5 nights",
      features: ["Massage", "Snorkeling", "Sunset Cruise"],
    },
    {
      name: "Adventure Bali",
      cost: "$950",
      food: "Adventure Pack Meals",
      stay: "Jungle Villa - 5 nights",
      features: ["Rafting", "Hiking", "Waterfalls Tour"],
    },
  ],
  Dubai: [
    {
      name: "Luxury Escape",
      cost: "$1200",
      food: "5-star Cuisine",
      stay: "Burj Khalifa Hotel - 3 nights",
      features: ["Desert Safari", "Shopping Spree", "City Tour"],
    },
    {
      name: "Budget Dubai",
      cost: "$700",
      food: "Local Delights",
      stay: "3-star Hotel - 5 nights",
      features: ["City Walk", "Marina Cruise", "Museum Visits"],
    },
  ],
  Maldives: [
    {
      name: "Honeymoon Bliss",
      cost: "$1500",
      food: "Private Dining",
      stay: "Overwater Villa - 4 nights",
      features: ["Couples Spa", "Scuba Diving", "Sunset Dinner"],
    },
    {
      name: "Family Fun",
      cost: "$1000",
      food: "All-Inclusive Buffet",
      stay: "Beach Bungalow - 5 nights",
      features: ["Kids Club", "Snorkeling", "Island Hopping"],
    },
  ],
  Switzerland: [
    {
      name: "Alpine Adventure",
      cost: "$1800",
      food: "Swiss Cuisine",
      stay: "Mountain Chalet - 6 nights",
      features: ["Skiing", "Cable Car Ride", "Cheese Factory Tour"],
    },
    {
      name: "Scenic Serenity",
      cost: "$1600",
      food: "Farm-to-table",
      stay: "Lakeside Hotel - 5 nights",
      features: ["Train Journey", "Lake Cruise", "Spa"],
    },
  ],
  Paris: [
    {
      name: "Romantic Retreat",
      cost: "$1300",
      food: "French Gourmet",
      stay: "City Hotel - 4 nights",
      features: ["Eiffel Tower Visit", "Wine Tasting", "River Seine Cruise"],
    },
    {
      name: "Art & Culture",
      cost: "$1100",
      food: "Bistro Meals",
      stay: "Boutique Hotel - 5 nights",
      features: ["Louvre Tour", "Museum Pass", "Opera Show"],
    },
  ],
};

const DestinationDetails = () => {
  const { destinationName } = useParams();
  const packages = destinationPackages[destinationName] || [];
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/payment");
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Packages for {destinationName}
      </Typography>

      {packages.length === 0 ? (
        <Typography>No packages available for this destination.</Typography>
      ) : (
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {packages.map((pkg, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {pkg.name}
                  </Typography>
                  <Typography><strong>Cost:</strong> {pkg.cost}</Typography>
                  <Typography><strong>Food:</strong> {pkg.food}</Typography>
                  <Typography><strong>Stay:</strong> {pkg.stay}</Typography>
                  <Typography><strong>Features:</strong></Typography>
                  <List dense>
                    {pkg.features.map((f, i) => (
                      <ListItem key={i}>• {f}</ListItem>
                    ))}
                  </List>
                </CardContent>
                <CardActions sx={{ justifyContent: "center", mt: "auto", pb: 2 }}>
                  <Button variant="contained" color="primary" onClick={handleBookNow}>
                    Book Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default DestinationDetails;
