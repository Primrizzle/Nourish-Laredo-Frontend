export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 flex justify-center">
      
      {/* Inner constrained container */}
      <div className="flex items-center justify-between w-full max-w-[1199px] h-16 px-6 sm:px-8">
        
        {/* Logo / Brand */}
        <div className="text-xl font-bold text-[--primary]">
          Nourish Laredo
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-[--color-text]">
          <a href="/" className="hover:text-[--primary]">Home</a>
          <a href="/about" className="hover:text-[--primary]">About</a>
          <a href="/programs" className="hover:text-[--primary]">Programs</a>
          <a href="/events" className="hover:text-[--primary]">Events</a>
          <a href="/partners" className="hover:text-[--primary]">Partners</a>
          <a
            href="/donate"
            className="hover:text-[--primary] font-semibold"
          >
            Donate
          </a>
        </div>

        {/* Mobile Hamburger Button (placeholder) */}
        <button className="md:hidden text-[--primary] text-3xl">
          ☰
        </button>

      </div>
    </nav>
  );
}
