import axiosInstance from "../Helpers/axiosinstance";

export async function getCoinDetails(id) {
  try {
    const response = await axiosInstance.get(`coins/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error in fetching details in service", error);
  }
}
