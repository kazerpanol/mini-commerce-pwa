function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
      <img
        src={product.image}
        alt={product.name}
        className="h-52 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>

        <p className="text-blue-600 font-bold mt-2">${product.price}</p>

        <button
          className="
            mt-4
            w-full
            bg-black
            text-white
            py-2
            rounded-lg
            hover:bg-gray-800
          "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
