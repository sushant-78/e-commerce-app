const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    products: { type: Array },
    quantity: { type: Number, required: true },
    total: { type: Number, required: true },
});

module.exports = mongoose.model("orders", OrderSchema);
