import React, { lazy, Suspense } from "react";

import { Route, Routes } from "react-router-dom";
import CoinDetails from "../Pages/CoinDetails";
import Home from "../Pages/Home";
import MainLayout from "../MainLayout/MainLayout";

const HomeLazy = lazy(() => import("../Pages/Home"));
const CoinDetailslazy = lazy(() => import("../Pages/CoinDetails"));

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<div>waiting waiting waiying</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/details/:coinId"
          element={
            <Suspense fallback={<div>waiting waiting waiying</div>}>
              <CoinDetails />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default Routing;
