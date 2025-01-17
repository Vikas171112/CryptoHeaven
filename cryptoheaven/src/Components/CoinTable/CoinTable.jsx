import React, { useContext, useState } from "react";
import { getCoinData } from "../Services/getCoinList";
import { useQuery } from "@tanstack/react-query";
import { CurrencyContext } from "../Context/CurrencyContect";
import { useNavigate } from "react-router-dom";

function CoinTable() {
  const [page, setPage] = useState(1); // State to manage pagination
  const { currency } = useContext(CurrencyContext);
  const navigate = useNavigate();

  // Use React Query with the object-based signature
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["coins", page, currency], // Include page and currency in queryKey
    queryFn: () => getCoinData(page, currency), // Pass the API call function
    keepPreviousData: true,
    cachetime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2, // Keep previous data while fetching new data
  });
  function handlenavigationtoDetails(id) {
    navigate(`/details/${id}`);
  }
  if (isLoading) {
    return (
      <div className="text-center text-lg">
        <p>Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-lg text-red-500">
        <p>Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="overflow-x-auto rounded shadow-md">
        <table className="table-fixed table-auto w-full">
          <thead className="bg-gray-800 text-white">
            <tr className="text-left text-lg">
              <th className="p-2">Name</th>
              <th className="p-2">Current Price ({currency.toUpperCase()})</th>
              <th className="p-2">High in 24hrs</th>
              <th className="p-2">Low in 24 hrs</th>
              <th className="p-2">Last Updated</th>
              <th className="p-2">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((coin) => (
                <tr
                  className="bg-gray-300 text-blue-700 cursor-pointer"
                  onClick={() => {
                    handlenavigationtoDetails(coin.id);
                  }}
                  key={coin.id}
                >
                  <td className="flex items-center gap-1">
                    <img className="h-10" src={coin.image} alt={coin.name} />
                    <h4 className="text-lg font-semibold">{coin.name}</h4>
                  </td>
                  <td>{coin.current_price.toLocaleString()}</td>
                  <td>{coin.high_24h.toLocaleString()}</td>
                  <td>{coin.low_24h.toLocaleString()}</td>
                  <td>{new Date(coin.last_updated).toLocaleString()}</td>
                  <td>{coin.market_cap.toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex gap-4 justify-center items-center mt-4">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="btn btn-primary text-white text-2xl"
        >
          Prev
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="btn btn-secondary text-white text-2xl"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CoinTable;
