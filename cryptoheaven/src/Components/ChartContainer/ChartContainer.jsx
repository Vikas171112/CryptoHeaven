import React, { useContext, useState } from "react";
import SelectDays from "../Dropdowns/SelectDays";
import ReusableLine from "../ReusableLineChart/ReusableLine";
import { getHistoricData } from "../Services/getHistoricData";
import { CurrencyContext } from "../Context/CurrencyContect";
import { useQuery } from "@tanstack/react-query";

function ChartContainer({ coinId, label, dataType }) {
  const { currency } = useContext(CurrencyContext);
  const [days, setDays] = useState(1);
  const [interval, setInterval] = useState("");

  const {
    data: historicData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["coinData", coinId, days, interval, currency],
    queryFn: () => getHistoricData(coinId, days, interval, currency),
    keepPreviousData: true,
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  if (isLoading) {
    return <div>Loading {label} chart...</div>;
  }

  if (isError || !historicData || !historicData[dataType]) {
    return (
      <div className="text-center text-red-500">
        Error loading {label} chart
      </div>
    );
  }

  const chartData = {
    labels: historicData[dataType].map((entry) => {
      const date = new Date(entry[0]);
      const time = `${date.getHours()}:${date
        .getMinutes()
        .toString()
        .padStart(2, "0")} ${date.getHours() >= 12 ? "pm" : "am"}`;
      return days === 1 ? time : date.toLocaleDateString();
    }),
    datasets: [
      {
        label: `${label}`,
        data: historicData[dataType].map((entry) => entry[1]),
        borderColor: "#4ade80",
        backgroundColor: "rgba(74, 222, 128, 0.2)",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#ffffff",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#ffffff",
        },
      },
      y: {
        ticks: {
          color: "#ffffff",
        },
      },
    },
    elements: {
      point: { radius: 0 },
    },
  };

  function handleDayChange(e) {
    const selectedDay = parseInt(e.target.value, 10);
    setDays(selectedDay);

    if (selectedDay === 1) {
      setInterval("");
    } else if (selectedDay <= 30) {
      setInterval("daily");
    } else {
      setInterval("weekly");
    }
  }

  return (
    <div className="chart-container bg-gray-800 p-4 rounded-lg shadow-lg overflow-hidden">
      {/* Dropdown to select days */}
      <div className="mb-4">
        <SelectDays onDayChange={handleDayChange} />
      </div>

      {/* Restrict the height and width of the chart */}
      <div className="chart-wrapper relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <ReusableLine data={chartData} options={options} />
      </div>
    </div>
  );
}

export default ChartContainer;
