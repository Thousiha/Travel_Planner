import React, { useState } from "react";
import { TextField, Button, Paper, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    // Basic dummy logic
    if (user.name && user.email && user.password) {
      navigate("/login");
    }
  };

  return (
    <Paper sx={{ maxWidth: 400, mx: "auto", mt: 8, p: 3 }}>
      <Typography variant="h5" gutterBottom>Register</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField name="name" label="Name" value={user.name} onChange={handleChange} />
        <TextField name="email" label="Email" value={user.email} onChange={handleChange} />
        <TextField name="password" label="Password" type="password" value={user.password} onChange={handleChange} />
        <Button variant="contained" onClick={handleRegister}>Register</Button>
      </Box>
    </Paper>
  );
};

export default Register;
