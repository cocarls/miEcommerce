import{
   drawProducts,
   drawProductsInCart,
   drawTotal,
}from "./functions/draw.js";

import{
   handleAddCart,
   handleBuy,
   handleCartShow,
   handleOptionsCart,
 }from "./functions/handles.js"


import { getProducts } from "./functions/helpers.js";
 
 


 
async function main(){
   
   const db = {
      products:  JSON.parse(localStorage.getItem("products")) || await getProducts(),
      cart: JSON.parse(localStorage.getItem("cart")) || {},
   };
   drawProducts(db);
   handleCartShow();
   handleAddCart(db)
   drawProductsInCart(db);
   handleOptionsCart(db)
   drawTotal(db);
   handleBuy(db)

   
}

 window.addEventListener("load", main);
