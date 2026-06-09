import Navbar from "../components/layout/Navbar";
import ProductGrid from "../components/product/ProductGrid";
import Cart from "../components/cart/Cart";

import { initialProducts } from "../data/products";

function Storefront() {
  return (
    <>
      <Navbar />

      <div className="flex">
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-8">Featured Products</h1>

          <ProductGrid products={initialProducts} />
        </main>

        <Cart />
      </div>
    </>
  );
}

export default Storefront;
