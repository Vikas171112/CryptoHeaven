import React from "react";
import Navbar from "../Navigation/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar fixed at the top */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Outlet for main content */}
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
