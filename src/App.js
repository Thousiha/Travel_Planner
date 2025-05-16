import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import TripRequest from "./pages/TripRequest";
import RequestStatus from "./pages/RequestStatus";
import AdminRequests from "./pages/AdminRequests";
import AdminAnnouncements from "./pages/AdminAnnouncements";
import Error404 from "./pages/Error404";
import ErrorUnauthorized from "./pages/ErrorUnauthorized";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Success from "./pages/Success";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import About from "./pages/About";
import DestinationPackages from "./pages/DestinationPackages";
import Payment from "./pages/Payment";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/unauthorized" element={<ErrorUnauthorized />} />
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Home/>} />
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<Signup/>}/>
          <Route path="trip-request" element={
            <PrivateRoute allowedRoles={['user', 'admin']}>
              <TripRequest />
            </PrivateRoute>
          } />
          <Route path="request-status" element={
            <PrivateRoute allowedRoles={['user', 'admin']}>
              <RequestStatus />
            </PrivateRoute>
          } />
          <Route path="admin-requests" element={
            <PrivateRoute allowedRoles={['admin']}>
              <AdminRequests />
            </PrivateRoute>
          } />
          <Route path="admin-announcements" element={
            <PrivateRoute allowedRoles={['admin']}>
              <AdminAnnouncements />
            </PrivateRoute>
          } />
          <Route path="admin-dashboard" element={
            <PrivateRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </PrivateRoute>
          } />
          <Route path="user-dashboard" element={
            <PrivateRoute allowedRoles={['user']}>
              <UserDashboard />
            </PrivateRoute>
          } />
          <Route path="discover" element={<Discover />} />
          <Route path="/success" element={<Success />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/destinationpackages" element={<DestinationPackages/>} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;