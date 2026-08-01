import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import gsap from 'gsap'
import products from '../data/product'
import { useCart } from '../crartDrawer/CartContext'
import Reveal from '../utils/Reveal'

function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-gray-200 dark:border-gray-700">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-4 font-montserrat text-xs tracking-widest uppercase font-semibold text-gray-800 dark:text-gray-200 cursor-pointer"
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

function RelatedCard({ product }) {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="flex-shrink-0 w-44 cursor-pointer group"
    >
      <div className="overflow-hidden bg-[#f5f5f3] dark:bg-[#1e1e1e] aspect-[3/4] flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <p className="mt-2 font-montserrat text-[11px] font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-100 leading-snug">
        {product.name}
      </p>
      <p className="font-montserrat text-xs text-gray-500 dark:text-gray-400 mt-0.5">
        ${product.price.toLocaleString()}
      </p>
    </div>
  )
}

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

  const displayPrice = `$${product.price.toLocaleString()}`

  return (
    <div className="min-h-screen bg-white dark:bg-[#111111] font-montserrat transition-colors duration-300">

      <Reveal>
        <div className="px-6 md:px-16 pt-6 pb-2 flex items-center gap-2 text-[11px] tracking-widest uppercase text-gray-400 dark:text-gray-400">
          <Link to="/" className="hover:text-gray-700 transition-colors">Home</Link>
          <span>/</span>
          <span className="hover:text-gray-700 transition-colors cursor-pointer" onClick={() => navigate(-1)}>
            {product.category}
          </span>
          <span>/</span>
          <span className="text-gray-800 dark:text-gray-100">{product.name}</span>
        </div>
      </Reveal>

      <div className="px-6 md:px-16 py-6 flex flex-col lg:flex-row gap-10 lg:gap-86 justify-evenly">
        <div ref={imgColRef} className="flex-1 w-full max-w-2xl mx-auto lg:mx-0 order-1">
          <div className="grid grid-cols-[1fr_auto] gap-3">
            <div className="relative overflow-hidden bg-[#f5f5f3] dark:bg-[#1e1e1e] w-full min-w-0 flex items-center justify-center">
              {product.badge && (
                <div className="absolute top-4 left-0 z-10 px-3 py-1 bg-[#1a1a1a]">
                  <span className="text-[9px] font-semibold tracking-[0.15em] uppercase text-white">
                    {product.badge}
                  </span>
                </div>
              )}
              {product.images[activeImg].endsWith('.mp4') || product.images[activeImg].endsWith('.webm') ? (
                <video
                  key={activeImg}
                  src={product.images[activeImg]}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center"
                  style={{ animation: 'fadeInImg 0.4s ease' }}
                />
              ) : (
                <img
                  key={activeImg}
                  src={product.images[activeImg]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                  style={{ animation: 'fadeInImg 0.4s ease' }}
                />
              )}
              <style>{`
                @keyframes fadeInImg { from { opacity: 0; transform: scale(1.03); } to { opacity: 1; transform: scale(1); } }
              `}</style>
            </div>
            {product.images.length > 1 && (
              <div className="flex flex-col gap-2 overflow-y-auto shrink-0 no-scrollbar">
                {product.images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-16 h-20 shrink-0 overflow-hidden border-2 transition-all duration-200 cursor-pointer bg-[#f5f5f3] dark:bg-[#1e1e1e] flex items-center justify-center relative ${
                      activeImg === i ? 'border-gray-900 dark:border-gray-300' : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    {src.endsWith('.mp4') || src.endsWith('.webm') ? (
                      <>
                        <video src={src} className="w-full h-full object-cover object-center" muted playsInline />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="opacity-80"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                      </>
                    ) : (
                      <img src={src} alt="" className="w-full h-full object-contain object-center" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div ref={infoColRef} className="w-full lg:w-[420px] xl:w-[480px] flex flex-col gap-5 lg:sticky lg:top-6 lg:self-start order-2 lg:order-2">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 dark:text-gray-500 mb-1">{product.category}</p>
            <h1 className="font-montserrat text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white leading-tight">
              {product.name}
            </h1>
            <p className="mt-2 text-xl font-medium text-gray-800 dark:text-gray-200">{displayPrice}</p>
          </div>
          {product.colors && product.colors.length > 0 && (
            <div>
              <p className="text-[10px] tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-2">Colour</p>
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
          {product.sizes && product.sizes.length > 0 && (
            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-[10px] tracking-widest uppercase text-gray-500 dark:text-gray-400">Size</p>
                <button className="text-[10px] tracking-widest uppercase text-gray-400 dark:text-gray-500 underline cursor-pointer hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
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
                        ? 'bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-gray-900 dark:border-white'
                        : 'bg-white dark:bg-transparent text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-gray-700 dark:hover:border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
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
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-900 dark:border-gray-300'
                  : 'bg-white dark:bg-transparent text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-gray-700 dark:hover:border-gray-300'
              }`}
            >
              <span className={`text-base ${wished ? 'text-red-500' : ''}`}>{wished ? '♥' : '♡'}</span>
              {wished ? 'Saved to Wishlist' : 'Add to Wishlist'}
            </button>
          </div>
          <div className="mt-4">
            <AccordionItem title="Description">
              <p className="dark:text-gray-400">{product.description}</p>
            </AccordionItem>
            <AccordionItem title="Size & Fit">
              <p className="dark:text-gray-400">Model is 6'0&quot; / 183 cm and wears size M. We recommend sizing up for an oversized fit. Measurements may vary by ±1 cm.</p>
            </AccordionItem>
            <AccordionItem title="Delivery & Returns">
              <p className="dark:text-gray-400">Free standard delivery on orders over $2,000. Express delivery available at checkout. Free returns within 30 days.</p>
            </AccordionItem>
            <div className="border-t border-gray-200 dark:border-gray-700" />
          </div>
        </div>
      </div>
      {related.length > 0 && (
        <div className="px-6 md:px-16 py-12 border-t border-gray-100 dark:border-gray-800">
          <Reveal>
            <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 dark:text-gray-500 mb-1">More from {product.category}</p>
            <h2 className="font-montserrat text-xl md:text-2xl font-semibold mb-8 dark:text-white">You May Also Like</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex gap-5 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none' }}>
              {related.map((p) => (
                <RelatedCard key={p.id} product={p} />
              ))}
            </div>
          </Reveal>
        </div>
      )}
    </div>
  )
}
