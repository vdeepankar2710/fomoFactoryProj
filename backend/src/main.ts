import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/mongodb";
import { insertStockPrices } from "./services/StockService";
import { getStocks } from "./controller/StockController";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
// app.use(express.json());
const PORT = process.env.PORT || 5000;
const corsOption = {
  origin: ["http://localhost:5000"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(cors(corsOption));
app.get("/api/stocks", getStocks);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  // Fetch stock prices every 5 seconds
  setInterval(insertStockPrices, 5000);
});
