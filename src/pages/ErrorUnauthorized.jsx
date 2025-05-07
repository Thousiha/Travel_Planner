import React from "react";
import { Typography, Box } from "@mui/material";

const ErrorUnauthorized = () => {
  return (
    <Box sx={{ mt: 10, textAlign: "center" }}>
      <Typography variant="h2">401</Typography>
      <Typography variant="h5">Unauthorized Access</Typography>
    </Box>
  );
};

export default ErrorUnauthorized;
