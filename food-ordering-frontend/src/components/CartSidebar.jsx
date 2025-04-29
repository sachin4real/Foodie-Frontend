import { useCart } from "../context/CartContext";

function CartSidebar() {
  const { isCartOpen, toggleCart, cartItems } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  };

  return (
    <div className={`fixed top-0 right-0 bg-white shadow-lg w-80 h-full p-5 flex flex-col transition-transform duration-300 z-30 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      
      {/* Close Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-orange-500">My Cart</h2>
        <button onClick={toggleCart} className="p-2 bg-orange-500 text-white rounded hover:bg-orange-600">
          Close
        </button>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">Your cart is empty 🛒</p>
        ) : (
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center bg-gray-100 p-3 rounded-md hover:bg-gray-200 transition">
                <span className="font-medium text-gray-800">{item.name}</span>
                <span className="text-orange-500 font-bold">Rs. {item.price}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Checkout Section */}
      {cartItems.length > 0 && (
        <div className="mt-6">
          <div className="flex justify-between mb-4">
            <span className="font-semibold text-gray-700">Total:</span>
            <span className="font-bold text-lg text-orange-500">Rs. {calculateTotal()}</span>
          </div>
          <button
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default CartSidebar;
