import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div className='w-full h-auto bg-[#261200]'>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 lg:gap-16 py-10 px-8 md:px-10 lg:px-16'>
                <div>
                    <h2 className='text-xl md:text-2xl text-[#DFDDD6] font-michroma italic'>/ FAST LINKS</h2>
                    <div className='text-[#DFDDD6] mt-4 font-semibold'>
                        <ul className='flex flex-wrap gap-4 text-base md:text-lg'>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/newarrivals">New Arrivals</NavLink></li>
                            <li><NavLink to="/collections">Collections</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className='text-xl md:text-2xl text-[#DFDDD6] font-michroma italic'>/ CONTACT US</h2>
                    <div className='text-[#DFDDD6] mt-4 font-semibold flex flex-col gap-2 text-base md:text-lg'>
                        <p>Email: azure90@gmail.com</p>
                        <p>Phone: +123456789</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-lg md:text-xl text-[#DFDDD6] font-michroma italic whitespace-nowrap'>/ SOCIAL MEDIA</h2>
                    <div className='text-[#DFDDD6] mt-4 font-semibold flex flex-row gap-3 text-sm md:text-base flex-wrap'>
                        <NavLink to="https://www.instagram.com/">Instagram</NavLink>
                        <NavLink to="https://www.facebook.com/">Facebook</NavLink>
                        <NavLink to="https://www.twitter.com/">Twitter</NavLink>
                    </div>
                </div>
            </div>
            <div className='w-full flex items-center justify-center py-3 bg-[#200D01]'>
                <h2 className='text-sm md:text-lg text-[#4C3A32] font-michroma'>AZURE © 2026</h2>
            </div>
        </div>
    )
}

export default Footer