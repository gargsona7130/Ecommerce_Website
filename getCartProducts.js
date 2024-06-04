import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLS = () => {
  let cartProducts = localStorage.getItem("cartProductLS");
  //see cartproducts me agr kuch ni h to empty array return krenge
  if (!cartProducts) {
    return [];
  }
  //vrna jo actual value h vo return krde
  cartProducts = JSON.parse(cartProducts);

  //update the cart button value
  updateCartValue(cartProducts);

  return cartProducts;
};