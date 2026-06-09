import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="font-bold text-xl">MiniCommerce</h1>

        <nav className="flex gap-4">
          <Link to="/" className="text-gray-600 hover:text-black">
            Store
          </Link>

          <Link to="/admin" className="text-gray-600 hover:text-black">
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
