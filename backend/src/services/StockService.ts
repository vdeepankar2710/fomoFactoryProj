import { fetchStockPrices } from "../utils/StockFetch";
import Stock, { IStock } from "../models/Stock";

const STOCK_IDS = ["01coin", "0chain", "0-mee", "0x404", "0vm"];

export const insertStockPrices = async () => {
  const stockData = await fetchStockPrices(STOCK_IDS);
  const stockPromises = stockData.map(async (data: any) => {
    const { symbol, name } = data;
    const price =
      data.market_data &&
      data.market_data.current_price &&
      data.market_data.current_price.usd;

    console.log("data and price", symbol, name, price);

    const newStock: IStock = new Stock({
      symbol,
      name,
      price,
      timestamp: new Date(),
    });
    return newStock.save();
  });

  await Promise.all(stockPromises);
};
