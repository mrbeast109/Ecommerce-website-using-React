import React from 'react'
import { NavLink } from 'react-router-dom'
import ProductSlider from "../card/ProductSlider";

function Home() {
  return (
    <div className=''>
      <div className='bg-[url("https://image.hm.com/content/dam/global_campaigns/season_03/seo-article/2063/2063-16x9-CPD-2-studio-ss26-seo-article.jpg?imwidth=4800")] w-full h-[95vh] bg-no-repeat bg-cover bg-top relative'>
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>
      <div className='h-[8vh] flex justify-between items-center px-7 py-7 font-michroma text-md font-semibold italic'>
        <p>Style That Represent Freedom</p>
        <p>Style That Represent You</p>
      </div>

      <div className="h-screen grid grid-cols-2">
        <NavLink to="/">
          <div
            className="relative h-full bg-cover bg-position-[center_1%]"
            style={{
              backgroundImage:
                "url('https://assets.vogue.com/photos/66eb398d0c166b7e67f3acc4/master/w_1920,c_limit/...')",
            }}
          >
            <div className="absolute top-[80%] left-[20%] -translate-x-1/2 bg-white flex items-center shadow">
              <span className="px-3 py-1 font-medium">₹2299</span>

              <button className="flex items-center justify-center w-8 h-8 border-l text-center cursor-pointer hover:bg-black hover:text-white ">
                +
              </button>
            </div>
          </div>
        </NavLink>

        <NavLink to="/">
          <div
            className="relative h-full bg-cover bg-position-[center_25%]"
            style={{
              backgroundImage:
                "url('https://image.hm.com/content/dam/global_campaigns/season_03/men/start-page-assets/wk26/MF05263P22-4x5-startpage-wk26.jpg?imwidth=1024')",
            }}
          >
            <div className="absolute top-[20%] left-[13%] -translate-x-1/2 bg-white flex items-center shadow">
              <span className="px-3 py-1 font-medium">₹2399</span>

              <button className="flex items-center justify-center w-8 h-8 border-l text-center cursor-pointer hover:bg-black hover:text-white ">
                +
              </button>
            </div>
          </div>
        </NavLink>
      </div>

      <div className='h-[80vh] flex items-start justify-start flex-col pt-13'>
        <h2 className='font-montserrat text-4xl px-10 pt-12'>/ NEW COLLECTION</h2>
        <div className='w-full px-10 py-5'>
          <ProductSlider />
        </div>
      </div>      


      <div className='h-[80vh] relative'>
          <div className='bg-[url("https://cdn.myportfolio.com/71bdbafa5b127e2fc9138c11dcef5391/d43fc9b8-571d-4769-85c1-c7d8098d5e5b.jpg?h=c527c5a5c9c0955db43760e3387ac4e2")] w-full h-full bg-no-repeat bg-cover bg-position-[center_55%] flex items-center justify-center flex-col'>
            <div className='absolute inset-0 bg-black opacity-20'></div>
            <h2 className=' text-white text-7xl font-light font-michroma tracking-wider p-4 z-50'>Wear what matters</h2>
            <button className='bg-white px-8 py-2 mt-4 cursor-pointer z-50 font-michroma border-none rounded-sm font-bold hover:bg-gray-300 transition duration-300 hover:translate-y-1 active:translate-y-1.5'>Shop Now</button>
          </div>
      </div>

    </div>
    
  )
}

export default Home