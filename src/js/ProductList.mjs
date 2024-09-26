import { renderListWithTemplate } from "./utils.mjs"


// Template function to generate product card HTML using template literals for now
function productCardTemplate(product) {
  return `
    <li class="product-card">
      <a href="product_pages/index.html?product=${product.Id}">
        <img src="${product.Image}" alt="Image of ${product.Name}">
        <h3 class="card__brand">${product.NameWithoutBrand}</h3>
        <h2 class="card__name">${product.Name}</h2>
        <p class="product-card__price">$${product.FinalPrice.toFixed(2)}</p>
      </a>
    </li>`;
}

// ProductListing class to render the list of product cards
export default class ProductListing {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }


  async init() {
    try {
      const products = await this.dataSource.getData();
      const filteredProducts = this.filterProducts(products); // Filter products to the desired four
      this.renderList(filteredProducts); // Render the filtered product list
    } catch (error) {
      // eslint-disable-next-line
      console.error('Error initializing ProductListing:', error);
    }
  }

  // Filter function fot the list of products to show only the four products we need for now
  filterProducts(products) {
    const idsToShow = ["880RR", "985RF", "985PR", "344YJ"]; // I manually replaced with actual IDs from your tents.json

    // Filter the products array to only include the items with the specified IDs abv
    return products.filter((product) => idsToShow.includes(product.Id));

    //return products.slice(0, 4);
  }

  // This is the method to render the product list using the utility function
  renderList(products) {
    // Using the utility function with the productCardTemplate and the listElement
    renderListWithTemplate(productCardTemplate, this.listElement, products, "afterbegin", true);
  }

}
