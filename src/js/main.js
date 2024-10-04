<<<<<<< HEAD
// import ProductData from "./ProductData.mjs";
// import ProductListing from "./ProductList.mjs";
=======
import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";
import { loadHeaderFooter } from "./utils.mjs";
>>>>>>> 189d5c9d3a73b4ecb59110fdfd3be5aac3ae0eea

// // Create an instance of ProductData with the category 'tents'
// const dataSource = new ProductData("tents");

// // Select the HTML element where the product list will be rendered
// const listElement = document.getElementById("product-list");

// // Create an instance of the ProductListing class
// const productListing = new ProductListing("tents", dataSource, listElement);

<<<<<<< HEAD
// // Initialize the ProductListing to fetch data and render the product list
// productListing.init();
=======
// Initialize the ProductListing to fetch data and render the product list
productListing.init();

async function init() {
    await loadHeaderFooter();
}

init();
>>>>>>> 189d5c9d3a73b4ecb59110fdfd3be5aac3ae0eea
