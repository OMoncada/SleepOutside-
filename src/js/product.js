import { getParam } from "./utils.mjs";
import { loadHeaderFooter } from "./utils.mjs";

import ProductDetails from "./ProductDetails.mjs";

const dataSource = new ExternalServices("tents");
const productId = getParam("product");

const product = new ProductDetails(productId, dataSource);
product.init();

document.addEventListener("DOMContentLoaded", () => {
    loadHeaderFooter();
});