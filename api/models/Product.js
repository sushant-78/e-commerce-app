const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        img: { type: String, required: true },
        categories: { type: Array },
        color: { type: Array },
        price: { type: Number, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("products", ProductSchema);
