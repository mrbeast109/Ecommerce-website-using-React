import { useCart } from "../crartDrawer/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="w-72 flex-shrink-0 group cursor-pointer" style={{ scrollSnapAlign: "start" }}>
      <div className="overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
        />
        {/* Add to cart overlay button */}
        <button
          onClick={() => addToCart(product)}
          className="absolute bottom-0 left-0 right-0 bg-black/80 text-white text-xs font-montserrat font-semibold py-3 tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer hover:bg-black"
        >
          + ADD TO BASKET
        </button>
      </div>

      <h2 className="mt-2 text-sm font-montserrat font-medium">{product.name}</h2>
      <p className="text-sm text-gray-600 font-montserrat">₹{product.price.toLocaleString()}</p>
    </div>
  );
}

export default ProductCard;
