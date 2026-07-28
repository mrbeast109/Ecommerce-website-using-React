import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import gsap from 'gsap'
import products from '../data/product'
import { useCart } from '../crartDrawer/CartContext'

/* ── Accordion item ─────────────────────────────────────────── */
function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-4 font-montserrat text-xs tracking-widest uppercase font-semibold text-gray-800 cursor-pointer"
      >
        {title}
        <span
          className="text-lg leading-none transition-transform duration-300"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-400 ease-in-out font-montserrat text-sm text-gray-500 leading-relaxed"
        style={{ maxHeight: open ? '300px' : '0px', paddingBottom: open ? '16px' : '0px' }}
      >
        {children}
      </div>
    </div>
  )
}

/* ── Related product mini-card ──────────────────────────────── */
function RelatedCard({ product }) {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="flex-shrink-0 w-44 cursor-pointer group"
    >
      <div className="overflow-hidden bg-[#f5f5f3] aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <p className="mt-2 font-montserrat text-[11px] font-semibold uppercase tracking-wide text-gray-800 leading-snug">
        {product.name}
      </p>
      <p className="font-montserrat text-xs text-gray-500 mt-0.5">
        {product.price > 500 ? `₹${product.price.toLocaleString()}` : `$${product.price}.00`}
      </p>
    </div>
  )
}

