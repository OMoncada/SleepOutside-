import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

// Create an instance of ProductData with the category 'tents'
const dataSource = new ProductData("tents");

// Select the HTML element where the product list will be rendered
const listElement = document.getElementById("product-list");

// Create an instance of the ProductListing class
const productListing = new ProductListing("tents", dataSource, listElement);

loadHeaderFooter();

// Initialize the ProductListing to fetch data and render the product list
productListing.init();
