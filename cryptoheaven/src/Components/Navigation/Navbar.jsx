import React, { useContext, useState, useEffect } from "react";
import { CurrencyContext } from "../Context/CurrencyContect";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

// Simulated API fetch function for search results
const fetchSearchResults = async (query) => {
  if (!query) return [];
  const response = await fetch(
    `https://api.coingecko.com/api/v3/search?query=${query}`
  );
  const data = await response.json();
  return data.coins || [];
};

function Navbar() {
  const { setCurrency } = useContext(CurrencyContext);
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce search input by 500ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Fetch search results using React Query
  const {
    data: searchResults,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["searchResults", debouncedSearch],
    queryFn: () => fetchSearchResults(debouncedSearch),
    enabled: !!debouncedSearch, // Only fetch when there is a debouncedSearch term
  });
  console.log(searchResults);

  // Navigation to home
  function gotoHome() {
    navigate("/");
  }

  return (
    <div className="navbar bg-base-100">
      {/* Logo and Home Navigation */}
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          gotoHome();
        }}
      >
        <a className="btn btn-ghost text-xl">CryptoHeaven</a>
      </div>

      {/* Search Box */}
      <div className="flex-none relative">
        <input
          type="text"
          placeholder="Search coins..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-64"
        />
        {isLoading && (
          <div className="absolute top-full mt-2 p-2 bg-white shadow-md">
            Loading...
          </div>
        )}
        {isError && (
          <div className="absolute top-full mt-2 p-2 bg-white shadow-md text-red-500">
            Error loading search results
          </div>
        )}
        {searchResults && searchResults.length > 0 && (
          <ul className="absolute top-full mt-2 w-full bg-white shadow-md rounded-md z-50">
            {searchResults.map((coin) => (
              <li
                key={coin.id}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate(`/details/${coin.id}`)}
              >
                <div className="flex items-center">
                  <img
                    src={coin.thumb}
                    alt={coin.name}
                    className="w-6 h-6 mr-2"
                  />
                  <span>{coin.name}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Currency Dropdown */}
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>About</a>
          </li>
          <li>
            <details>
              <summary>Currency</summary>
              <ul className="bg-base-100 rounded-t-none p-2 z-30">
                <li
                  onClick={() => {
                    setCurrency("inr");
                  }}
                >
                  <a>INR</a>
                </li>
                <li
                  onClick={() => {
                    setCurrency("usd");
                  }}
                >
                  <a>USD</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
