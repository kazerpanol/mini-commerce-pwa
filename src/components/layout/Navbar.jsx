import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Navbar() {
  const { cart } = useCart();
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="font-bold text-xl">MiniCommerce</h1>

        <nav className="flex gap-4">
          <div className="flex items-center gap-4">
            <Link to="/">Store</Link>

            <Link to="/admin">Admin</Link>

            <div className="bg-black text-white px-3 py-1 rounded-full text-sm">
              Cart ({cart.length})
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
