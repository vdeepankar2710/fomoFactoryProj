import mongoose, { Document, Schema } from "mongoose";

export interface IStock extends Document {
  symbol: string;
  name: string;
  price: number;
  timestamp: Date;
}

const StockSchema: Schema = new Schema({
  symbol: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model<IStock>("Stock", StockSchema);
