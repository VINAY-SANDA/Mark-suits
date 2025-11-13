import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
 <nav
      className="fixed top-0 left-0 right-0 z-50 w-full
                 px-6 md:px-20 py-5
                 font-display text-white
                 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10
                 border-b border-white/10"
      style={{ WebkitBackdropFilter: "blur(8px)" }} // cross-browser for backdrop
    >
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold tracking-wide select-none">
          VINAY SANDA
        </div>

        <div className="hidden md:flex space-x-8  text-m">
          <Link to="/" className="hover:text-amber-500 transition">Home</Link>
          <Link to="/about" className="hover:text-amber-500 transition">About</Link>
          <Link to="/projects" className="hover:text-amber-500 transition">Projects</Link>
          <Link to="/resume" className="hover:text-amber-500 transition">Resume</Link>
        </div>

        <div className="md:hidden text-3xl cursor-pointer">☰</div>
      </div>
    </nav>
  )
}

export default Navbar