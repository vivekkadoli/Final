import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-primary font-bold text-xl">
          SWAMIKRUPA TRADERS
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6`}
        >
          <Link
            to="/"
            className="block md:inline-block text-secondary-foreground hover:text-primary py-2 md:py-0"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block md:inline-block text-secondary-foreground hover:text-primary py-2 md:py-0"
          >
            About Us
          </Link>
          <Link
            to="/products"
            className="block md:inline-block text-secondary-foreground hover:text-primary py-2 md:py-0"
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="block md:inline-block text-secondary-foreground hover:text-primary py-2 md:py-0"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;