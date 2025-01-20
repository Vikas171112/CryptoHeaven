import React, { useContext, useState, useEffect } from "react";
import { CurrencyContext } from "../Context/CurrencyContect";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSearchResults } from "../Services/getSearchResults";
import { ComparisonContext } from "../Context/ComparisonContext";

function Navbar() {
  const { setCurrency } = useContext(CurrencyContext);
  const navigate = useNavigate();
  const { selectedCoins, removeCoin, addCoin } = useContext(ComparisonContext);
  const [showSearchResult, setShowSearchResults] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For the mobile menu toggle

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Fetch search results
  const {
    data: searchResults,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["searchResults", debouncedSearch],
    queryFn: () => getSearchResults(debouncedSearch),
    enabled: !!debouncedSearch,
  });

  // Navigation
  function gotoHome() {
    navigate("/");
  }
  function gotoCoinTable() {
    navigate("/cryptoList");
  }
  const handleToggleCoin = (e, coinName) => {
    e.stopPropagation();
    if (selectedCoins.includes(coinName)) {
      removeCoin(coinName);
    } else {
      addCoin(coinName);
    }
  };

  return (
    <div className="navbar bg-base-100">
      {/* Logo */}
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          gotoHome();
        }}
      >
        <a className="btn btn-ghost text-xl">CryptoHeaven</a>
      </div>

      {/* Search Bar */}
      <div className="flex-none relative hidden md:block">
        <input
          type="text"
          placeholder="Search coins..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-64"
          onFocus={() => setShowSearchResults(true)}
        />
        {isLoading && (
          <div className="absolute top-full mt-2 p-2 bg-white shadow-md">
            Loading...
          </div>
        )}
        {isError && (
          <div className="absolute top-full mt-2 p-2 bg-white shadow-md text-red-500">
            Error: {error.message}
          </div>
        )}
        {searchResults && searchResults.length > 0 && (
          <ul className="absolute top-full mt-2 w-full bg-white shadow-md rounded-md z-50 overflow-auto max-h-60">
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
                  <button
                    className={`btn btn-sm ${
                      selectedCoins.includes(coin.name)
                        ? "btn-danger"
                        : "btn-primary"
                    } ml-2`}
                    onClick={(e) => handleToggleCoin(e, coin.name)}
                  >
                    {selectedCoins.includes(coin.name) ? "X" : "+"}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        {searchResults && searchResults.length === 0 && (
          <div className="absolute top-full mt-2 p-2 bg-white shadow-md text-orange-700">
            No results found
          </div>
        )}
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="block md:hidden">
        <button
          className="btn btn-ghost"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`absolute top-full left-0 w-full bg-base-100 z-50 transition-all duration-300 ease-in-out md:static md:block ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="menu menu-vertical md:menu-horizontal p-4 md:p-0">
          <li>
            <a>Trade</a>
          </li>
          <li>
            <a>Learn</a>
          </li>
          <li>
            <a
              onClick={() => {
                gotoCoinTable();
              }}
            >
              CryptoList
            </a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/AuthPage");
              }}
            >
              Login/SignUp
            </button>
          </li>
          <li>
            <details>
              <summary>Currency</summary>
              <ul className="bg-base-100 rounded-t-none p-2 z-30">
                <li onClick={() => setCurrency("inr")}>
                  <a>INR</a>
                </li>
                <li onClick={() => setCurrency("usd")}>
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
