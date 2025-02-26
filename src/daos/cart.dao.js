import CartModel from "../models/cart.model.js";

class CartDAO {
  async create(cart) {
    return await CartModel.create(cart);
  }

  async findById(id) {
    return await CartModel.findById(id).populate("products.product");
  }

  async save(cart) {
    return await cart.save();
  }
}

export default new CartDAO();