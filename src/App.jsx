import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Storefront from "./pages/Storefront";
import AdminDashboard from "./pages/AdminDashboard";

import { initialProducts } from "./data/products";

function App() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");

    return savedProducts ? JSON.parse(savedProducts) : initialProducts;
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Storefront products={products} />} />

        <Route
          path="/admin"
          element={
            <AdminDashboard products={products} setProducts={setProducts} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
