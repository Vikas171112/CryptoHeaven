import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoinDetails from "../Pages/CoinDetails";
import Home from "../Pages/Home";
import MainLayout from "../MainLayout/MainLayout";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/details/:coinId" element={<CoinDetails />} />
      </Route>
    </Routes>
  );
}

export default Routing;
