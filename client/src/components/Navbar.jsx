import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo/NourishLaredoLogo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-center font-(--font-secondary)">
      {/* Inner constrained container */}
      <div className="flex items-center justify-between w-full max-w-7xl sm:px-8">
        
        {/* Logo */}
        <div className="pt-4 relative">
          <Link to="/">
            <img
              src={logo}
              alt="Nourish Laredo Logo"
              className="h-32 object-contain rounded-xl shadow-lg"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div
          style={{ fontFamily: "Quicksand" }}
          className="hidden md:flex items-center gap-6 text-(--secondary) text-xl mt-6 pt-8"
        >
          <Link to="/" className="hover:text-(--primary)">Home</Link>
          <Link to="/about" className="hover:text-(--primary)">About</Link>
          <Link to="/programs" className="hover:text-(--primary)">Programs</Link>
          <Link to="/getinvolved" className="hover:text-(--primary)">Get Involved</Link>
          <Link to="/events" className="hover:text-(--primary)">Events</Link>
          <Link to="/partners" className="hover:text-(--primary)">Partners</Link>
          <Link to="/contact" className="hover:text-(--primary)">Contact</Link>

          {/* Donate Button */}
          <Link
            to="/donate"
            className="
              flex
              items-center
              justify-center
              h-9
              px-4
              gap-2
              shrink-0
              rounded-md
              bg-(--primary)
              text-white
              font-semibold
              transition
              duration-200
              hover:bg-white
              hover:text-(--primary)
              border
              border-(--primary)
            "
            style={{ fontFamily: "Quicksand" }}
          >
            Donate
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-(--primary) text-3xl p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden absolute top-36 left-0 right-0 bg-white shadow-lg z-50"
          style={{ fontFamily: "Quicksand" }}
        >
          <div className="flex flex-col gap-4 p-6 text-(--secondary) text-lg">
            <Link to="/" className="hover:text-(--primary)" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className="hover:text-(--primary)" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/programs" className="hover:text-(--primary)" onClick={() => setIsMenuOpen(false)}>Programs</Link>
            <Link to="/getinvolved" className="hover:text-(--primary)" onClick={() => setIsMenuOpen(false)}>Get Involved</Link>
            <Link to="/events" className="hover:text-(--primary)" onClick={() => setIsMenuOpen(false)}>Events</Link>
            <Link to="/partners" className="hover:text-(--primary)" onClick={() => setIsMenuOpen(false)}>Partners</Link>
            <Link to="/contact" className="hover:text-(--primary)" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            
            {/* Mobile Donate Button */}
            <Link
              to="/donate"
              className="
                flex
                items-center
                justify-center
                h-10
                px-4
                rounded-md
                bg-(--primary)
                text-white
                font-semibold
                hover:bg-white
                hover:text-(--primary)
                border
                border-(--primary)
              "
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}