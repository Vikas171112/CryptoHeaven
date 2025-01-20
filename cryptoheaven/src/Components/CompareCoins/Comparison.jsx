import React, { useContext } from "react";
import { ComparisonContext } from "../Context/ComparisonContext";
import { useNavigate } from "react-router-dom";

function Comparison() {
  const { selectedCoins } = useContext(ComparisonContext);
  const navigate = useNavigate();
  function handleNavigatioToCmparisonResult() {
    navigate("/comparison");
  }

  return (
    <div className="comparison-box bg-gray-100 p-4 rounded shadow-md">
      <h3 className="text-lg font-bold mb-4">Comparison Box</h3>
      <input
        type="text"
        value={selectedCoins.join(", ")}
        readOnly
        className="input input-bordered w-full mb-4"
        placeholder="No coin selected"
      />
      <button
        className="bg-cyan-300 px-2 py-2 text-white "
        onClick={() => handleNavigatioToCmparisonResult()}
      >
        Compare
      </button>
    </div>
  );
}

export default Comparison;
