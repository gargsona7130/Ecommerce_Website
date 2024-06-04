const cartValue = document.querySelector("#cartValue");

export const updateCartValue = (cartProducts) => {
  //see yha ye jo i class likhi hai ye as it is index.html se copy krri
  //vha ba value 0 dl rkhi vo chiye hume yha updated
  return (cartValue.innerHTML = ` <i class="fa-solid fa-cart-shopping"> ${cartProducts.length} </i>`);
};