import { Request, Response } from "express";
import Stock from "../models/Stock";

export const getStocks = async (req: Request, res: Response) => {
  try {
    const { symbol } = req.query;
    console.log("symbol", symbol);
    if (!symbol) {
      return res
        .status(400)
        .json({ message: "Symbol query parameter is required" });
    }

    const stocks = await Stock.find({ symbol: symbol })
      .sort({
        timestamp: -1,
      })
      .limit(20);
    if (!stocks) {
      return res
        .status(404)
        .json({ message: "No stocks found for the provided symbol" });
    }
    console.log("stocks", stocks);

    res.status(200).json({ stocks: stocks });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
