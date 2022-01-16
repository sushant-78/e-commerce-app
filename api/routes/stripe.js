const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const cors = require("cors");
const router = require("express").Router();
const Order = require("../models/Order");

router.post("/charge", cors(), async (req, res) => {
    let { amount, id, cart } = req.body;

    try {
        const payment = await stripe.paymentIntents.create({
            amount: amount,
            currency: "USD",
            description: "E-commerce App",
            payment_method: id,
            confirm: true,
        });

        if (payment) {
            const newOrder = new Order({
                products: cart.products,
                quantity: cart.quantity,
                total: cart.total,
            });
            await newOrder.save();

            res.json({
                message: "Payment Successful",
                success: true,
            });
        }
    } catch (error) {
        res.json({
            message: "Payment Failed, Try Again.",
            success: false,
        });
    }
});

module.exports = router;
