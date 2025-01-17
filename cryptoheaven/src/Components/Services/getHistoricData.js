import axios from "axios";
import axiosInstance from "../Helpers/axiosinstance";

export async function getHistoricData(id, days, interval, currency) {
  try {
    const response = await axiosInstance.get(
      `coins/${id}/market_chart?vs_currency=${currency}&days=${days}&interval=${interval}`
    );
    return response.data;
  } catch (error) {
    console.log("Error in fetching details in service", error);
  }
}
