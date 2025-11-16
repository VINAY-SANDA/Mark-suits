
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Vlogo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 w-full px-4 md:px-20 py-4 font-display text-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-b border-white/10"
      style={{ WebkitBackdropFilter: "blur(8px)" }}
    >
      <div className="flex items-center justify-between">
        <div className="text-lg md:text-xl font-bold tracking-wide select-none flex flex-row ">
         <Link to="/">
        <img src={logo} alt="Logo" className=" inline-block align-middle mr-2 h-15 w-15"/>
         
         </Link>
          
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6 text-base">
          <Link to="/" className="hover:text-amber-500 transition">Home</Link>
          <Link to="/about" className="hover:text-amber-500 transition">About</Link>
          <Link to="/projects" className="hover:text-amber-500 transition">Projects</Link>
          <Link to="/resume" className="hover:text-amber-500 transition">Resume</Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-3xl cursor-pointer focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-black bg-opacity-80 rounded-lg shadow-lg py-4 px-6 flex flex-col gap-4 text-base animate-fade-in">
          <Link to="/" className="hover:text-amber-500 transition" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-amber-500 transition" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/projects" className="hover:text-amber-500 transition" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/resume" className="hover:text-amber-500 transition" onClick={() => setMenuOpen(false)}>Resume</Link>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease;
        }
      `}</style>
    </nav>
  )
}

export default Navbar