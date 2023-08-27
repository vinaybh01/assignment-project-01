import React from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import SideNavbar from "./components/SideNavbar";
import JobsPortal from "./pages/JobsPortal";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Dashboard />
      <JobsPortal />
    </div>
  );
}

export default App;
