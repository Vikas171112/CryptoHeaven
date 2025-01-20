import React, { useContext } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getCoinData } from "../Services/getCoinList";
import { CurrencyContext } from "../Context/CurrencyContect";
import { useNavigate } from "react-router-dom";
import { ComparisonContext } from "../Context/ComparisonContext";

function CoinTable() {
  const { currency } = useContext(CurrencyContext);
  const { addCoin, removeCoin, selectedCoins } = useContext(ComparisonContext);
  const navigate = useNavigate();

  // Infinite Query for fetching paginated data
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["coins", currency],
    queryFn: ({ pageParam = 1 }) => getCoinData(pageParam, currency), // API call with page parameter
    getNextPageParam: (lastPage, allPages) => {
      // Determine if there is a next page
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });

  const handleNavigationToDetails = (id) => {
    navigate(`/details/${id}`);
  };

  const handleToggleCoin = (e, coinName) => {
    e.stopPropagation();
    if (selectedCoins.includes(coinName)) {
      removeCoin(coinName);
    } else {
      addCoin(coinName);
    }
  };

  // Combine all pages of coin data
  const coins = data?.pages.flat() || [];

  // Scroll to load more when reaching the bottom
  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (
      scrollTop + clientHeight >= scrollHeight - 50 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  };

  if (isLoading) {
    return (
      <div className="text-center text-lg">
        <button className="btn btn-square">
          <span className="loading loading-spinner">Loading Data</span>
        </button>
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
    <div
      className="overflow-y-auto h-[100vh] rounded shadow-md"
      onScroll={handleScroll}
    >
      <table className="table-fixed table-auto w-full">
        <thead className="bg-gray-800 text-white">
          <tr className="text-left text-lg">
            <th className="p-2">Name</th>
            <th className="p-2">Current Price ({currency.toUpperCase()})</th>
            <th className="p-2">High in 24hrs</th>
            <th className="p-2">Low in 24 hrs</th>

            <th className="p-2">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.length > 0 ? (
            coins.map((coin) => (
              <tr
                className="bg-gray-300 text-blue-700 cursor-pointer"
                onClick={() => handleNavigationToDetails(coin.id)}
                key={coin.id}
              >
                <td className="flex items-center  gap-2">
                  <img className="h-10" src={coin.image} alt={coin.name} />
                  <h4 className="text-lg font-semibold">{coin.name}</h4>
                  <div className="ml-2 flex flex-col">
                    {" "}
                    <button
                      className={`btn btn-xs ${
                        selectedCoins.includes(coin.name)
                          ? "btn-danger"
                          : "btn-primary"
                      } `}
                      onClick={(e) => handleToggleCoin(e, coin.name)}
                    >
                      {selectedCoins.includes(coin.name) ? "X" : "+"}
                    </button>
                  </div>
                </td>
                <td>{coin.current_price.toLocaleString()}</td>
                <td>{coin.high_24h.toLocaleString()}</td>
                <td>{coin.low_24h.toLocaleString()}</td>

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

      {/* Loading more indicator */}
      {isFetchingNextPage && (
        <div className="text-center text-lg text-gray-500 mt-4">
          Loading more...
        </div>
      )}
    </div>
  );
}

export default CoinTable;
