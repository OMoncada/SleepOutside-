import { loadHeaderFooter } from "./utils.mjs";
import CheckoutProcess from "./CheckoutProcess.mjs"; // Import the CheckoutProcess module

async function init() {
  // Load the header and footer
  await loadHeaderFooter();
  // Aquí puedes agregar cualquier otro código específico para la página de checkout
}

// Call the init function
init();


// Initialize the CheckoutProcess with key 'so-cart' and output selectors
const checkout = new CheckoutProcess("so-cart", {
  subtotal: "#subtotal",
  shipping: "#shipping",
  tax: "#tax",
  total: "#total"
});

checkout.init(); // Initialize the process to calculate the item subtotal

// Add an event listener for ZIP code input to trigger the order total calculation
document.getElementById("zip").addEventListener("input", (event) => {
  const zipCode = event.target.value;

  // When the user provides a ZIP code, calculate shipping, tax, and total
  if (zipCode.length === 5) { // Example ZIP validation
    checkout.calculateOrderTotal();
  }else if(zipCode === ""){
    // Reset the displayed shipping, tax, and total
    document.querySelector(checkout.outputSelector.shipping).innerText = "0.00";
    document.querySelector(checkout.outputSelector.tax).innerText = "0.00";
    document.querySelector(checkout.outputSelector.total).innerText = "0.00";
  }
});

// Handle form submission for checkout
document.getElementById("checkout-form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission

  checkout.checkout(event.target); // Call checkout with the form element
});


// // Validate the form on submission
// document.getElementById("checkout-form").addEventListener("submit", function(event) {
//   event.preventDefault();

//   const form = event.target;

//   // Validate if all fields are filled out
//   if (!form.checkValidity()) {
//       alert("Please fill out all the fields.");
//       return;
//   }

//   // You can perform additional validation here if needed

//   alert("Thank you for your order! Your order has been placed.");
  
//   // Optionally: Clear cart and redirect to a thank you page or home
//   localStorage.removeItem("so-cart");
//   window.location.href = "/thankyou.html"; // Redirect after order confirmation
// });






