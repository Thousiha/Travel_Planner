import React, { useState } from "react";
import { TextField, Button, Paper, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    // Basic dummy logic
    if (credentials.email && credentials.password) {
      navigate("/admin");
    }
  };

  return (
    <Paper sx={{ maxWidth: 400, mx: "auto", mt: 8, p: 3 }}>
      <Typography variant="h5" gutterBottom>Login</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField name="email" label="Email" value={credentials.email} onChange={handleChange} />
        <TextField name="password" label="Password" type="password" value={credentials.password} onChange={handleChange} />
        <Button variant="contained" onClick={handleLogin}>Login</Button>
      </Box>
    </Paper>
  );
};

export default Login;
