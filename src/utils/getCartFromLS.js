import { calcTotalPrice } from "./calcTotalPrice.js";

export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const cartItems = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(cartItems);

  return {
    cartItems,
    totalPrice,
  }
}