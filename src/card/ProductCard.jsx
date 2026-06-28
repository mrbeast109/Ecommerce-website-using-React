// src/components/ProductCard.jsx

function ProductCard({ product }) {
  return (
    <div className="w-72 flex-shrink-0">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-96 object-cover hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
      />

      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
    </div>
  );
}

export default ProductCard;
