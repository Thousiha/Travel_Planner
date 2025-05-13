import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Box, Button, CircularProgress } from '@mui/material';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_YOUR_PUBLISHABLE_KEY'); // Replace with your Stripe key

const Payment = () => {
  const location = useLocation();
  const { package: selectedPackage, destination } = location.state || {};
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    const stripe = await stripePromise;

    const response = await fetch('http://localhost:8080/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        destination,
        title: selectedPackage.title,
        cost: selectedPackage.cost,
      }),
    });

    const session = await response.json();
    const result = await stripe.redirectToCheckout({ sessionId: session.id });

    if (result.error) {
      alert(result.error.message);
      setLoading(false);
    }
  };

  if (!selectedPackage || !destination) {
    return <Typography variant="h6">Invalid booking data. Please go back and try again.</Typography>;
  }

  return (
    <Box sx={{ p: 4, maxWidth: 600, mx: 'auto', mt: 5, boxShadow: 3, borderRadius: 3 }}>
      <Typography variant="h4" gutterBottom>Secure Payment</Typography>
      <Typography variant="h6" color="text.secondary">Destination: {destination}</Typography>
      <Typography variant="body1">Package: <strong>{selectedPackage.title}</strong></Typography>
      <Typography variant="body1">Cost: ₹{selectedPackage.cost}</Typography>
      <Typography variant="body1">Includes: {selectedPackage.foods} | {selectedPackage.stay}</Typography>
      <Typography variant="body2" sx={{ mt: 2, mb: 3 }} color="text.secondary">
        Proceed to secure checkout powered by Stripe.
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={handlePayment}
        disabled={loading}
        fullWidth
        sx={{ py: 1.5 }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Pay with Stripe'}
      </Button>
    </Box>
  );
};

export default Payment;
