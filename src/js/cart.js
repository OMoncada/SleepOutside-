import { getLocalStorage, setLocalStorage } from "./utils.mjs";

<<<<<<< HEAD
// Function to render the contents of the cart
=======
// Function to render the cart contents
>>>>>>> 189d5c9d3a73b4ecb59110fdfd3be5aac3ae0eea
function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];
  const productList = document.querySelector(".product-list");

<<<<<<< HEAD
  // Show a message if the cart is empty
=======
  // Display a message if the cart is empty
>>>>>>> 189d5c9d3a73b4ecb59110fdfd3be5aac3ae0eea
  if (cartItems.length === 0) {
    productList.innerHTML = "<p>Your cart is currently empty</p>";
    document.querySelector(".cart-footer").classList.add("hide"); // Hide the total if the cart is empty
    return;
  }

<<<<<<< HEAD
  // Function to render the contents of the cart
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  productList.innerHTML = htmlItems.join("");

  // Calculate and display cart total
=======
  // Map the cart items and generate the HTML
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  productList.innerHTML = htmlItems.join("");

  // Calculate and display the cart total
>>>>>>> 189d5c9d3a73b4ecb59110fdfd3be5aac3ae0eea
  calculateTotal(cartItems);

  // Add event listeners to the remove buttons after rendering the items
  addRemoveButtonEventListeners();
}

// Function to generate the HTML template for each cart item
function cartItemTemplate(item) {
  if (!item) return "";
<<<<<<< HEAD
  const colorName =
    item.Colors && item.Colors.length > 0
      ? item.Colors[0].ColorName
      : "Color not available";
=======
  const colorName = item.Result.Colors && item.Result.Colors.length > 0 ? item.Result.Colors[0].ColorName : "Color not available";
>>>>>>> 189d5c9d3a73b4ecb59110fdfd3be5aac3ae0eea

  const newItem = `<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img src="${item.Result.Images.PrimarySmall}" alt="${item.Result.Name}" />
    </a>
    <a href="#">
      <h2 class="card__name">${item.Result.Name}</h2>
    </a>
    <p class="cart-card__color">${colorName}</p>
    <p class="cart-card__quantity">qty: ${item.Result.Quantity || 1}</p> <!-- Change the quantity if available -->
    <p class="cart-card__price">$${item.Result.FinalPrice}</p>
    <button class="cart-card__remove" data-id="${item.Result.Id}">X</button> 
  </li>`;

  return newItem;
}

// Function to calculate and display the cart total
function calculateTotal(cartItems) {
  const totalElement = document.getElementById("total-amount");
  const cartFooter = document.querySelector(".cart-footer");

  // Initialize total
  let total = 0;

<<<<<<< HEAD
  // Calculate the total of the items
  cartItems.forEach((item) => {
    total += item.FinalPrice * (item.Quantity || 1); // Assuming that each item has 'FinalPrice' and 'Quantity'
  });

  // Show total
  if (total > 0) {
    totalElement.innerText = total.toFixed(2); // Displays total to 2 decimal places
    cartFooter.classList.remove("hide"); // Show the cart footer
  } else {
    cartFooter.classList.add("hide"); // Hide footer if there are no items
  }
}

// Feature to add event listeners to delete buttons
=======
  // Calculate the total price of the items
  cartItems.forEach(item => {
    total += item.Result.FinalPrice * (item.Result.Quantity || 1); // Assuming each item has 'FinalPrice' and 'Quantity'
  });

  // Display the total
  if (total > 0) {
    totalElement.innerText = total.toFixed(2); // Display the total with 2 decimals
    cartFooter.classList.remove("hide"); // Show the cart footer
  } else {
    cartFooter.classList.add("hide"); // Hide the footer if no items
  }
}

// Function to add event listeners to the remove buttons
>>>>>>> 189d5c9d3a73b4ecb59110fdfd3be5aac3ae0eea
function addRemoveButtonEventListeners() {
  const removeButtons = document.querySelectorAll(".cart-card__remove");
  removeButtons.forEach((button) => {
    button.addEventListener("click", removeCartItem);
  });
}

<<<<<<< HEAD
// Function to remove an item from the cart individually
=======
// Function to remove an individual item from the cart
>>>>>>> 189d5c9d3a73b4ecb59110fdfd3be5aac3ae0eea
function removeCartItem(event) {
  const itemId = event.target.getAttribute("data-id");
  const cartItems = getLocalStorage("so-cart");

<<<<<<< HEAD
  // Find the first product with the specified ID and delete it
  const itemIndex = cartItems.findIndex((item) => item.Id === itemId);
  if (itemIndex !== -1) {
    cartItems.splice(itemIndex, 1); // Delete only one instance of the product
    setLocalStorage("so-cart", cartItems); // Refresh the cart in localStorage
=======
  // Find the first product with the specified ID and remove it
  const itemIndex = cartItems.findIndex((item) => item.Result.Id === itemId);
  if (itemIndex !== -1) {
    cartItems.splice(itemIndex, 1); // Remove only one instance of the product
    setLocalStorage("so-cart", cartItems); // Update the cart in localStorage
>>>>>>> 189d5c9d3a73b4ecb59110fdfd3be5aac3ae0eea
  }

  renderCartContents(); // Re-render the cart with the updated items
}

// Initialize the function to render the cart
renderCartContents();
