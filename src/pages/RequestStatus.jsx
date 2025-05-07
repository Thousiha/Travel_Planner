import React from "react";
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip } from "@mui/material";

const dummyRequests = [
  { id: 1, destination: "Mumbai", status: "Approved" },
  { id: 2, destination: "Chennai", status: "Pending" },
  { id: 3, destination: "Bangalore", status: "Rejected" },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Approved":
      return "success";
    case "Pending":
      return "warning";
    case "Rejected":
      return "error";
    default:
      return "default";
  }
};

const RequestStatus = () => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>Request Status</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Destination</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyRequests.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.destination}</TableCell>
                <TableCell>
                  <Chip label={row.status} color={getStatusColor(row.status)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default RequestStatus;
