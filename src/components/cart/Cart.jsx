import { useCart } from "../../context/CartContext";

function Cart() {
  const { cart, total, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="bg-white border-l w-80 h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="border-b pb-4">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">{item.name}</p>

                    <p className="text-sm text-gray-500">
                      ₱{item.price.toLocaleString()}
                    </p>
                  </div>

                  <p className="font-semibold">
                    ₱{(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>

                <div className="flex items-center w-full mt-3 overflow-hidden rounded-lg">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="
      flex-1
      py-2
      bg-orange-500
      text-white
      font-bold
      text-lg
      hover:bg-orange-600
      transition
    "
                  >
                    −
                  </button>

                  <div
                    className="
      flex-1
      py-1.75
      text-center
      font-semibold
      text-lg
      bg-white
      text-orange-600
      border-y
      border-orange-500
    "
                  >
                    {item.quantity}
                  </div>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="
      flex-1
      py-2
      bg-orange-500
      text-white
      font-bold
      text-lg
      hover:bg-orange-600
      transition
    "
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold">
            Total: ₱{total.toLocaleString()}
          </h3>
        </>
      )}
    </div>
  );
}

export default Cart;
