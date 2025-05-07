import React, { useEffect, useState } from "react";
import { Typography, Card, CardContent, Grid, Paper } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Initial sample data (mocked for 5 years)
const initialTouristData = [
  { year: "2019", France: 89, Spain: 83, USA: 79 },
  { year: "2020", France: 35, Spain: 38, USA: 40 },
  { year: "2021", France: 52, Spain: 50, USA: 48 },
  { year: "2022", France: 75, Spain: 72, USA: 70 },
  { year: "2023", France: 82, Spain: 80, USA: 78 },
];

const Dashboard = () => {
  const [touristData, setTouristData] = useState(initialTouristData);

  // Simulate live updates to data every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTouristData((prevData) =>
        prevData.map((entry) => ({
          ...entry,
          France: entry.France + Math.floor(Math.random() * 2 - 1),
          Spain: entry.Spain + Math.floor(Math.random() * 2 - 1),
          USA: entry.USA + Math.floor(Math.random() * 2 - 1),
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: "#e3f2fd" }}>
            <CardContent>
              <Typography variant="h6">Total Trips</Typography>
              <Typography variant="h4">24</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: "#e8f5e9" }}>
            <CardContent>
              <Typography variant="h6">Pending Requests</Typography>
              <Typography variant="h4">5</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Paper sx={{ mt: 5, p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Tourists Visited by Country (Past 5 Years)
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={touristData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis label={{ value: "Millions", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="France" stroke="#8884d8" />
            <Line type="monotone" dataKey="Spain" stroke="#82ca9d" />
            <Line type="monotone" dataKey="USA" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </div>
  );
};

export default Dashboard;
