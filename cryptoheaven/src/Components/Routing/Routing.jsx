import React, { lazy, Suspense } from "react";

import { Route, Routes } from "react-router-dom";

import MainLayout from "../MainLayout/MainLayout";
import ComparisonResult from "../CompareCoins/ComparisonResult";
import CoinTable from "../CoinTable/CoinTable";
import AuthPage from "../LoginSignup/AuthPage";

const Home = lazy(() => {
  console.log("Home component is being loaded...");
  return import("../Pages/Home");
});
const CoinDetails = lazy(() => {
  console.log("CoinDetails component is being loaded...");
  return import("../Pages/CoinDetails");
});

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
        <Route path="/cryptolist" element={<CoinTable />} />
        <Route
          path="/details/:coinId"
          element={
            <Suspense fallback={<div>waiting waiting waiying</div>}>
              <CoinDetails />
            </Suspense>
          }
        />
      </Route>
      <Route path="/comparison" element={<ComparisonResult />} />
      <Route path="/AuthPage" element={<AuthPage />} />
    </Routes>
  );
}

export default Routing;
