import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { getCoinDetails } from "../Services/getCoinDetails";
import { CurrencyContext } from "../Context/CurrencyContect";
import ChartContainer from "../ChartContainer/ChartContainer";

// Import price formatting function
import moment from "moment";
import { formatPrice } from "../Helpers/fromatPrice";

function CoinDetails() {
  const { currency } = useContext(CurrencyContext);
  const { coinId } = useParams();

  const [selectedChart, setSelectedChart] = useState("price"); // Track the selected chart

  const {
    data: coin,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["coinData", coinId],
    queryFn: () => getCoinDetails(coinId),
    keepPreviousData: true,
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  if (isLoading) {
    return <div>Loading coin data</div>;
  }

  if (isError) {
    return <div className="text-center text-red-500">Error in coin data</div>;
  }

  if (!coin) {
    return <div className="text-center">Coin data not available.</div>;
  }

  const currentPrice = coin.market_data.current_price[currency];
  const formattedPrice = formatPrice(currentPrice, currency);
  const marketCap = coin.market_data.market_cap[currency];
  const formattedMarketCap = formatPrice(marketCap, currency);
  const volume = coin.market_data.total_volume[currency];
  const formattedVolume = formatPrice(volume, currency);
  const fdv = coin.market_data.fdv ? coin.market_data.fdv[currency] : null;
  const formattedFdv = fdv ? formatPrice(fdv, currency) : "N/A";
  const ath = coin.market_data.ath[currency];
  const formattedAth = formatPrice(ath, currency);
  const athDate = moment(coin.market_data.ath_date[currency]).format(
    "MMM DD, YYYY"
  );
  const atl = coin.market_data.atl[currency];
  const formattedAtl = formatPrice(atl, currency);
  const atlDate = moment(coin.market_data.atl_date[currency]).format(
    "MMM DD, YYYY"
  );

  return (
    <div className="main-container flex h-screen">
      <div className="charts-container w-3/4 border-r-2 p-4">
        {/* Buttons to toggle charts */}
        <div className="flex justify-center mb-4 gap-2">
          <button
            className={`py-2 px-4 rounded ${
              selectedChart === "price"
                ? "bg-green-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
            onClick={() => setSelectedChart("price")}
          >
            Price Chart
          </button>
          <button
            className={`py-2 px-4 rounded ${
              selectedChart === "marketCaps"
                ? "bg-green-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
            onClick={() => setSelectedChart("marketCaps")}
          >
            Market Caps Chart
          </button>
          <button
            className={`py-2 px-4 rounded ${
              selectedChart === "totalVolume"
                ? "bg-green-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
            onClick={() => setSelectedChart("totalVolume")}
          >
            Total Volume Chart
          </button>
        </div>

        {/* Render the selected chart */}
        {selectedChart === "price" && (
          <ChartContainer coinId={coinId} label={"Price"} dataType={"prices"} />
        )}
        {selectedChart === "marketCaps" && (
          <ChartContainer
            coinId={coinId}
            label={"Market Caps"}
            dataType={"market_caps"}
          />
        )}
        {selectedChart === "totalVolume" && (
          <ChartContainer
            coinId={coinId}
            label={"Total Volume"}
            dataType={"total_volumes"}
          />
        )}
      </div>

      <div className="content-container p-4">
        <div className="flex flex-col items-center mb-6">
          <img
            src={coin?.image?.large}
            alt={coin.name}
            className="w-32 h-32 mb-2"
          />
          <h2 className="text-3xl font-bold text-green-500">{coin.name}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
              Market Data
            </h3>
            <p>
              Current Price ({currency.toUpperCase()}):{" "}
              <span className="text-white">{formattedPrice}</span>
            </p>
            <p>
              24h Price Change:{" "}
              <span
                className={`${
                  coin.market_data.price_change_percentage_24h > 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {coin.market_data.price_change_percentage_24h.toFixed(2)}%
              </span>
            </p>
            <p>
              Market Cap:{" "}
              <span className="text-white">{formattedMarketCap}</span>
            </p>
            <p>
              Trading Volume (24h):{" "}
              <span className="text-white">{formattedVolume}</span>
            </p>
            <p>
              Circulating Supply:{" "}
              <span className="text-white">
                {coin.market_data.circulating_supply}
              </span>
            </p>
            <p>
              Fully Diluted Valuation:{" "}
              <span className="text-white">{formattedFdv}</span>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
              All-Time Stats
            </h3>
            <p>
              All-Time High ({currency.toUpperCase()}):{" "}
              <span className="text-white">{formattedAth}</span> ({athDate})
            </p>
            <p>
              All-Time Low ({currency.toUpperCase()}):{" "}
              <span className="text-white">{formattedAtl}</span> ({atlDate})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinDetails;
