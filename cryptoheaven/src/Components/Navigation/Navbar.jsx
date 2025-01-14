import React, { useContext } from "react";
import { CurrencyContext } from "../Context/CurrencyContect";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { setCurrency } = useContext(CurrencyContext);
  const navigate = useNavigate();

  function gotoHome() {
    navigate("/");
  }
  return (
    <div className="navbar bg-base-100  ">
      <div
        className="flex-1"
        onClick={() => {
          gotoHome();
        }}
      >
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
