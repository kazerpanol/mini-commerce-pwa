import { useCart } from "../../context/CartContext";

function Cart() {
  const { cart, total, removeFromCart } = useCart();

  return (
    <div className="bg-white border-l w-80 h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        <>
          <div className="space-y-3">
            {cart.map((item, index) => (
              <div key={item.id} className="flex justify-between">
                <div>
                  <p className="font-medium">{item.name}</p>

                  <p className="text-sm text-gray-500">
                    ₱{item.price.toLocaleString()}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="border-t mt-4 pt-4">
            <h3 className="font-bold">Total: ₱{total.toLocaleString()}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
