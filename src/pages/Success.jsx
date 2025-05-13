import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Success = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: 'center', mt: 10, p: 3 }}>
      <CheckCircleOutlineIcon color="success" sx={{ fontSize: 80 }} />
      <Typography variant="h4" gutterBottom>Thank you for your payment!</Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Your booking has been successfully confirmed.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/')}>
        Go to Home
      </Button>
    </Box>
  );
};

export default Success;
