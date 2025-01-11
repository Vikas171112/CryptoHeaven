import { useState } from "react";
import Banner from "./Components/Banner/Banner";
import CoinTable from "./Components/CoinTable/CoinTable";
import Navbar from "./Components/Navigation/Navbar";

function App() {
  const [currency, setCurrency] = useState("inr");
  return (
    <>
      <Navbar currency={currency} setCurrency={setCurrency} />
      <Banner />
      <CoinTable currency={currency} />
    </>
  );
}

export default App;
