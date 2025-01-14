import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCoinDetails } from "../Services/getCoinDetails";
import { CurrencyContext } from "../Context/CurrencyContect";

function CoinDetails() {
  const { currency } = useContext(CurrencyContext);
  const { coinId } = useParams();
  const {
    data: coin,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["coinsdetails", coinId],
    queryFn: () => getCoinDetails(coinId),
    keepPreviousData: true,
    cachetime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  // useEffect(() => {
  //   console.log(coin);
  // }, [coin]);

  if (isLoading) {
    return (
      <div className="text-center text-2xl font-bold animate-pulse">
        Loading...
      </div>
    ); // Loading state
  }

  if (isError) {
    return (
      <div className="text-center text-red-500">Error: {error.message}</div>
    ); // Error state
  }

  if (!coin) {
    return <div className="text-center">Coin data not available.</div>; // Handle cases where coin is null
  }

  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-12">
      {" "}
      {/* Container for responsiveness */}
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10">
        {" "}
        {/* Card styling */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {" "}
          {/* Flex for image and details */}
          <div className="mb-4 md:mb-0 md:mr-8 w-full md:w-1/3">
            {" "}
            {/* Image container */}
            <img
              src={coin.image.large}
              alt={coin.name} // Add alt text for accessibility
              className="w-full h-auto rounded-lg shadow-sm" // Image styling
            />
          </div>
          <div className="w-full md:w-2/3">
            {" "}
            {/* Details container */}
            <h2 className="text-2xl font-bold mb-2">{coin.name}</h2>{" "}
            {/* Coin name */}
            <div
              className="text-gray-700 mb-4"
              dangerouslySetInnerHTML={{ __html: coin.description.en }}
            ></div>
            {/* Description with HTML rendering */}
            <div className="flex flex-wrap gap-2">
              <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-800">
                Market Cap Rank: {coin.market_cap_rank}
              </div>
              {/* Add more details here using similar styling */}
              {/* Example: Current Price */}
              {coin.market_data?.current_price && (
                <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-800">
                  <h4>
                    Current Price:{" "}
                    {coin.market_data.current_price[currency] ||
                      "Price not available"}
                  </h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinDetails;
