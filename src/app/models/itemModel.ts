import mongoose, { Schema } from "mongoose";

const itemSchema: Schema = new Schema({
  _id: {
    type: String,
  },
  item_name: {
    type: String,
  },
  item_category: {
    type: String,
  },
  item_price: {
    type: Number,
  },
  item_alphabet: {
    type: String,
  },
  item_english: {
    type: String,
  },
});

export const Item = mongoose.models.Item || mongoose.model("Item", itemSchema, "items");
