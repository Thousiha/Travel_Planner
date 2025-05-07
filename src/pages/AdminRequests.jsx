import React from "react";
import { Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material";

const requests = [
  { id: 1, name: "Alice", destination: "Delhi", status: "Pending" },
  { id: 2, name: "Bob", destination: "Hyderabad", status: "Approved" },
];

const AdminRequests = () => {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Manage Trip Requests</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee</TableCell>
              <TableCell>Destination</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.destination}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <Button size="small" variant="contained" color="success" sx={{ mr: 1 }}>Approve</Button>
                  <Button size="small" variant="outlined" color="error">Reject</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default AdminRequests;
