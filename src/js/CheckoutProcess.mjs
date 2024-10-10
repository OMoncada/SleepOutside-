// CheckoutProcess.mjs
import { getLocalStorage } from "./utils.mjs"; // Import the getLocalStorage function

export default class CheckoutProcess {
  constructor(key, outputSelector) {
    this.key = key;
    this.outputSelector = outputSelector;
    this.list = [];
    this.itemTotal = 0;
    this.shipping = 0;
    this.tax = 0;
    this.orderTotal = 0;
  }

  // Initialize the checkout process by loading the cart and calculating the item total
  init() {
    this.list = getLocalStorage(this.key) || []; // Load the cart items from localStorage
    this.calculateItemSummary(); // Calculate and display the subtotal on page load
  }

  // Calculate and display the item subtotal
  calculateItemSummary() {
    this.itemTotal = this.list.reduce((total, item) => {
      const quantity = item.Result.Quantity || 1;
      return total + (item.Result.FinalPrice * quantity); // Sum the total price of items in the cart
    }, 0);

    // Display the item subtotal in the output section (e.g., '#subtotal')
    document.querySelector(this.outputSelector.subtotal).innerText = this.itemTotal.toFixed(2);
  }

  // Calculate shipping, tax, and total, and display them after ZIP code is entered
  calculateOrderTotal() {
    this.shipping = 10 + (this.list.length - 1) * 2; // $10 for the first item, $2 for each additional item
    this.tax = this.itemTotal * 0.06; // 6% sales tax

    // Calculate the final order total
    this.orderTotal = this.itemTotal + this.shipping + this.tax;

    // Display the calculated totals
    this.displayOrderTotals();
  }

  // Display the calculated order totals (subtotal, shipping, tax, total)
  displayOrderTotals() {
    document.querySelector(this.outputSelector.shipping).innerText = this.shipping.toFixed(2);
    document.querySelector(this.outputSelector.tax).innerText = this.tax.toFixed(2);
    document.querySelector(this.outputSelector.total).innerText = this.orderTotal.toFixed(2);
  }
}
