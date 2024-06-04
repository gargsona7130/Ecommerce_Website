import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

// -----------------------------------------------------
// to get the cart data from localStorage
// to update the cart value and also to get the data always ready from localStorage
// --------------------------------------------------------
getCartProductFromLS();

// -----------------------------------------------------
// to add the data into localStorage
// --------------------------------------------------------
export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();
//niche vali line se getting know konse card pe click krra
  const currentProdElem = document.querySelector(`#card${id}`);
  //to ab jonse card pe click kiya uska quantity or price chiye
  let quantity = currentProdElem.querySelector(".productQuantity").innerText;
  let price = currentProdElem.querySelector(".productPrice").innerText;
  //   console.log(quantity, price);
  price = price.replace("₹", "");

  //ye let existing product fr id match krna becz
  //agr vo existing hai to uski id h humare pass
  //to hume pta chl gya user ne konse p click kiya
  //to niche likha h if(existingprod) to alert duplicate h bhai vala
  //i.e. ki user same prod ko bar bar add to cart krra
  let existingProd = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );

  console.log(existingProd);

  if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity);
    let updatedCart = { id, quantity, price };

    updatedCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
    });
    console.log(updatedCart);

    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
    //show toast when product added to the cart
    showToast("add", id);
  }

  if (existingProd) {
    // alert("bhai duplicate hai");
    return false;
  }
  //jo quantity hi h vo as a string ara to use number kr dia
  //price bi number me hi dal diya kyu chance lena
  price = Number(price * quantity);
  quantity = Number(quantity);

  //yha basically humne local storage me value dal diya hai
  arrLocalStorageProduct.push({ id, quantity, price });
  //ye stringify vgera krne se data local storage p add ho gya
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  //update the cart button value
  //arrlocalstorageproduct jisme muje already value mil ri
  //use updatecartvalue me dal diya
  updateCartValue(arrLocalStorageProduct);

  //show toast when product added to the cart
  showToast("add", id);
};