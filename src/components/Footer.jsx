import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div className='w-full h-auto bg-[#261200]'>
            <div className='w-full h-[25vh] grid grid-cols-3 gap-40 py-12 px-30 '>
                <div>
                    <h2 className='text-2xl text-[#DFDDD6] font-michroma italic'>/ FAST LINKS</h2>
                    <div className='text-[#DFDDD6] mt-5 font-semibold'>
                        <ul className='flex gap-6 text-lg'>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/newarrivals">New Arrivals</NavLink></li>
                            <li><NavLink to="/collections">Collections</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl text-[#DFDDD6] font-michroma italic'>/ CONTACT US</h2>
                    <div className='text-[#DFDDD6] mt-5 font-semibold flex gap-6 text-lg'>
                        <p>Email: azure90@gmail.com</p>
                        <p>Phone: +123456789</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl text-[#DFDDD6] font-michroma italic'>/ SOCAIL MEDIA</h2>
                    <div className='text-[#DFDDD6] mt-5 font-semibold flex gap-6 text-lg'>
                        <NavLink to="https://www.instagram.com/">Instagram</NavLink>
                        <NavLink to="https://www.facebook.com/">Facebook</NavLink>
                        <NavLink to="https://www.twitter.com/">Twitter</NavLink>
                    </div>
                </div>
            </div>
            <div className='w-full flex items-center justify-center py-2 bg-[#200D01]'>
                <h2 className='text-lg text-[#4C3A32] font-michroma'>AZURE © 2026</h2>
            </div>
        </div>
    )
}

export default Footer