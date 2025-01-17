import React from "react";
import Navbar from "../Navigation/Navbar";
import Banner from "../Banner/Banner";
import CoinTable from "../CoinTable/CoinTable";

function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow px-4 py-8 md:px-8 lg:px-12">
          <CoinTable />
        </main>
      </div>
    </>
  );
}

export default Home;
