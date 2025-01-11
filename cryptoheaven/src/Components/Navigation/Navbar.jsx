import React from "react";

function Navbar({ currency, setCurrency }) {
  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency); // Update the selected currency
  };
  return (
    <div className="navbar bg-base-100  ">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">CryptoHeaven</a>
      </div>
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
                    handleCurrencyChange("inr");
                  }}
                >
                  <a>INR</a>
                </li>
                <li
                  onClick={() => {
                    handleCurrencyChange("usd");
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
