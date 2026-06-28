import React from 'react'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <nav className='flex justify-center items-center w-full bg-[#FFFFFF] shadow-sm h-[7vh] font-montserrat text-sm font-semibold'>
        <div className='flex justify-around items-center w-full'>
            <div className='w-1/3 py-4 px-8'>
                <ul className='flex justify-start items-center gap-4'>
                    <li>
                        <NavLink to="/newarrivals" 
                            className={({ isActive }) =>
                                `transition-colors duration-300 hover:text-[#D15A5C] ${
                                    isActive ? "text-[#D15A5C]" : "text-black"
                                }`
                            }>NEW ARRIVALS</NavLink>
                    </li>
                    <li>
                        <NavLink to="/collections" 
                            className={({ isActive }) =>
                                `transition-colors duration-300 hover:text-[#D15A5C] ${
                                    isActive ? "text-[#D15A5C]" : "text-black"
                                }`
                            }>COLLECTION</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" 
                            className={({ isActive }) =>
                                `transition-colors duration-300 hover:text-[#D15A5C] ${
                                    isActive ? "text-[#D15A5C]" : "text-black"
                                }`
                            }>ABOUT</NavLink>
                    </li>
                </ul>
            </div>
            <div className='w-1/2 text-center py-4 px-8 font-cinzel text-3xl'>
                <h2 className='font-medium'><NavLink to="/">NOOR</NavLink></h2>
            </div>
            <div className='w-1/3 py-4 px-8'>
                <ul className='flex gap-2 justify-end'>
                    <li>
                        <NavLink to="/login" 
                            className={({ isActive }) =>
                                `transition-colors duration-300 hover:text-[#D15A5C] ${
                                    isActive ? "text-[#D15A5C]" : "text-black"
                                }`
                            }>LOG IN</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup" 
                            className={({ isActive }) =>
                                `transition-colors duration-300 hover:text-[#D15A5C] ${
                                    isActive ? "text-[#D15A5C]" : "text-black"
                                }`
                            }>SIGN UP</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart"  
                            className={({ isActive }) =>
                                `transition-colors duration-300 hover:text-[#D15A5C] ${
                                    isActive ? "text-[#D15A5C]" : "text-black"}`
                            }><FontAwesomeIcon icon={faCartShopping} />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar