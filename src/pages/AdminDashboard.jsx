import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import { saveProduct } from "../services/productService";
import OfflineBanner from "../components/layout/OfflineBanner";

function AdminDashboard({ products, setProducts }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const newProduct = {
      id: Date.now(),
      name,
      price: Number(price),
      image,
    };

    await saveProduct(newProduct);

    setProducts((prev) => [...prev, newProduct]);

    setName("");
    setPrice("");
    setImage("");

    setLoading(false);
  };

  return (
    <>
      <OfflineBanner />
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* FORM */}

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-bold text-xl mb-4">Add Product</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                className="w-full border p-3 rounded"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                className="w-full border p-3 rounded"
                placeholder="Price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />

              <input
                className="w-full border p-3 rounded"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />

              <button
                disabled={loading}
                className="
                  w-full
                  bg-black
                  text-white
                  py-3
                  rounded
                "
              >
                {loading ? "Saving..." : "Save Product"}
              </button>
            </form>
          </div>

          {/* PRODUCT LIST */}

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-bold text-xl mb-4">Product List</h2>

            <div className="space-y-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="
                    flex
                    justify-between
                    border-b
                    pb-2
                  "
                >
                  <span>{product.name}</span>

                  <span>₱{product.price.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
