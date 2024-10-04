const baseURL = import.meta.env.VITE_SERVER_URL;
<<<<<<< HEAD
=======

>>>>>>> 189d5c9d3a73b4ecb59110fdfd3be5aac3ae0eea
function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  // Removed the category and path from the constructor, as it’s no longer needed
  constructor() {}

  // Fetch data from the API based on the category provided
  async getData(category) {
    const response = await fetch(baseURL + `products/search/${category}`);
    const data = await convertToJson(response);
    return data.Result;  
  }
<<<<<<< HEAD
  // getData() {
  //   return fetch(this.path)
  //     .then(convertToJson)
  //     .then((data) => data);
  // }
  async getData(category) {
    const response = await fetch(baseURL + `products/search/${category}`);
    const data = await convertToJson(response);
    return data.Result;
=======

  async findProductById(Id) {
    const response = await fetch(`${baseURL}product/${Id}`);
    const product = await convertToJson(response);
    return product; 
>>>>>>> 189d5c9d3a73b4ecb59110fdfd3be5aac3ae0eea
  }
}
