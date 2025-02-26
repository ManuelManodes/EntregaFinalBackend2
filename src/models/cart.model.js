import { Schema, model } from "mongoose";

const CartSchema = new Schema({
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, required: true },
    },
  ],
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export default model("Cart", CartSchema);