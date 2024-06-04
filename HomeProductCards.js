import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

//Document: querySelector() method
//returns the first Element within the document that matches the specified selector, or group of selectors
//yha bracket me # because these both are ids
//ye product container or product template ka refrence html se vhs inki class or id define hai
const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

//function bnaya jo main.js me call kiya tha
//agr products hi ni to kya krna
export const showProductContainer = (products) => {
  if (!products) {
    return false;
  }

  //products.json me jo dala h vo yha const me dala
  //variables destructured
  products.forEach((curProd) => {
    const { brand, category, description, id, image, name, price, stock } =
      curProd;

 //now cloning product template
//importNode used to import node from another document or template element
//productTemplate class h jo template element ko di thi
//true se mtlb h uske andar jitne bhi uske inner child h u nhe bi copy krna h

    const productClone = document.importNode(productTemplate.content, true);

    //see yha ye parent container ki id use krri div and usme fr card id for particular
    // card , so that we can know konse card pe work hora abhi
    //yha humne har card ki unique id bna di
    
    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    //yha sabki cloning krnege jo bhi dala product json me
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productDescription").textContent = description;
    //yha rupees ke symbol ko concat kr rhe
    productClone.querySelector(".productPrice").textContent = `₹${price}`;
    productClone.querySelector(".productActualPrice").textContent = `₹${
      price * 4
    }`;

    //yha konse card pr toggle kam krre uske lie
    //basically jab increment,decrement krenge quantity 
    //to uske lie clone krke fr toggle function call kiya
    //ab uski file bnayi fr usme ye function export kiya
    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        homeQuantityToggle(event, id, stock);
      });

      //yha add to cart vala krre

    productClone
      .querySelector(".add-to-cart-button")
      .addEventListener("click", (event) => {
        addToCart(event, id, stock);
      });

      //clone ko container me append
    productContainer.append(productClone);
  });
};