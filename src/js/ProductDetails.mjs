export default class ProductDetails {
    constructor(productId, dataSource) {
        this.productId = productId; // ID del producto
        this.product = {}; // Objeto para almacenar detalles del producto
        this.dataSource = dataSource; // Fuente de datos
    }

    // Método para inicializar el objeto
    async init() {
        // Recuperar detalles del producto
        this.product = await this.dataSource.findProductById(this.productId);
        // Añadir event listener al botón de "Add to Cart"
        document.getElementById('addToCart')
            .addEventListener('click', this.addToCart.bind(this));

        // Renderizar detalles
        this.renderProductDetails();
    }

    // Método para añadir el producto al carrito
    addToCart() {
        let cart = JSON.parse(localStorage.getItem("so-cart")) || [];
        cart.push(this.product);
        localStorage.setItem("so-cart", JSON.stringify(cart));
        alert(`${this.product.NameWithoutBrand} ha sido añadido al carrito.`);
    }

    // Método para renderizar los detalles del producto
    renderProductDetails() {
        const element = document.querySelector("main");
        const productHtml = `
        <section class="product-detail">
          <h3>${this.product.Brand.Name}</h3>
          <h2>${this.product.NameWithoutBrand}</h2>
          <img src="${this.product.Image}" alt="${this.product.NameWithoutBrand}" />
          <p>Precio: $${this.product.FinalPrice}</p>
          <button id="addToCart">Añadir al carrito</button>
        </section>
      `;
        element.innerHTML = productHtml;
    }
}
