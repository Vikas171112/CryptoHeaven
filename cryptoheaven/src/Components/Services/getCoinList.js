import axiosinstance from "../Helpers/axiosinstance";

export async function getCoinData(currency) {
  try {
    const response = await axiosinstance.get(
      `/coins/markets?vs_currency=${currency}`
    );
    return response;
  } catch (error) {
    console.log("Error in getting Coin List", error);
  }
}
