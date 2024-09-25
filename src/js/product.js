import { setLocalStorage, getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs"; // Asegúrate de importar tu clase ProductDetails

const productId = getParam("product");
const dataSource = new ProductData("tents");

// Crear una instancia de ProductDetails
const productDetails = new ProductDetails(productId, dataSource);

// Inicializar el objeto ProductDetails
productDetails.init();

// función findProductById
console.log(dataSource.findProductById(productId));

function addProductToCart(product) {
  setLocalStorage("so-cart", product);
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
