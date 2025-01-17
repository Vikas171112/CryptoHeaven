import React, { useContext, useState } from "react";
import {
  Chart as ChartJS, // Import Chart as ChartJS
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { color } from "chart.js/helpers";
import { useQuery } from "@tanstack/react-query";
import { CurrencyContext } from "../Context/CurrencyContect";
import { getHistoricData } from "../Services/getHistoricData";
import SelectDays from "../Dropdowns/SelectDays";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function CoinCharts({ coinId }) {
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
    cacheTime: 1000 * 60 * 2, // Cache for 2 minutes
    staleTime: 1000 * 60 * 2, // Consider data stale after 2 minutes
  });
  console.log(historicData);

  if (isLoading) {
    return <div>Loading coin Charts</div>;
  }

  if (isError) {
    return (
      <div className="text-center text-red-500">Error in fetching chart</div>
    );
  }

  const lineChartData = {
    labels: historicData.prices.map((coinPrice) => {
      const date = new Date(coinPrice[0]);
      const time = `${date.getHours()}:${date.getMinutes()} ${
        date.getHours() > 12 ? "pm" : "am"
      }`;
      return days === 1 ? time : date.toLocaleDateString();
    }),
    datasets: [
      {
        label: "",
        data: historicData.prices.map((coinPrice) => coinPrice[1]),
        borderColor: "#ffff",
        backgroundColor: "#94bead",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0,
      },
    },
  };
  function handleDayChange(e) {
    console.log(e.target.options[e.target.selectedIndex].value);
    let selectedDay = e.target.options[e.target.selectedIndex].value;
    if (selectedDay == 1) {
      setInterval("");
    } else {
      setInterval("daily");
    }
    setDays(e.target.options[e.target.selectedIndex].value);
  }

  return (
    <>
      <SelectDays onDayChange={handleDayChange} />
      <Line options={options} data={lineChartData} />
    </>
  );
}

export default CoinCharts;
