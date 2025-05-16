import React, { useState } from "react";
import { Typography, Box, Button, TextField, Card, CardContent, Divider } from "@mui/material";

const Payment = () => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = () => {
    if (name && cardNumber && expiry && cvv && amount) {
      setPaymentSuccess(true);
    }
  };

  return (
    <Box sx={{ p: 4, maxWidth: 500, mx: "auto", mt: 5 }}>
      <Card sx={{ boxShadow: 5, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Secure Checkout
          </Typography>
          <Divider sx={{ mb: 3 }} />

          {!paymentSuccess ? (
            <>
              <TextField 
                label="Name on Card" 
                variant="outlined" 
                fullWidth 
                sx={{ mb: 2 }} 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
              <TextField 
                label="Card Number" 
                variant="outlined" 
                fullWidth 
                sx={{ mb: 2 }} 
                value={cardNumber} 
                onChange={(e) => setCardNumber(e.target.value)} 
              />
              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <TextField 
                  label="Expiry Date" 
                  variant="outlined" 
                  fullWidth 
                  value={expiry} 
                  onChange={(e) => setExpiry(e.target.value)} 
                />
                <TextField 
                  label="CVV" 
                  variant="outlined" 
                  fullWidth 
                  value={cvv} 
                  onChange={(e) => setCvv(e.target.value)} 
                />
              </Box>
              <TextField 
                label="Amount (₹)" 
                variant="outlined" 
                fullWidth 
                sx={{ mb: 3 }} 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
              />

              <Button variant="contained" color="primary" onClick={handlePayment} fullWidth sx={{ py: 1.5 }}>
                Pay Now
              </Button>
            </>
          ) : (
            <Typography variant="h6" color="success.main" align="center">
              Payment of ₹{amount} successful!
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Payment;
