import React, { useEffect, useState } from "react";
import { getCoinData } from "../Services/getCoinList";

function CoinTable({ currency }) {
  const [coinData, setCoinData] = useState([]); // State to store coin data

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getCoinData(currency); // Await the API call
        console.log("API Response:", response);
        const coinArray = response.data; // Access the 'data' key in the response
        console.log("Coin Data:", coinArray);
        setCoinData(coinArray); // Set the extracted coin array in state
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    }

    fetchData(); // Call the fetchData function
  }, [currency]);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead className="bg-gray-950">
            <tr className="text-lime-300 text-lg">
              <th>Name</th>
              <th>Current Price</th>
              <th>High in 24hrs</th>
              <th>Low in 24 hrs</th>
              <th>Last Updated</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {coinData.length > 0 ? (
              coinData.map((coin, index) => (
                <tr className="bg-gray-300 text-blue-700" key={coin.id}>
                  <td className="flex items-center gap-1">
                    <img className="h-10" src={coin.image} alt="" srcset="" />
                    <h4 className="text-lg font-semibold">{coin.name}</h4>
                  </td>
                  <td>${coin.current_price.toLocaleString()}</td>
                  <td>${coin.high_24h.toLocaleString()}</td>
                  <td>${coin.low_24h.toLocaleString()}</td>
                  <td>{new Date(coin.last_updated).toLocaleString()}</td>
                  <td>${coin.market_cap.toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  Loading...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CoinTable;
