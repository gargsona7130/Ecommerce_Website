export const homeQuantityToggle = (event, id, stock) => {
    //yha is const varibale me ye pta chl ra konsa card toggle krre
    //or cards id se pehle # becz we are dealing with id
    const currentCardElement = document.querySelector(`#card${id}`);
  
    //yha se we are getting productquantity 
    //but vo 1 hi dikha ra chahe + kro ya - islie niche ab
    //ye problem solve
    const productQuantity = currentCardElement.querySelector(".productQuantity");
  
    //is let vali line se quantity get krre vo to alraedy default 1 h we know but hum ise update kr denge
    //parseint because agr string me hua to change to int krna
    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;
  
    // ab niche code to inc dec quantity based on user action
    if (event.target.className === "cartIncrement") {
      if (quantity < stock) {
        quantity += 1;
      } else if (quantity === stock) {
        quantity = stock;
      }
    }
  
    if (event.target.className === "cartDecrement") {
      if (quantity > 1) {
        quantity -= 1;
      }
    }
  
   
    productQuantity.innerText = quantity;
    console.log(quantity);
    //ye yha quantity . tostring kre beacz index me dataquantity 1 as a string set kr rkhi  
    productQuantity.setAttribute("data-quantity", quantity.toString());
    return quantity;
  };