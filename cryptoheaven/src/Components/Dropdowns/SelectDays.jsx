import React from "react";

function SelectDays({ onDayChange }) {
  const ChartDays = [
    {
      label: "24 hours",
      value: 1,
    },
    {
      label: "7days",
      value: 7,
    },
    {
      label: "30days",
      value: 30,
    },
    {
      label: "90 days",
      value: 90,
    },
    {
      label: "365 days",
      value: 365,
    },
  ];
  return (
    <div>
      <select
        className="select select-warning w-full max-w-xs m-auto"
        onChange={onDayChange}
      >
        <option disabled selected>
          Pick your preference
        </option>
        {ChartDays.map((day, index) => {
          return (
            <option key={index} value={day.value}>
              {day.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectDays;
