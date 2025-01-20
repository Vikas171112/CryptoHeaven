import { useState } from "react";

import CoinTable from "./Components/CoinTable/CoinTable";
import Navbar from "./Components/Navigation/Navbar";
import { CurrencyContext } from "./Components/Context/CurrencyContect";
import Home from "./Components/Pages/Home";
import { Router } from "react-router-dom";
import Routing from "./Components/Routing/Routing";
import { ComparisonContext } from "./Components/Context/ComparisonContext";

function App() {
  const [currency, setCurrency] = useState("inr");

  const [selectedCoins, setSelectedCoins] = useState([]);
  const addCoin = (coin) => {
    if (!selectedCoins.includes(coin)) {
      setSelectedCoins([...selectedCoins, coin]);
    }
  };
  const removeCoin = (coinName) => {
    setSelectedCoins((prev) => prev.filter((coin) => coin !== coinName));
  };

  return (
    <>
      <CurrencyContext.Provider value={{ currency, setCurrency }}>
        <ComparisonContext.Provider
          value={{ selectedCoins, setSelectedCoins, addCoin, removeCoin }}
        >
          <Routing />
        </ComparisonContext.Provider>
      </CurrencyContext.Provider>
    </>
  );
}

export default App;
