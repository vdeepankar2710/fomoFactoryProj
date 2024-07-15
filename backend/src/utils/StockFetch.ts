import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
// const API_URL = 'https://api.coingecko.com/api/v3/coins/01coin?x_cg_demo_api_key=${process.env.API_KEY}`; // Replace with actual API

const API_URL = "https://api.coingecko.com/api/v3/coins/";

export const fetchStockPrices = async (symbols: string[]): Promise<any[]> => {
  const requests = symbols.map((symbol) =>
    axios.get(API_URL + symbol, {
      headers: {
        // Authorization: `Bearer ${API_KEY}`,
        // x_cg_demo_api_key: process.env.API_KEY,
        accept: "application/json",
      },
      params: {
        symbol: symbol,
        x_cg_demo_api_key: process.env.API_KEY,
      },
    })
  );
  const responses = await Promise.all(requests);
  return responses.map((response) => response.data);
};
