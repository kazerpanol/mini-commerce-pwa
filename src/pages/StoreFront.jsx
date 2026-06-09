import Navbar from "../components/layout/Navbar";
import ProductGrid from "../components/product/ProductGrid";
import Cart from "../components/cart/Cart";

function Storefront({ products }) {
  return (
    <>
      <Navbar />

      <div className="flex">
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-8">Featured Products</h1>

          <ProductGrid products={products} />
        </main>

        <Cart />
      </div>
    </>
  );
}

export default Storefront;
