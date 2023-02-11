const mongoose = require("mongoose");
const {
  product_collection_enams,
  product_status_enams,
  product_size_enams,
  product_volume_enams,
} = require("../lib/config");
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    product_name: { type: String, required: true },
    product_collection: {
      type: String,
      required: true,
      enam: {
        values: product_collection_enams,
        message: "{VALUE} is not among permitted enam values",
      },
    },
    
    product_status: {
      type: String,
      required: false,
      default: "PAUSED",
      enam: {
        values: product_status_enams,
        message: "{VALUE} is not among permitted enam values",
      },
    },
    product_price: {
      type: Number,
      required: true,
    },
    product_discount: {
      type: Number,
      required: false,
      default: 0,
    },
    product_left_cnt: {
      type: Number,
      required: true,
    },
    product_size: {
      type: String,
      required: function () {
        const sized_list = ["dish", "salat", "dessert"];
        return sized_list.includes(this.product_collection);
      },
      default: "normal",
      enam: {
        values: product_size_enams,
        message: "{VALUE} is not among permitted enam values",
      },
    },
    product_volume: {
      type: String,
      required: function () {
        return this.product_collection === "drink";
      },
      default: 1,
      enam: {
        values: product_volume_enams,
        message: "{VALUE} is not among permitted enam values",
      },
    },
    product_description: {
      type: String,
      required: true,
    },
    product_images: {
      type: Array,
      required: false,
      default: [],
    },
    product_likes: {
      type: Number,
      required: false,
      default: 0,
    },
    product_views: {
      type: Number,
      required: false,
      default: 0,
    },
    restaurant_mb_id: {
      type: Schema.Types.ObjectId,
      ref: "Member",
      required: false,
    },
  },
  { timestamps: true }
);

productSchema.index(
  { restaurant_mb_id: 1, product_name: 1, product_size: 1, product_volume: 1 },
  { unique: true }
);

module.exports = mongoose.model("Product", productSchema);
