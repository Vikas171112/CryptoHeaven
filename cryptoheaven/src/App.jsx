import { useState } from "react";
import Banner from "./Components/Banner/Banner";
import CoinTable from "./Components/CoinTable/CoinTable";
import Navbar from "./Components/Navigation/Navbar";
import { CurrencyContext } from "./Components/Context/CurrencyContect";
import Home from "./Components/Pages/Home";
import { Router } from "react-router-dom";
import Routing from "./Components/Routing/Routing";

function App() {
  const [currency, setCurrency] = useState("inr");

  return (
    <>
      <CurrencyContext.Provider value={{ currency, setCurrency }}>
        <Routing />
      </CurrencyContext.Provider>
    </>
  );
}

export default App;
