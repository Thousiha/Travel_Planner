import React, { useState } from "react";
import { TextField, Button, Typography, Box, Paper } from "@mui/material";

const TripRequest = () => {
  const [formData, setFormData] = useState({
    destination: "",
    purpose: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Trip Request Submitted:", formData);
    // Add submission logic
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Trip Request</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField name="destination" label="Destination" value={formData.destination} onChange={handleChange} required />
        <TextField name="purpose" label="Purpose" value={formData.purpose} onChange={handleChange} required />
        <TextField name="startDate" label="Start Date" type="date" InputLabelProps={{ shrink: true }} value={formData.startDate} onChange={handleChange} required />
        <TextField name="endDate" label="End Date" type="date" InputLabelProps={{ shrink: true }} value={formData.endDate} onChange={handleChange} required />
        <Button type="submit" variant="contained" color="primary">Submit</Button>
      </Box>
    </Paper>
  );
};

export default TripRequest;
