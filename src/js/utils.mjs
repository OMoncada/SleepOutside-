// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// get URL parameters
export function getParams(param) {
  const queryString = window.location.search; // Get the query string from the URL
  const urlParams = new URLSearchParams(queryString); // Create a URLSearchParams object
  return urlParams.get(param); // Return the parameter value
}

// function to render the list using a template function and a parent element
export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = false) {
  //This will clear the parent element's content if the clear flag is true
  if (clear) {
    parentElement.innerHTML = "";
  }

  // Si no se proporciona una lista, usamos solo la función de plantilla
  const htmlStrings = list ? list.map(templateFn) : [templateFn()]; // Cambiado para manejar una función estática

  // Insertamos el HTML generado en el elemento padre en la posición especificada
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

// function to take an optional object and a template and insert the objects as HTML into the DOM
export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.insertAdjacentHTML("afterbegin", template);
  //if there is a callback...call it and pass data
  if (callback) {
    callback(data);
  }
}
function convertToText(value) {
  if (typeof value === "number") {
    return value.toString();
  } else if (typeof value === "object") {
    return JSON.stringify(value);
  } else {
    return String(value);
  }
}
async function loadTemplate(path) {
  const res = await fetch(path);
  // const template = await res.text();
  const template = convertToText(res);
  return template;
}

export async function loadHeaderFooter() {
  const headerTemplate = await loadTemplate("../partials/header.html");
  const footerTemplate = await loadTemplate("../partials/footer.html");
  const headerElement = document.getElementById("main-header");
  const footerElement = document.getElementById("main-footer");

  renderWithTemplate(headerTemplate, headerElement);
  renderWithTemplate(footerTemplate, footerElement);
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  const element = qs(selector);
  if (element) {
    element.addEventListener("touchend", (event) => {
      event.preventDefault();
      callback();
    });
    element.addEventListener("click", callback);
  }
}
