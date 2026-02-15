import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Check,       
  AlertCircle, 
  Loader2      
} from "lucide-react"; 

const API_BASE_URL = "https://web-production-d5735.up.railway.app";

export default function Footer() {
  // 1. STATE MANAGEMENT
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); 
  const [message, setMessage] = useState("");

  // 2. HANDLE NEWSLETTER SUBMIT
  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch(h(`${API_BASE_URL}/api/newsletter/subscribe/`, {)
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok || res.status === 200) {
        setStatus("success");
        setMessage(data.message || "You're on the list!");
        setEmail(""); 
      } else {
        setStatus("error");
        const errorMsg = data.email ? data.email[0] : "Something went wrong.";
        setMessage(errorMsg);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Connection failed. Try again.");
    }
  };

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
            Nourishing our community with compassion and dignity since 2020.
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
            <li className="hover:text-(--primary)"><Link to="/donate">Donate Today</Link></li>
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

          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "success" || status === "loading"}
              className="flex-1 px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-(--secondary) disabled:bg-gray-100"
            />
            <button
              type="submit"
              disabled={status === "success" || status === "loading"}
              className={`
                px-4 
                py-2 
                rounded-md 
                text-white 
                text-sm 
                font-semibold 
                flex items-center justify-center gap-2
                transition-all
                ${status === "success" 
                  ? "bg-green-500 hover:bg-green-600" 
                  : "bg-(--secondary) hover:bg-opacity-90 hover:border hover:border-(--secondary) hover:bg-(--white) hover:text-(--secondary)"
                }
              `}
            >
              {status === "loading" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : status === "success" ? (
                <Check className="h-4 w-4" />
              ) : (
                "Subscribe"
              )}
            </button>
          </form>

          {/* Status Message Area */}
          {message && (
            <p className={`mt-2 text-xs flex items-center gap-1 ${status === "error" ? "text-red-500" : "text-green-600"}`}>
              {status === "error" && <AlertCircle className="h-3 w-3" />}
              {message}
            </p>
          )}
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