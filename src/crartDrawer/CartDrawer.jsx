import { useCart } from "./CartContext";

function CartDrawer() {
  const { cartOpen, cartItems, total, closeCart, removeItem, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 z-[90] transition-opacity duration-300 ${
          cartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-[100] flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <h2 className="font-montserrat font-semibold text-lg tracking-wide italics">/ CART</h2>
          <button
            onClick={closeCart}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-black transition-colors duration-200 text-xl cursor-pointer"
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-1">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-gray-400">
              <span className="text-5xl">🛍️</span>
              <p className="font-montserrat text-sm tracking-wide">Your Cart is empty</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 py-5 border-b border-gray-100 last:border-0">
                {/* Product Image */}
                <div className="w-24 h-28 flex-shrink-0 bg-gray-50 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-montserrat font-semibold text-sm leading-snug">{item.name}</h3>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-xs text-gray-400 hover:text-red-500 underline underline-offset-2 transition-colors duration-200 whitespace-nowrap cursor-pointer flex-shrink-0"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="flex flex-col gap-1 mt-2 font-montserrat text-sm text-gray-500">
                    <div className="flex gap-4">
                      <span className="w-16 text-gray-400 text-xs">Quantity:</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="w-6 h-6 flex items-center justify-center border border-gray-200 hover:bg-black hover:text-white transition-colors duration-200 text-sm cursor-pointer leading-none"
                        >
                          −
                        </button>
                        <span className="text-sm font-semibold text-black w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="w-6 h-6 flex items-center justify-center border border-gray-200 hover:bg-black hover:text-white transition-colors duration-200 text-sm cursor-pointer leading-none"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <span className="font-montserrat text-xs text-gray-400">Cost</span>
                    <span className="font-montserrat font-semibold text-sm text-black">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="px-6 py-5 border-t border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <span className="font-montserrat font-semibold text-base">Result</span>
              <span className="font-montserrat font-bold text-base">₹{total.toLocaleString()}</span>
            </div>
            <button className="w-full bg-[#3b1f0d] hover:bg-[#2a1508] active:scale-[0.98] text-white font-montserrat font-semibold py-4 transition-all duration-200 cursor-pointer tracking-wider text-sm">
              Pay ₹{total.toLocaleString()}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CartDrawer;