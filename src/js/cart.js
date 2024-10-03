import { getLocalStorage, setLocalStorage } from "./utils.mjs";

// Function to render the contents of the cart
function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];
  const productList = document.querySelector(".product-list");

  // Show a message if the cart is empty
  if (cartItems.length === 0) {
    productList.innerHTML = "<p>Your cart is currently empty</p>";
    document.querySelector(".cart-footer").classList.add("hide"); // Hide the total if the cart is empty
    return;
  }

  // Function to render the contents of the cart
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  productList.innerHTML = htmlItems.join("");

  // Calculate and display cart total
  calculateTotal(cartItems);

  // Añadir oyentes a los botones de eliminar después de renderizar los items
  addRemoveButtonEventListeners();
}

// Función para generar la plantilla HTML de cada item del carrito
function cartItemTemplate(item) {
  if (!item) return "";
  const colorName =
    item.Colors && item.Colors.length > 0
      ? item.Colors[0].ColorName
      : "Color not available";

  const newItem = `<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img src="${item.Image}" alt="${item.Name}" />
    </a>
    <a href="#">
      <h2 class="card__name">${item.Name}</h2>
    </a>
    <p class="cart-card__color">${colorName}</p>
    <p class="cart-card__quantity">qty: ${item.Quantity || 1}</p> <!-- Cambiar la cantidad si está disponible -->
    <p class="cart-card__price">$${item.FinalPrice}</p>
    <button class="cart-card__remove" data-id="${item.Id}">X</button> 
  </li>`;

  return newItem;
}

// Function to calculate and display the cart total
function calculateTotal(cartItems) {
  const totalElement = document.getElementById("total-amount");
  const cartFooter = document.querySelector(".cart-footer");

  // Initialize total
  let total = 0;

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
function addRemoveButtonEventListeners() {
  const removeButtons = document.querySelectorAll(".cart-card__remove");
  removeButtons.forEach((button) => {
    button.addEventListener("click", removeCartItem);
  });
}

// Function to remove an item from the cart individually
function removeCartItem(event) {
  const itemId = event.target.getAttribute("data-id");
  const cartItems = getLocalStorage("so-cart");

  // Find the first product with the specified ID and delete it
  const itemIndex = cartItems.findIndex((item) => item.Id === itemId);
  if (itemIndex !== -1) {
    cartItems.splice(itemIndex, 1); // Delete only one instance of the product
    setLocalStorage("so-cart", cartItems); // Refresh the cart in localStorage
  }

  renderCartContents(); // Re-render the cart with the updated items
}

// Initialize the function to render the cart
renderCartContents();
