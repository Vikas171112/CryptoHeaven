import React from "react";
import { useParams } from "react-router-dom";

function CoinDetails() {
  const { coinId } = useParams();

  return <div>CoinDetails{coinId}</div>;
}

export default CoinDetails;
