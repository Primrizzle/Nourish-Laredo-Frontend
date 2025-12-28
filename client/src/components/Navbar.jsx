import { Link } from "react-router-dom";
import logo from "../assets/logo/NourishLaredoLogo.png";

export default function Navbar() {
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

        {/* Mobile Menu Button (placeholder) */}
        <button className="md:hidden text-(--primary) text-3xl">
          ☰
        </button>
      </div>
    </nav>
  );
}
