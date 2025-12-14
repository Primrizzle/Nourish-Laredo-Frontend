import logo from "../assets/logo/NourishLaredoLogo.png";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center font-(--font-secondary)">
      
      {/* Inner constrained container */}
      <div className="flex items-center justify-between w-full max-w-7xl sm:px-8">
        <div className="pt-4 relative">
          <img src={logo} alt="Nourish Laredo Logo" className="h-32 object-contain rounded-xl shadow-lg  " />
         </div>
        
        {/*<div className="text-4xl font-bold text-(--primary)" style={{fontFamily: "Caveat Brush"}}>
          Nourish Laredo
        </div>*/}

        {/* Desktop Navigation */}
        <div style={{ fontFamily: "Quicksand" }} className="hidden md:flex items-center gap-6 text-(--secondary) text-xl mt-6 pt-8">
          <a href="/" className="hover:text-(--primary)">Home</a>
          <a href="/about" className="hover:text-(--primary)">About</a>
          <a href="/programs" className="hover:text-(--primary)">Programs</a>
          <a href="/getinvolved" className="hover:text-(--primary)">Get Involved</a>
          <a href="/events" className="hover:text-(--primary)">Events</a>
          <a href="/partners" className="hover:text-(--primary)">Partners</a>
          <a href="/contact" className="hover:text-(--primary)">Contact</a>
          <a href="/donate" className="
            flex
            items-center justify-center
            h-9
            px-4        /* padding-left + padding-right = 16px */
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
          " style={{ fontFamily: "Quicksand" }} >  
          Donate
            </a>
        </div>
        <button className="md:hidden text-(--primary) text-3xl">
          ☰
        </button>

      </div>
    </nav>
  );
}
