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
        <h2 className='font-montserrat text-4xl px-10 pt-12 mb-11 mt-12'>/ OUR PRODUCTS</h2>
        <div>
          <div className="grid grid-cols-6 grid-rows-2 h-screen gap-0">
          <div className="col-span-3 relative cursor-pointer overflow-hidden group">
            <img src='https://image.hm.com/assets/hm/49/32/49321ec27a9763b2a6896fc4616267bddf19917e.jpg?imwidth=2160' className="w-full h-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-110" />
            <div className='absolute inset-0 bg-black opacity-20 z-10 group-hover:opacity-0 transition duration-300'></div>
            <h2 className="absolute inset-0 flex items-center justify-center text-white text-5xl z-20">
              Top Wear
            </h2>
          </div>

          <div className="col-span-3 relative cursor-pointer overflow-hidden group">
            <img src='https://image.hm.com/assets/hm/00/63/00636aff43ec9813fc4c586d4230b10a657bd7a0.jpg?imwidth=2160' className="w-full h-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-110" />
            <div className='absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition duration-300'></div>
            <h2 className="absolute inset-0 flex items-center justify-center text-white text-5xl">
              Bottoms
            </h2>
          </div>

          <div className="col-span-2 relative cursor-pointer overflow-hidden group">
            <img src='https://image.hm.com/assets/hm/b5/4c/b54c2bf18455a6f3bf06e90ffa849211a3034f5b.jpg?imwidth=2160' className="w-full h-full object-cover object-top transition duration-300 group-hover:scale-105 group-hover:brightness-110" />
            <div className='absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition duration-300'></div>
            <h2 className="absolute inset-0 flex items-center justify-center text-white text-5xl">
              Summer Wear
            </h2>
          </div>

          <div className="col-span-2 relative cursor-pointer overflow-hidden group">
            <img src='https://image.hm.com/assets/hm/1e/b3/1eb362511cb6223b9939b3a51b92dfab7d5c85b8.jpg?imwidth=2160' className="w-full h-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-110" />
            <div className='absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition duration-300'></div>
            <h2 className="absolute inset-0 flex items-center justify-center text-white text-5xl">
              Winter Wear
            </h2>
          </div>

          <div className="col-span-2 relative cursor-pointer overflow-hidden group">
            <img src='https://image.hm.com/assets/hm/15/de/15debb2c68d4b1e9f3ef7ef16768b65818f94e89.jpg?imwidth=2160' className="w-full h-full object-cover object-top transition duration-300 group-hover:scale-105 group-hover:brightness-110" />
            <div className='absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition duration-300'></div>
            <h2 className="absolute inset-0 flex items-center justify-center text-white text-5xl">
              Accessories
            </h2>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center px-10 my-20 h-[80vh] gap-14'>
        <div className='h-full w-full'>
          <img src="https://image.hm.com/assets/hm/25/84/2584034bb9df6c56446d93b8e831848f42866c29.jpg?imwidth=2160" className='w-full h-full object-cover object-top' alt="" />
        </div>
        <div className='h-full w-full'>
          <div className='h-1/3 w-full relative'>
            <h2 className="absolute inset-0 flex items-start justify-start text-black text-6xl flex-col py-1 gap-2 font-michroma italic">
              <span>/ Check Out</span><span className='self-center mr-38'>Our Other</span><span className='self-start ml-8'>Collection</span> 
            </h2>
          </div>
          <div className='flex gap-10 w-full h-auto'>
            <div className='w-auto h-auto flex'>
              <img src='https://image.hm.com/assets/hm/d7/62/d762d46bcfebd86dacf4578865965e26b461dcd3.jpg?imwidth=2160' className=' h-[52vh] object-cover w-[54vw]'></img>
            </div>
            <div className='w-full h-auto flex flex-col justify-between'>
              <p className='text-xl font-montserrat tracking-wider'>Exlusive Collection of<br></br>clothes and accessories <br></br>for men and women<br></br>that conveys quiet luxury</p>
              <NavLink to="/collections" className="text-black font-michroma text-lg font-bold mt-10 w-fit block align-text-bottom hover:underline underline-offset-4 transition-all duration-300">View All →</NavLink>
            </div>
          </div>
        </div>
      </div>

    </div>
    
  )
}

export default Home