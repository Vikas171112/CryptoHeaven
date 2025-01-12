import axiosinstance from "../Helpers/axiosinstance";

export async function getCoinData(page, currency) {
  const per_page = 10;
  try {
    const response = await axiosinstance.get(
      `/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${per_page}&page=${page}`
    );
    return response;
  } catch (error) {
    console.log("Error in getting Coin List", error);
  }
}
