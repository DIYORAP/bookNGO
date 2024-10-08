import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
  tickets:
    { 
        type: Number,
        required: true,
        min: 1,
    },

  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
  },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
