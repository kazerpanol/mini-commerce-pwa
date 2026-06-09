import { useCart } from "../../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="
        mt-4
        w-full
        bg-black
        text-white
        py-2
        rounded-lg
      "
    >
      Add To Cart
    </button>
  );
}
