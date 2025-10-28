import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { NavLink } from "react-router";
import { FaShoppingBag } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const navItems = [
  { path: "/", label: "Furniture" },
  { path: "/shop", label: "Shop" },
  { path: "/contact", label: "Contact" },
  { path: "/about", label: "About" },
];

const NavItems = (toggleMenu) => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
      {navItems.map((item, index) => (
        <li key={index} onClick={toggleMenu}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "text-orange-500 font-bold" : "hover:text-orange-500"
            }>
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  
  // when scroll apply bg color
useEffect (()=> {
  const handleScroll =()=> {
    if (window.scrollY>50){
      setIsScrolled(true)
  } else {
    setIsScrolled(false)
  }
}
window.addEventListener('scroll' , handleScroll);
return ()=>{
  window.addEventListener('scroll', handleScroll);
}
},[]);


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out  ${isScrolled ? "bg-white shadow-md" : "bg-transparent text-white "}`}>
      <nav className="max-w-screen-2xl container mx-auto flex justify-between items-center py-6 px-4">
        {/* logo */}
        <Link to="/" className="font-bold">
         Akther
        </Link>

        {/* Hamburger Menu for mobile */}
        <div
          onClick={toggleMenu}
          className="md:hidden text-xl cursor-pointer hover:text-orange-500">
          {isMenuOpen ? null : <FaBars />}
        </div>

        {/* Desktop menu items */}

        <div className="hidden md:flex">
          <NavItems />
        </div>

        {/* Mobile Menu Items */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex items-center justify-center space-y-8 text-white transition-transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
          <div className="absolute top-4 right-4 text-xl cursor-pointer" onClick={toggleMenu}>
            <FaTimes />
          </div>
          <NavItems toggleMenu={toggleMenu} />
        </div>

        {/* Cart icon */}
        <div className="hidden md:block cursor-pointer relative">
          <FaShoppingBag className="text-xl" />
          <sup className="absolute top-0 -right-3  bg-orange-500 text-amber-50 w-5 h-5 rounded-full flex items-center justify-center text-xs">
            0
          </sup>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;