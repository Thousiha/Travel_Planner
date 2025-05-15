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
import Payment from "./pages/Payment"; 
import Success from "./pages/Success";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import About from "./pages/About";
import DestinationPackages from "./pages/DestinationPackages";

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/unauthorized" element={<ErrorUnauthorized />} />
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Home/>} />
          <Route path="Login" element={<Login/>}/>
          <Route path="Signup" element={<Signup/>}/>
          <Route path="trip-request" element={<TripRequest />} />
          <Route path="request-status" element={<RequestStatus />} />
          <Route path="admin-requests" element={<AdminRequests />} />
          <Route path="admin-announcements" element={<AdminAnnouncements />} />
          <Route path="discover" element={<Discover />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/success" element={<Success />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
           <Route path="/destinationpackages" element={<DestinationPackages/>} />
          {/* Catch-all for unknown routes */}
          <Route path="*" element={<Error404 />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
