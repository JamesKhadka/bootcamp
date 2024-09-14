import React from 'react'
import { Link } from 'react-router-dom';


const Layout = ({ children }) => {
  return (

    <div className="min-h-screen bg-pink-300">

      {/* Navigation Bar */}
      <nav className="bg-pink-400 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-white">
            Antu Homes
          </div>
          <ul className="flex space-x-6 text-white">
            <li><Link to="/" className="hover:text-teal-400 font-bold">Home</Link></li>
            <li><Link to="about" className="hover:text-teal-400 font-bold">About</Link></li>
            <li><Link to="/services" className="hover:text-teal-400 font-bold">Services</Link></li>
            <li><Link to="/contact" className="hover:text-teal-400 font-bold">Contact</Link></li>
            <li><Link to="/product" className="hover:text-teal-400 font-bold">Products</Link></li>
          </ul>
        </div>
      </nav>
      {children}

    </div>
  )
}

export default Layout
