import React, { useState } from "react";
import { Link } from "react-router-dom"; 

import GroupPhoto from "../../assets/contact/group-photo-restaurant.jpg";
import Navigating from "../../assets/contact/Navigating.jpg";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";

import { FaFacebookF } from "react-icons/fa";

const API_BASE_URL = "https://web-production-d5735.up.railway.app";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, submitted: false, error: null });

    console.log("--- STARTING FETCH ---");
    
    try {
      // We use a trailing slash because Django is strict about it
      const response = await fetch(`${API_BASE_URL}/api/contact/`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      console.log("RESPONSE RECEIVED:", response.status);

      if (response.ok) {
        setStatus({ loading: false, submitted: true, error: null });
        setFormData({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
      } else {
        const errorData = await response.json();
        console.error("SERVER ERROR:", errorData);
        setStatus({ 
            loading: false, 
            submitted: false, 
            error: `Error ${response.status}: ${JSON.stringify(errorData)}` 
        });
      }
    } catch (err) {
      console.error("NETWORK ERROR:", err);
      setStatus({ 
        loading: false, 
        submitted: false, 
        error: "Network error. Check console or try Incognito mode." 
      });
    }
  };

  return (
    <div className="w-full">
      <section className="relative flex items-center justify-center h-[60vh] min-h-[420px] w-full overflow-hidden">
        <img src={GroupPhoto} alt="Nourish Laredo" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: "50% 45%" }} />
        <div className="absolute inset-0 bg-(--secondary)/70" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
          <h1 className="mb-4 text-4xl font-semibold md:text-5xl lg:text-6xl" style={{ fontFamily: "Poppins" }}>Let’s Connect</h1>
          <p className="text-lg md:text-xl text-white/90" style={{ fontFamily: "Quicksand" }}>We’d love to hear from you!</p>
        </div>
      </section>

      <section className="w-full bg-[#FAF7F2] py-24">
        <div className="mx-auto max-w-[1199px] px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-xl bg-white p-8 shadow-sm">
              {status.submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                  <h2 className="text-3xl font-bold text-black mb-2">Message Sent!</h2>
                  <p className="text-gray-600 mb-8">Thank you for reaching out.</p>
                  <button onClick={() => setStatus({ ...status, submitted: false })} className="bg-(--secondary) text-white px-8 py-3 rounded-md">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-2xl font-semibold text-black mb-6">Send Us a Message</h2>
                  <div>
                    <label className="text-sm font-medium text-black">Full Name *</label>
                    <input required name="name" value={formData.name} onChange={handleChange} type="text" className="mt-1 w-full rounded-md bg-[#FAF7F2] px-4 py-3 outline-none" />
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium text-black">Email *</label>
                      <input required name="email" value={formData.email} onChange={handleChange} type="email" className="mt-1 w-full rounded-md bg-[#FAF7F2] px-4 py-3 outline-none" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-black">Phone</label>
                      <input name="phone" value={formData.phone} onChange={handleChange} type="tel" className="mt-1 w-full rounded-md bg-[#FAF7F2] px-4 py-3 outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-black">Subject *</label>
                    <select name="subject" value={formData.subject} onChange={handleChange} className="mt-1 w-full rounded-md bg-[#FAF7F2] px-4 py-3 outline-none">
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Volunteering">Volunteering</option>
                      <option value="Donations">Donations</option>
                      <option value="Partnerships">Partnerships</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-black">Message *</label>
                    <textarea required name="message" value={formData.message} onChange={handleChange} rows="4" className="mt-1 w-full rounded-md bg-[#FAF7F2] px-4 py-3 outline-none" />
                  </div>
                  {status.error && <p className="text-red-500 text-sm">{status.error}</p>}
                  <button disabled={status.loading} type="submit" className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-[#E85C45] px-6 py-3 font-semibold text-white">
                    <Send className="h-4 w-4" />
                    {status.loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
            
            <div className="space-y-6">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="mb-4 font-semibold text-black">Contact Info</h3>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="flex gap-3"><MapPin className="h-4 w-4 text-(--secondary)" /> 702 Corpus Christi St, Laredo, TX</li>
                  <li className="flex gap-3"><Mail className="h-4 w-4 text-(--secondary)" /> hello@nourishlaredo.org</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map, Sponsors, and FAQ sections (same as previous) */}
      <section className="w-full bg-white py-24 text-center">
        <h2 className="text-3xl font-semibold mb-12">Find Us</h2>
        <div className="max-w-[1199px] mx-auto px-6"><img src={Navigating} className="rounded-xl h-[360px] w-full object-cover" /></div>
      </section>
    </div>
  );
}