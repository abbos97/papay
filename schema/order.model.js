const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { order_status_enams } = require("../lib/config");

const orderSchema = new mongoose.Schema(
  {
    order_total_amount: { type: Number, required: true },
    order_delivery_cost: { type: Number, required: true },
    order_status: {
      type: String,
      required: false,
      default: "PAUSED",
      enum: {
        values: order_status_enams,
        message: "{VALUE} is not among permitted values",
      },
    },
    mb_id: { type: Schema.Types.ObjectId, ref: "Member", required: true },
  },
  { timestamps: true  }
);

module.exports = mongoose.model("Order", orderSchema);
