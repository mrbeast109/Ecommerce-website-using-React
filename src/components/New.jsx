import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../crartDrawer/CartContext'

const newArrivals = [
  {
    id: 101,
    name: "Linen Camp-Collar Shirt",
    price: 2499,
    image: "https://image.hm.com/assets/hm/31/33/313364edabcdaa830553ac4fdb3cb0ce0e638d66.jpg?imwidth=384",
  },
  {
    id: 102,
    name: "Relaxed Chino Shorts",
    price: 1799,
    image: "https://image.hm.com/assets/hm/db/58/db589210a7980be9abdcf5a7b00e4dd19bacb84a.jpg?imwidth=384",
  },
  {
    id: 103,
    name: "Printed Trucker Cap",
    price: 899,
    image: "https://image.hm.com/assets/hm/b5/4c/b54c2bf18455a6f3bf06e90ffa849211a3034f5b.jpg?imwidth=384",
  },
  {
    id: 104,
    name: "Essential Oversized Tee",
    price: 999,
    image: "https://image.hm.com/assets/hm/52/69/5269d146117fc782b5f1aa4e834fbe54450ab83e.jpg?imwidth=2160",
  },
  {
    id: 105,
    name: "Frill-Trimmed Dress",
    price: 1599,
    image: "https://image.hm.com/assets/hm/fb/30/fb302a57feaa1cd6a43783e1fbbdd3894dfa6732.jpg?imwidth=384",
  },
  {
    id: 106,
    name: "Resort Shirt — Navy",
    price: 1499,
    image: "https://image.hm.com/assets/hm/46/bf/46bf9a1915eff10996840159767b56c61eb3d98f.jpg?imwidth=2160",
  },
  {
    id: 107,
    name: "Relaxed Fit Resort Shirt",
    price: 1499,
    image: "https://image.hm.com/assets/hm/65/8b/658b5630bd1c416fd6a0ada1047b7c31565782de.jpg?imwidth=2160",
  },
  {
    id: 108,
    name: "DryMove™ Sports Top",
    price: 2299,
    image: "https://image.hm.com/assets/hm/ff/70/ff70849088fb64aeea67c721de2688965c85b743.jpg?imwidth=2160",
  },
]

function NewArrivalCard({ product }) {
  const { addToCart } = useCart()
  const [wished, setWished] = useState(false)

  return (
    <div className="flex flex-col group cursor-pointer">
      <div className="relative overflow-hidden bg-[#f5f5f3] aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500 ease-in-out p-2"
        />
        <button
          onClick={() => addToCart(product)}
          className="absolute bottom-0 left-0 right-0 bg-black/80 text-white text-[11px] font-montserrat font-semibold py-3 tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer hover:bg-black"
        >
          + ADD TO CART
        </button>
      </div>

      <div className="flex items-start justify-between mt-1 px-0.5">
        <div className="flex flex-col gap-0.5">
          <h3 className="font-montserrat text-xs sm:text-sm font-medium text-gray-900 leading-snug">
            {product.name}
          </h3>
          <p className="font-montserrat text-xs text-gray-500">
            ₹{product.price.toLocaleString()}
          </p>
        </div>
        <button
          onClick={() => setWished(!wished)}
          className={`text-lg mt-0.5 flex-shrink-0 transition-colors duration-200 cursor-pointer ${
            wished ? 'text-red-500' : 'text-gray-300 hover:text-gray-600'
          }`}
          aria-label="Wishlist"
        >
          {wished ? '♥' : '♡'}
        </button>
      </div>
    </div>
  )
}

function New() {
  return (
    <div className="min-h-screen">

      <div className="flex flex-col md:flex-row w-full h-auto md:h-[95vh]">

        <div className="relative w-full md:w-[65%] h-[75vw] md:h-full overflow-hidden">
          <img
            src="https://image.hm.com/content/dam/global_campaigns/season_03/men/mf05263p09/MF05263P09-16x9-3.jpg?imwidth=1920"
            alt="New Arrivals"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

          <div className="absolute bottom-10 left-8 text-white">
            <p className="font-michroma text-xs tracking-[0.3em] uppercase mb-3 opacity-80">
              New Arrivals — 2026
            </p>
            <h1 className="font-michroma text-3xl sm:text-4xl md:text-5xl leading-tight font-light">
              / Wear What
              <br />
              <span className="font-redrose italic font-semibold">
                Feels Right
              </span>
            </h1>
            <p className="font-montserrat text-sm mt-4 opacity-75 tracking-wider max-w-xs">
              Pieces crafted for the moment you stop blending in.
            </p>
          </div>
        </div>

        <div className="relative w-full md:w-[35%] h-[60vw] md:h-full overflow-hidden">
          <img
            src="https://image.hm.com/content/dam/global_campaigns/season_03/men/mf05263p09/MF05263P09-2x3-2.jpg?imwidth=1920"
            alt="Summer Collection"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute top-8 right-8 text-right text-white">
            <p className="font-montserrat text-[10px] tracking-[0.25em] uppercase opacity-70 mb-1">
              2026
            </p>
            <p className="font-michroma text-lg md:text-xl leading-tight font-semibold tracking-wider">
              SUMMER
              <br />
              COLLECTION
            </p>
          </div>
        </div>

      </div>

      <div className="flex flex-col md:flex-row justify-between items-center px-7 py-4 font-michroma text-sm font-semibold italic gap-1 md:gap-0 border-b border-gray-100">
        <p>Fresh Drops. Every Week.</p>
        <p>Limited — Get Them Before They're Gone</p>
      </div>

      <div className="px-6 md:px-10 pt-10 pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
        <div>
          <p className="font-michroma text-xs tracking-[0.3em] text-gray-400 uppercase mb-1">2026 Season</p>
          <h2 className="font-montserrat text-2xl md:text-4xl font-semibold">/ NEW ARRIVALS</h2>
        </div>
        <p className="font-montserrat text-sm text-gray-400 italic">
          {newArrivals.length - 4} styles just landed
        </p>
      </div>

      <div className="px-6 md:px-10 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-5 gap-y-10">
          {newArrivals.slice(0, 4).map((product) => (
            <NewArrivalCard key={product.id} product={product} />
          ))}
        </div>
      </div>


      <div className="relative w-full h-[50vw] md:h-[65vh] overflow-hidden mt-8">
        <img
          src="https://image.hm.com/assets/hm/49/32/49321ec27a9763b2a6896fc4616267bddf19917e.jpg?imwidth=2160"
          alt="The New Edit"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
          <h2 className="text-white font-michroma text-3xl sm:text-5xl md:text-6xl font-light tracking-widest text-center px-4">
            The New Edit
          </h2>
          <p className="text-white/75 font-montserrat text-sm md:text-base tracking-wider text-center max-w-md px-4">
            Curated looks built for movement, mood and modern life.
          </p>
          <NavLink
            to="/collections"
            className="border border-white text-white font-michroma text-xs tracking-widest px-8 py-3 hover:bg-white hover:text-black transition-all duration-300"
          >
            SHOP ALL
          </NavLink>
        </div>
      </div>

    </div>
  )
}

export default New