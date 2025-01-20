import axios from "axios";
import axiosInstance from "../Helpers/axiosinstance";
export async function getSearchResults(query) {
  try {
    const response = await axiosInstance.get(`/search?query=${query}`);
    return response.data.coins;
  } catch (error) {
    console.log("Some error occured at service", error);
  }
}
