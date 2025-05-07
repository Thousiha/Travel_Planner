import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/Dashboard";
import TripRequest from "./pages/TripRequest";
import RequestStatus from "./pages/RequestStatus";
import Profile from "./pages/Profile";
import AdminRequests from "./pages/AdminRequests";
import AdminAnnouncements from "./pages/AdminAnnouncements";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error404 from "./pages/Error404";
import ErrorUnauthorized from "./pages/ErrorUnauthorized";
import Recommendations from "./pages/Recommendations"; // Correct import path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<ErrorUnauthorized />} />

        {/* Admin routes under AdminLayout */}
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="trip-request" element={<TripRequest />} />
          <Route path="request-status" element={<RequestStatus />} />
          <Route path="profile" element={<Profile />} />
          <Route path="admin-requests" element={<AdminRequests />} />
          <Route path="admin-announcements" element={<AdminAnnouncements />} />
          
          {/* Nested Recommendations inside AdminLayout */}
          <Route path="recommendations" element={<Recommendations />} />
          
          {/* Catch-all for unknown routes */}
          <Route path="*" element={<Error404 />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