/* ── Main component ─────────────────────────────────────────── */
export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const product = products.find((p) => p.id === Number(id))

  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] ?? null)
  const [activeImg, setActiveImg] = useState(0)
  const [wished, setWished] = useState(false)
  const [addedFeedback, setAddedFeedback] = useState(false)

  // GSAP refs
  const imgColRef  = useRef(null)
  const infoColRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!product) return

    setActiveImg(0)
    setSelectedSize(null)
    setSelectedColor(product.colors?.[0] ?? null)

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo(imgColRef.current, { x: -40, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.7 })
      .fromTo(infoColRef.current, { x: 40, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.7 }, '<')
  }, [id, product])

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 font-montserrat">
        <p className="text-2xl font-semibold text-gray-800">Product not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="text-sm underline text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
        >
          ← Go back
        </button>
      </div>
    )
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 8)

  function handleAddToCart() {
    addToCart({ ...product, selectedSize, selectedColor })
    setAddedFeedback(true)
    setTimeout(() => setAddedFeedback(false), 2000)
  }

  const displayPrice =
    product.price > 500
      ? `₹${product.price.toLocaleString()}`
      : `$${product.price}.00`

  return (
    <div className="min-h-screen bg-white font-montserrat">

      {/* ── Breadcrumb ── */}
      <div className="px-6 md:px-16 pt-6 pb-2 flex items-center gap-2 text-[11px] tracking-widest uppercase text-gray-400">
        <Link to="/" className="hover:text-gray-700 transition-colors">Home</Link>
        <span>/</span>
        <span className="hover:text-gray-700 transition-colors cursor-pointer" onClick={() => navigate(-1)}>
          {product.category}
        </span>
        <span>/</span>
        <span className="text-gray-700">{product.name}</span>
      </div>

      {/* ── Main grid ── */}
      <div className="px-6 md:px-16 py-6 flex flex-col lg:flex-row gap-10 lg:gap-16">

        {/* LEFT — image gallery */}
        <div ref={imgColRef} className="flex-1 flex flex-col gap-4">

          {/* Primary image */}
          <div className="relative overflow-hidden bg-[#f5f5f3] aspect-[4/5] w-full max-w-2xl mx-auto lg:mx-0">
            {product.badge && (
              <div className="absolute top-4 left-0 z-10 px-3 py-1 bg-[#1a1a1a]">
                <span className="text-[9px] font-semibold tracking-[0.15em] uppercase text-white">
                  {product.badge}
                </span>
              </div>
            )}
            <img
              key={activeImg}
              src={product.images[activeImg]}
              alt={product.name}
              className="w-full h-full object-cover object-top"
              style={{ animation: 'fadeInImg 0.4s ease' }}
            />
            <style>{`
              @keyframes fadeInImg { from { opacity: 0; transform: scale(1.03); } to { opacity: 1; transform: scale(1); } }
            `}</style>
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-16 h-20 overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                    activeImg === i ? 'border-gray-900' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover object-top" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT — product info */}
        <div ref={infoColRef} className="w-full lg:w-[420px] xl:w-[480px] flex flex-col gap-5 lg:sticky lg:top-6 lg:self-start">

          {/* Name & price */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-1">{product.category}</p>
            <h1 className="font-montserrat text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
              {product.name}
            </h1>
            <p className="mt-2 text-xl font-medium text-gray-800">{displayPrice}</p>
          </div>

          {/* Color swatches */}
          {product.colors && product.colors.length > 0 && (
            <div>
              <p className="text-[10px] tracking-widest uppercase text-gray-500 mb-2">Colour</p>
              <div className="flex gap-2">
                {product.colors.map((color) => {
                  const isActive = color === product.colors[0]
                  const variantId = product.variants?.[color]
                  return (
                    <button
                      key={color}
                      onClick={() => {
                        if (variantId && variantId !== product.id) {
                          navigate(`/product/${variantId}`)
                        }
                      }}
                      title={color}
                      className="cursor-pointer transition-transform hover:scale-110"
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        backgroundColor: color,
                        border: isActive ? '2px solid #1a1a1a' : '1.5px solid #d1d5db',
                        outline: isActive ? '2px solid #1a1a1a' : 'none',
                        outlineOffset: '2px',
                        cursor: variantId && variantId !== product.id ? 'pointer' : 'default',
                      }}
                    />
                  )
                })}
              </div>
            </div>
          )}

          {/* Size selector */}
          {product.sizes && product.sizes.length > 0 && (
            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-[10px] tracking-widest uppercase text-gray-500">Size</p>
                <button className="text-[10px] tracking-widest uppercase text-gray-400 underline cursor-pointer hover:text-gray-700 transition-colors">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 text-[11px] font-semibold tracking-widest uppercase border transition-all duration-200 cursor-pointer ${
                      selectedSize === size
                        ? 'bg-gray-900 text-white border-gray-900'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-gray-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-col gap-3 mt-2">
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer ${
                addedFeedback
                  ? 'bg-green-700 text-white'
                  : 'bg-gray-900 text-white hover:bg-gray-700'
              }`}
            >
              {addedFeedback ? '✓ Added to Bag' : '+ Add to Bag'}
            </button>

            <button
              onClick={() => setWished(!wished)}
              className={`w-full py-4 text-[11px] font-semibold tracking-[0.2em] uppercase border transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${
                wished
                  ? 'bg-gray-100 text-gray-900 border-gray-900'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-gray-700'
              }`}
            >
              <span className={`text-base ${wished ? 'text-red-500' : ''}`}>{wished ? '♥' : '♡'}</span>
              {wished ? 'Saved to Wishlist' : 'Add to Wishlist'}
            </button>
          </div>

          {/* Accordion */}
          <div className="mt-4">
            <AccordionItem title="Description">
              <p>{product.description}</p>
            </AccordionItem>
            <AccordionItem title="Size & Fit">
              <p>Model is 6'0&quot; / 183 cm and wears size M. We recommend sizing up for an oversized fit. Measurements may vary by ±1 cm.</p>
            </AccordionItem>
            <AccordionItem title="Delivery & Returns">
              <p>Free standard delivery on orders over ₹2,000. Express delivery available at checkout. Free returns within 30 days.</p>
            </AccordionItem>
            <div className="border-t border-gray-200" />
          </div>
        </div>
      </div>

      {/* ── You May Also Like ── */}
      {related.length > 0 && (
        <div className="px-6 md:px-16 py-12 border-t border-gray-100">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-1">More from {product.category}</p>
          <h2 className="font-montserrat text-xl md:text-2xl font-semibold mb-8">You May Also Like</h2>
          <div className="flex gap-5 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none' }}>
            {related.map((p) => (
              <RelatedCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
