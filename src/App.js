import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import TripRequest from "./pages/TripRequest";
import RequestStatus from "./pages/RequestStatus";
import AdminRequests from "./pages/AdminRequests";
import AdminAnnouncements from "./pages/AdminAnnouncements";
import Error404 from "./pages/Error404";
import ErrorUnauthorized from "./pages/ErrorUnauthorized";
import Recommendations from "./pages/Recommendations";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


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
          <Route path="recommendations" element={<Recommendations />} />
          
          {/* Catch-all for unknown routes */}
          <Route path="*" element={<Error404 />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
