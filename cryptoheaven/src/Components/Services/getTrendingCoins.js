import axios from "axios";
import axiosInstance from "../Helpers/axiosinstance";

export async function getTrendingCoins() {
  try {
    const response = await axiosInstance.get("/search/trending");
    return response.data.coins;
  } catch (error) {
    console.log("error from service layer", error);
  }
}
