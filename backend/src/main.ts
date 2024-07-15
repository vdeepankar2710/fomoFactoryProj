import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/mongodb";
import { insertStockPrices } from "./services/StockService";
import { getStocks } from "./controller/StockController";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/api/stocks", getStocks);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  // Fetch stock prices every 5 seconds
  setInterval(insertStockPrices, 5000);
});
