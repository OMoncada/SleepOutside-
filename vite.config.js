import { resolve } from "path";
// eslint-disable-next-line import/namespace
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
        product: resolve(__dirname, "src/product_pages/index.html"),
<<<<<<< HEAD
        listing: resolve(__dirname, "src/product-listing/index.html"),
=======
        Productlist: resolve(__dirname, "src/product-listing/index.html"),
>>>>>>> 189d5c9d3a73b4ecb59110fdfd3be5aac3ae0eea
      },
    },
  },
});
