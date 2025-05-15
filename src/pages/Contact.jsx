import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
} from "@mui/material";

const Contact = () => {
  const [contactDetails, setContactDetails] = useState({
    phone: "+91 98765 43210",
    whatsapp: "+91 91234 56789",
    email: "contact@tia-travel.com",
    instagram: "@tia_travel",
    facebook: "TIA Travel Planner",
  });

  // Simulating an API call to fetch new contact data
  useEffect(() => {
    setTimeout(() => {
      setContactDetails({
        phone: "+91 98765 43211", // New phone number, for example
        whatsapp: "+91 91234 56780",
        email: "new-contact@tia-travel.com",
        instagram: "@tia_travel_new",
        facebook: "TIA New Travel Planner",
      });
    }, 5000); // Simulates an update after 5 seconds
  }, []);

  return (
    <Box
      sx={{
        bgcolor: "linear-gradient(to bottom, #f0f8ff, #e0f7fa)", // Smooth icy gradient
        minHeight: "100vh",
        py: 8,
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={6} sx={{ p: 5, borderRadius: 5, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              color: "linear-gradient(to right, #2980b9, #3498db)", // Gradient for heading
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              fontSize: "3rem", // Larger size for impact
              textAlign: "center",
              letterSpacing: "1px",
            }}
          >
            Contact TIA
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: "1.2rem",
              color: "#2c3e50", // Slate gray for body text
              textAlign: "center",
              mb: 4,
              fontFamily: "'Lato', sans-serif",
              lineHeight: 1.6,
            }}
          >
            TIA – The best travel planner to reach your desired destination, even in the icebergs!
          </Typography>

          <Table>
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    color: "#2c3e50", // Slate gray
                  }}
                >
                  Contact Type
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    color: "#2c3e50", // Slate gray
                  }}
                >
                  Detail
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontSize: "1.1rem", color: "#2c3e50" }}>Phone</TableCell>
                <TableCell sx={{ fontSize: "1.1rem", color: "#2c3e50" }}>{contactDetails.phone}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontSize: "1.1rem", color: "#2c3e50" }}>WhatsApp</TableCell>
                <TableCell sx={{ fontSize: "1.1rem", color: "#2c3e50" }}>{contactDetails.whatsapp}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontSize: "1.1rem", color: "#2c3e50" }}>Email</TableCell>
                <TableCell sx={{ fontSize: "1.1rem", color: "#2c3e50" }}>{contactDetails.email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontSize: "1.1rem", color: "#2c3e50" }}>Instagram</TableCell>
                <TableCell sx={{ fontSize: "1.1rem", color: "#2c3e50" }}>{contactDetails.instagram}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontSize: "1.1rem", color: "#2c3e50" }}>Facebook</TableCell>
                <TableCell sx={{ fontSize: "1.1rem", color: "#2c3e50" }}>{contactDetails.facebook}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;
