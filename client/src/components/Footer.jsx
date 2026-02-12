import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react"; 

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-(--secondary)" style={{fontFamily: "Quicksand"}}>
      {/* Top Footer */}
      <div className="w-full max-w-[1199px] mx-auto px-6 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo + Mission */}
        <div className="flex flex-col gap-4">
          <div className="text-3xl font-semibold text-(--primary)" style={{fontFamily: "Caveat Brush"}}>
            Nourish Laredo
          </div>

          <p className="text-sm text-gray-600 leading-relaxed">
            Nourishing our community with compassion and dignity since 2018.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-(--secondary) mb-4">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            <li className="hover:text-(--primary)"><Link to="/about">About Us</Link></li>
            <li className="hover:text-(--primary)"><Link to="/programs">Our Programs</Link></li>
            <li className="hover:text-(--primary)"><Link to="/events">Upcoming Events</Link></li>
            <li className="hover:text-(--primary)"><Link to="/getinvolved">Volunteer</Link></li>
            <li className="hover:text-(--primary)"><Link to="/partners">Our Partners</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-(--secondary) mb-4">
            Contact Us
          </h4>

          <ul className="flex flex-col gap-3 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-(--secondary) mt-0.5" />
              <span>
                702 Corpus Christi St<br />
                Laredo, TX 78040
              </span>
            </li>

            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-(--secondary)" />
              hello@nourishlaredo.org
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-(--secondary) mb-4">
            Newsletter
          </h4>

          <p className="text-sm text-gray-600 mb-4">
            Stay updated on our latest news and events.
          </p>

          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-(--secondary)"
            />
            <button
              type="submit"
              className="
                px-4 
                py-2 
                rounded-md 
                bg-(--secondary) 
                text-white 
                text-sm 
                font-semibold 
                hover:bg-opacity-90 
                hover:border 
                hover:border-(--secondary) 
                hover:bg-(--white)
                hover:text-(--secondary)"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-(--secondary)">
        <div className="w-full max-w-[1199px] mx-auto px-6 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <span>© 2026 Nourish Laredo. All rights reserved. Website donated by Ashley Primrose.</span>

          <div className="flex gap-4 text-(--secondary)">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">◎</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
