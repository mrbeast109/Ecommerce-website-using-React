import { useRef } from "react";
import products from "../data/product";
import ProductCard from "./ProductCard";

export default function ProductSlider() {
  const sliderRef = useRef();

  const next = () => {
    sliderRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  const prev = () => {
    sliderRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-10 cursor-pointer text-3xl"
      >
        ←
      </button>

      <div
        ref={sliderRef}
        className="flex gap-6 scroll-smooth overflow-x-hidden "
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-10 cursor-pointer text-3xl"
      >
        →
      </button>
    </div>
  );
}