import React from 'react'
import { NavLink } from 'react-router-dom'
import ProductSlider from "../card/ProductSlider";

function Home() {
  return (
    <div className=''>

      <div className='block lg:hidden w-full h-[130vw] sm:h-[100vw] md:h-[80vw] bg-no-repeat bg-cover bg-top relative'
        style={{ backgroundImage: "url('https://image.hm.com/content/dam/global_campaigns/season_00/ladies/2020/launch/2020-CPD-8-hm-studio-holiday-capsule.jpg?imwidth=4800')" }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      <div className='hidden lg:block w-full h-[95vh] bg-no-repeat bg-cover bg-center relative bg-position-[center_2%]'
        style={{ backgroundImage: "url('https://image.hm.com/content/dam/global_campaigns/season_03/seo-article/2063/2063-16x9-CPD-2-studio-ss26-seo-article.jpg?imwidth=4800')" }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center px-7 py-4 font-michroma text-sm md:text-md font-semibold italic gap-1 md:gap-0'>
        <p>Style That Represent Freedom</p>
        <p>Style That Represent You</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">
        <NavLink to="/">
          <div
            className="relative h-[60vw] md:h-full bg-cover bg-position-[center_1%]"
            style={{
              backgroundImage:
                "url('https://assets.vogue.com/photos/66eb398d0c166b7e67f3acc4/master/w_1920,c_limit/...')",
            }}
          >
            <div className="absolute top-[80%] left-[20%] -translate-x-1/2 bg-white flex items-center shadow">
              <span className="px-3 py-1 font-medium">₹2299</span>
              <button className="flex items-center justify-center w-8 h-8 border-l text-center cursor-pointer hover:bg-black hover:text-white">+</button>
            </div>
          </div>
        </NavLink>

        <NavLink to="/">
          <div
            className="relative h-[60vw] md:h-full bg-cover bg-position-[center_14%]"
            style={{
              backgroundImage:
                "url('https://image.hm.com/content/dam/global_campaigns/season_03/men/start-page-assets/wk26/MF05263P22-4x5-startpage-wk26.jpg?imwidth=1024')",
            }}
          >
            <div className="absolute top-[20%] right-[8%] bg-white flex items-center shadow">
              <span className="px-3 py-1 font-medium">₹2399</span>
              <button className="flex items-center justify-center w-8 h-8 border-l text-center cursor-pointer hover:bg-black hover:text-white">+</button>
            </div>
          </div>
        </NavLink>
      </div>

      <div className='flex items-start justify-start flex-col pt-10 pb-6'>
        <h2 className='font-montserrat text-2xl md:text-4xl px-6 md:px-10 pt-8'>/ NEW COLLECTION</h2>
        <div className='w-full px-4 md:px-10 py-5'>
          <ProductSlider />
        </div>
      </div>

      <div className='h-[50vw] md:h-[80vh] relative'>
        <div className='bg-[url("https://cdn.myportfolio.com/71bdbafa5b127e2fc9138c11dcef5391/d43fc9b8-571d-4769-85c1-c7d8098d5e5b.jpg?h=c527c5a5c9c0955db43760e3387ac4e2")] w-full h-full bg-no-repeat bg-cover bg-position-[center_55%] flex items-center justify-center flex-col'>
          <div className='absolute inset-0 bg-black opacity-20'></div>
          <h2 className='text-white text-3xl sm:text-5xl md:text-7xl font-light font-michroma tracking-wider p-4 z-50 text-center'>Wear what matters</h2>
          <button className='bg-white px-6 md:px-8 py-2 mt-4 cursor-pointer z-50 font-michroma border-none rounded-sm font-bold hover:bg-gray-300 transition duration-300 hover:translate-y-1 active:translate-y-1.5 text-sm md:text-base'>Shop Now</button>
        </div>
      </div>

      <h2 className='font-montserrat text-2xl md:text-4xl px-6 md:px-10 pt-10 mb-8 mt-8'>/ OUR PRODUCTS</h2>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 md:grid-rows-2 h-auto md:h-screen gap-0">

          <div className="sm:col-span-1 md:col-span-3 relative cursor-pointer overflow-hidden group h-[60vw] sm:h-[45vw] md:h-full">
            <img src='https://image.hm.com/assets/hm/49/32/49321ec27a9763b2a6896fc4616267bddf19917e.jpg?imwidth=2160' className="w-full h-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-110" />
            <div className='absolute inset-0 bg-black opacity-20 z-10 group-hover:opacity-0 transition duration-300'></div>
            <h2 className="absolute inset-0 flex items-center justify-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl z-20">Top Wear</h2>
          </div>

          <div className="sm:col-span-1 md:col-span-3 relative cursor-pointer overflow-hidden group h-[60vw] sm:h-[45vw] md:h-full">
            <img src='https://image.hm.com/assets/hm/00/63/00636aff43ec9813fc4c586d4230b10a657bd7a0.jpg?imwidth=2160' className="w-full h-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-110" />
            <div className='absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition duration-300'></div>
            <h2 className="absolute inset-0 flex items-center justify-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Bottoms</h2>
          </div>

          <div className="sm:col-span-1 md:col-span-2 relative cursor-pointer overflow-hidden group h-[60vw] sm:h-[45vw] md:h-full">
            <img src='https://image.hm.com/assets/hm/b5/4c/b54c2bf18455a6f3bf06e90ffa849211a3034f5b.jpg?imwidth=2160' className="w-full h-full object-cover object-top transition duration-300 group-hover:scale-105 group-hover:brightness-110" />
            <div className='absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition duration-300'></div>
            <h2 className="absolute inset-0 flex items-center justify-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Summer Wear</h2>
          </div>

          <div className="sm:col-span-1 md:col-span-2 relative cursor-pointer overflow-hidden group h-[60vw] sm:h-[45vw] md:h-full">
            <img src='https://image.hm.com/assets/hm/1e/b3/1eb362511cb6223b9939b3a51b92dfab7d5c85b8.jpg?imwidth=2160' className="w-full h-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-110" />
            <div className='absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition duration-300'></div>
            <h2 className="absolute inset-0 flex items-center justify-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Winter Wear</h2>
          </div>

          <div className="sm:col-span-2 md:col-span-2 relative cursor-pointer overflow-hidden group h-[60vw] sm:h-[45vw] md:h-full">
            <img src='https://image.hm.com/assets/hm/15/de/15debb2c68d4b1e9f3ef7ef16768b65818f94e89.jpg?imwidth=2160' className="w-full h-full object-cover object-top transition duration-300 group-hover:scale-105 group-hover:brightness-110" />
            <div className='absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition duration-300'></div>
            <h2 className="absolute inset-0 flex items-center justify-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Accessories</h2>
          </div>

        </div>
      </div>

      <div className='flex flex-col lg:flex-row items-start justify-center px-6 md:px-10 my-12 lg:my-20 gap-8 lg:gap-14'>
        <div className='w-full lg:w-1/2 h-[60vw] lg:h-[80vh] overflow-hidden'>
          <img src="https://image.hm.com/assets/hm/25/84/2584034bb9df6c56446d93b8e831848f42866c29.jpg?imwidth=2160" className='w-full h-full object-cover object-top' alt="" />
        </div>
        <div className='w-full lg:w-1/2 lg:h-[80vh] flex flex-col justify-between gap-6 lg:gap-0'>
          <div>
            <h2 className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-michroma italic leading-snug flex flex-col gap-2">
              <span>/ Check Out</span>
              <span>Our Other</span>
              <span>Collection</span>
            </h2>
          </div>
          <div className='flex flex-col sm:flex-row gap-6 sm:gap-8 w-full mt-6 lg:mt-0'>
            <div className='w-full sm:w-1/2 aspect-[4/4] overflow-hidden bg-[#f5f5f3]'>
              <img src='https://imgs.search.brave.com/avMaDbaTbrLT9P-69O0D4chYUKCq4mGC53KgQPl8uWk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5obS5jb20vYXNz/ZXRzL2htL2U3Lzc4/L2U3NzhkODE1NDU0/NmRiNDE5MmRkODBk/ZTBhNjM1MWM3YTM5/ZjkzMmUuanBnP2lt/d2lkdGg9MTUzNg' className='w-full h-full object-contain object-center'></img>
            </div>
            <div className='w-full sm:w-1/2 flex flex-col justify-between gap-4'>
              <p className='text-base md:text-lg lg:text-xl font-montserrat tracking-wider leading-relaxed'>Exclusive Collection of<br/>clothes and accessories <br/>for men and women<br/>that conveys quiet luxury</p>
              <NavLink to="/collections" className="text-black font-michroma text-lg font-bold w-fit block hover:underline underline-offset-4 transition-all duration-300">View All →</NavLink>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home