// pages/AdminRequests.jsx
import React, { useState } from "react";
import { Box, Typography, Paper, Button, Stack } from "@mui/material";

const mockRequests = [
  { id: 1, user: "user1@example.com", destination: "Paris", status: "Pending" },
  { id: 2, user: "user2@example.com", destination: "Tokyo", status: "Pending" },
];

const AdminRequests = () => {
  const [requests, setRequests] = useState(mockRequests);

  const handleApprove = id => {
    setRequests(prev =>
      prev.map(req => (req.id === id ? { ...req, status: "Approved" } : req))
    );
  };

  return (
    <Box p={4}>
      <Typography variant="h5">User Trip Requests</Typography>
      {requests.map(req => (
        <Paper key={req.id} sx={{ p: 2, my: 2 }}>
          <Typography><strong>User:</strong> {req.user}</Typography>
          <Typography><strong>Destination:</strong> {req.destination}</Typography>
          <Typography><strong>Status:</strong> {req.status}</Typography>
          <Stack direction="row" spacing={2} mt={1}>
            {req.status === "Pending" && (
              <Button variant="contained" onClick={() => handleApprove(req.id)}>
                Approve
              </Button>
            )}
          </Stack>
        </Paper>
      ))}
    </Box>
  );
};

export default AdminRequests;
