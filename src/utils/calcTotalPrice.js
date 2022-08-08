export const calcTotalPrice = (cartItems) => {
  return cartItems.reduce((sum, obj) => obj.price * obj.count + sum, 0)
}