import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `transition-colors duration-300 hover:text-[#D15A5C] ${isActive ? 'text-[#D15A5C]' : 'text-black'}`

  return (
    <nav className='w-full bg-white shadow-sm font-montserrat text-sm font-semibold relative z-50'>
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(-10px); }
        }
        .menu-open  { animation: slideDown 0.25s ease forwards; }
        .icon-open  { transition: transform 0.3s ease; transform: rotate(90deg); }
        .icon-close { transition: transform 0.3s ease; transform: rotate(0deg); }
      `}</style>

      <div className='flex justify-between items-center h-[7vh] px-6 md:px-0 md:justify-around'>

        <div className='hidden md:flex w-1/3 py-4 px-4 lg:px-8'>
          <ul className='flex justify-start items-center gap-3 lg:gap-4 whitespace-nowrap'>
            <li><NavLink to="/newarrivals" className={linkClass}>NEW ARRIVALS</NavLink></li>
            <li><NavLink to="/collections" className={linkClass}>COLLECTION</NavLink></li>
            <li><NavLink to="/about" className={linkClass}>ABOUT</NavLink></li>
          </ul>
        </div>

        <div className='w-full md:w-1/3 text-center py-4 px-4 font-cinzel text-2xl md:text-3xl'>
          <h2 className='font-medium'><NavLink to="/">AZURE</NavLink></h2>
        </div>

        <div className='hidden md:flex w-1/3 py-4 px-4 lg:px-8'>
          <ul className='flex gap-3 lg:gap-4 justify-end w-full whitespace-nowrap'>
            <li><NavLink to="/login" className={linkClass}>LOG IN</NavLink></li>
            <li><NavLink to="/signup" className={linkClass}>SIGN UP</NavLink></li>
            <li>
              <NavLink to="/cart" className={linkClass}>
                <FontAwesomeIcon icon={faCartShopping} />
              </NavLink>
            </li>
          </ul>
        </div>

        <button
          className='md:hidden text-black text-xl px-2 cursor-pointer w-8 h-8 flex items-center justify-center'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle menu'
        >
          <span className={menuOpen ? 'icon-open' : 'icon-close'}>
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className='menu-open md:hidden bg-white border-t border-gray-100 shadow-lg px-6 py-4 flex flex-col gap-4 text-sm font-semibold'>
          <NavLink to="/newarrivals" className={linkClass} onClick={() => setMenuOpen(false)}>NEW ARRIVALS</NavLink>
          <NavLink to="/collections" className={linkClass} onClick={() => setMenuOpen(false)}>COLLECTION</NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setMenuOpen(false)}>ABOUT</NavLink>
          <hr className='border-gray-100' />
          <NavLink to="/login" className={linkClass} onClick={() => setMenuOpen(false)}>LOG IN</NavLink>
          <NavLink to="/signup" className={linkClass} onClick={() => setMenuOpen(false)}>SIGN UP</NavLink>
          <NavLink to="/cart" className={linkClass} onClick={() => setMenuOpen(false)}>
            CART <FontAwesomeIcon icon={faCartShopping} className='ml-1' />
          </NavLink>
        </div>
      )}
    </nav>
  )
}

export default Navbar