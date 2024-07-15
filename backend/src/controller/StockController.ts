import { Request, Response } from "express";
import Stock from "../models/Stock";

export const getStocks = async (req: Request, res: Response) => {
  try {
    const stocks = await Stock.find();
    res.json(stocks);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
