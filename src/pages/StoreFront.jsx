import { initialProducts } from "../data/products";
import ProductGrid from "../components/product/ProductGrid";
import Navbar from "../components/layout/Navbar";

function Storefront() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold">Featured Products</h2>

        <p className="text-gray-500 mt-2 mb-8">Browse our latest collection</p>

        <ProductGrid products={initialProducts} />
      </main>
    </>
  );
}

export default Storefront;
