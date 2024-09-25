import { setLocalStorage, getParam, getLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const productId = getParam("product");
const dataSource = new ProductData("tents");

// Crear una instancia de ProductDetails
const productDetails = new ProductDetails(productId, dataSource);

// Inicializar el objeto ProductDetails
productDetails.init();

// función findProductById
console.log(dataSource.findProductById(productId));

function addProductToCart(product) {
  let cartItems = getLocalStorage("so-cart") || []; // get current cart or initialize an empty array
  cartItems.push(product); // add new product to cart
  setLocalStorage("so-cart", cartItems); // save updated cart

  //console.log("Product added to cart:", product);
  //console.log("Current Cart (localStorage):", getLocalStorage("so-cart"));
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
