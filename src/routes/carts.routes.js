import { Router } from "express";
import { authorize } from "../middleware/auth.js";
import passport from "passport";
import CartModel from "../models/cart.model.js";
import ProductModel from "../models/product.model.js";
import TicketModel from "../models/ticket.model.js";

const router = Router();

// Ruta para crear un nuevo carrito
router.post("/", passport.authenticate('jwt', { session: false }), authorize(['user']), async (req, res) => {
  const userId = req.user._id;
  const newCart = new CartModel({ user: userId, products: [] });
  await newCart.save();
  res.status(201).json({ status: "Ok", payload: newCart });
});

router.post("/:cid/purchase", passport.authenticate('jwt', { session: false }), authorize(['user']), async (req, res) => {
  const { cid } = req.params;
  const cart = await CartModel.findById(cid).populate("products.product");

  if (!cart) {
    return res.status(404).json({ status: "Error", error: "Cart not found" });
  }

  let totalAmount = 0;
  const productsNotProcessed = [];

  for (const item of cart.products) {
    const product = item.product;
    if (product.stock >= item.quantity) {
      product.stock -= item.quantity;
      await product.save();
      totalAmount += product.price * item.quantity;
    } else {
      productsNotProcessed.push(product._id);
    }
  }

  const ticket = new TicketModel({
    amount: totalAmount,
    purchaser: req.user.email,
  });

  await ticket.save();

  cart.products = cart.products.filter(item => productsNotProcessed.includes(item.product._id));
  await cart.save();

  res.status(200).json({ status: "Ok", payload: { ticket, productsNotProcessed } });
});

export default router;