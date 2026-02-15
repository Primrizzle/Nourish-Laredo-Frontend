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
  // --- Form Logic ---
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

    console.log("Submitting contact form to backend...");

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ loading: false, submitted: true, error: null });
        setFormData({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
      } else {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
      }
    } catch (err) {
      console.error("Form Submission Error:", err);
      setStatus({ 
        loading: false, 
        submitted: false, 
        error: "Oops! We couldn't send your message. Please try again." 
      });
    }
  };

  return (
    <div className="w-full">

      {/* ===================== */}
      {/* Hero Section */}
      {/* ===================== */}
      <section className="relative flex items-center justify-center h-[60vh] min-h-[420px] w-full overflow-hidden">
        <img
          src={GroupPhoto}
          alt="Nourish Laredo volunteers"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "50% 45%" }}
        />
        <div className="absolute inset-0 bg-(--secondary)/70" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
          <h1 className="mb-4 text-4xl font-semibold md:text-5xl lg:text-6xl" style={{ fontFamily: "Poppins" }}>
            Let’s Connect
          </h1>
          <p className="text-lg md:text-xl text-white/90" style={{ fontFamily: "Quicksand" }}>
            We’d love to hear from you! Together, we can nourish our community.
          </p>
        </div>
      </section>

      {/* ===================== */}
      {/* Contact Section */}
      {/* ===================== */}
      <section className="w-full bg-[#FAF7F2] py-24">
        <div className="mx-auto max-w-[1199px] px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">

            {/* Contact Form Container */}
            <div className="lg:col-span-2 rounded-xl bg-white p-8 shadow-sm">
              {status.submitted ? (
                /* SUCCESS VIEW */
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                  <h2 className="text-3xl font-bold text-(--black) mb-2" style={{ fontFamily: "Poppins" }}>
                    Message Sent!
                  </h2>
                  <p className="text-(--black)/70 mb-8" style={{ fontFamily: "Quicksand" }}>
                    Thank you for reaching out. We have received your message and will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setStatus({ ...status, submitted: false })}
                    className="bg-(--secondary) text-white px-8 py-3 rounded-md font-semibold transition hover:opacity-90"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* FORM VIEW */
                <>
                  <h2 className="mb-2 text-2xl font-semibold text-(--black)" style={{ fontFamily: "Poppins" }}>
                    Send Us a Message
                  </h2>
                  <p className="mb-6 text-(--black)/70" style={{ fontFamily: "Quicksand" }}>
                    Fill out the form below and we’ll get back to you as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="text-sm font-medium text-(--black)">Full Name *</label>
                      <input
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        placeholder="Your name"
                        className="mt-1 w-full rounded-md bg-[#FAF7F2] px-4 py-3 outline-none focus:ring-1 focus:ring-(--secondary)"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <label className="text-sm font-medium text-(--black)">Email Address *</label>
                        <input
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          type="email"
                          placeholder="your@email.com"
                          className="mt-1 w-full rounded-md bg-[#FAF7F2] px-4 py-3 outline-none focus:ring-1 focus:ring-(--secondary)"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-(--black)">Phone Number</label>
                        <input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          type="tel"
                          placeholder="(956) 555-0000"
                          className="mt-1 w-full rounded-md bg-[#FAF7F2] px-4 py-3 outline-none focus:ring-1 focus:ring-(--secondary)"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-(--black)">Subject *</label>
                      <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-md bg-[#FAF7F2] px-4 py-3 outline-none"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Volunteering">Volunteering</option>
                        <option value="Donations">Donations</option>
                        <option value="Partnerships">Partnerships</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-(--black)">Message *</label>
                      <textarea
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Tell us how we can help..."
                        className="mt-1 w-full rounded-md bg-[#FAF7F2] px-4 py-3 outline-none focus:ring-1 focus:ring-(--secondary)"
                      />
                    </div>

                    {status.error && <p className="text-red-500 text-sm font-medium">{status.error}</p>}

                    <button
                      disabled={status.loading}
                      type="submit"
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-[#E85C45] px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:bg-gray-400"
                      style={{ fontFamily: "Quicksand" }}
                    >
                      <Send className="h-4 w-4" />
                      {status.loading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="mb-4 font-semibold text-(--black)" style={{ fontFamily: "Poppins" }}>
                  Contact Information
                </h3>
                <ul className="space-y-4 text-sm text-gray-600" style={{ fontFamily: "Quicksand" }}>
                  <li className="flex gap-3">
                    <MapPin className="h-4 w-4 text-(--secondary) mt-0.5" />
                    <span>702 Corpus Christi St.<br />Laredo, TX 78040</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-(--secondary)" />
                    hello@nourishlaredo.org
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="mb-4 font-semibold text-(--black)">Follow Us</h3>
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--secondary)">
                    <FaFacebookF className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* Map Section */}
      {/* ===================== */}
      <section className="w-full bg-white py-24">
        <div className="mx-auto max-w-[1199px] px-6 sm:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-(--black)" style={{ fontFamily: "Poppins" }}>
              Find Us in Downtown Laredo
            </h2>
            <p className="mt-4 text-(--black)/70" style={{ fontFamily: "Quicksand" }}>
              Visit our office or stop by during one of our events
            </p>
          </div>

          <div className="relative overflow-hidden rounded-xl shadow-sm">
            <img
              src={Navigating}
              alt="Navigating to Nourish Laredo"
              className="h-[360px] w-full object-cover"
              style={{ objectPosition: "50% 50%" }}
            />
            <div className="absolute inset-x-0 bottom-6 flex justify-center">
              <div className="flex items-center gap-2 rounded-full bg-white px-5 py-3 shadow-md text-sm font-medium text-(--black) border border-(--secondary)" style={{ fontFamily: "Quicksand" }}>
                <MapPin className="h-4 w-4 text-(--secondary)"/>
                702 Corpus Christi St., Laredo, TX 78040
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-(--secondary) px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:border hover:border-(--secondary) hover:text-(--secondary)"
              style={{ fontFamily: "Quicksand" }}
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* Sponsors Section */}
      {/* ===================== */}
      <section className="w-full bg-[#FAF7F2] py-24">
        <div className="mx-auto max-w-[1199px] px-6 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-(--black) mb-16" style={{ fontFamily: "Poppins" }}>
            Meet the Sponsors Behind Nourish Laredo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-(--secondary) text-xl font-semibold text-white">A</div>
              <h3 className="text-lg font-semibold text-(--black)">Angie Tellez</h3>
              <p className="mt-1 text-sm text-(--black)/60">Sponsor & Event Coordinator</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-(--primary) text-xl font-semibold text-white">M</div>
              <h3 className="text-lg font-semibold text-(--black)">Marisela Canamar</h3>
              <p className="mt-1 text-sm text-(--black)/60">Sponsor & Event Coordinator</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* FAQ Section */}
      {/* ===================== */}
      <section className="w-full bg-white py-24">
        <div className="mx-auto max-w-[900px] px-6 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-(--black)" style={{ fontFamily: "Poppins" }}>
            Frequently Asked Questions
          </h2>
          <div className="mt-16 space-y-6 text-left">
            {[
              { q: "How can I volunteer?", a: "Visit our Get Involved page to sign up or reach out to our Volunteer Coordinator." },
              { q: "Do you accept food donations?", a: "Yes! We accept non-perishable food items and fresh produce from local partners." },
              { q: "How can local businesses partner with you?", a: "Contact our Sponsorships team to discuss collaboration opportunities and sponsorships." }
            ].map((faq, i) => (
              <div key={i} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h4 className="font-semibold text-(--secondary)" style={{ fontFamily: "Poppins" }}>{faq.q}</h4>
                <p className="mt-2 text-sm text-gray-600" style={{ fontFamily: "Quicksand" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== */}
      {/* Final Call to Action */}
      {/* ==================== */}
      <section className="relative w-full bg-[#EEF6F4] py-24 overflow-hidden">
        <div className="mx-auto max-w-[1199px] px-6 sm:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-(--black)" style={{ fontFamily: "Poppins" }}>
            Together, We Can Make Laredo Stronger
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-(--black)/70" style={{ fontFamily: "Quicksand" }}>
            Whether you’re interested in volunteering, partnering with us, or supporting our mission, we’d love to help you get involved.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/getinvolved#volunteer-form" className="inline-flex items-center justify-center rounded-md bg-(--secondary) px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:border hover:border-(--secondary) hover:text-(--secondary)">
              Volunteer With Us
            </Link>
            <Link to="/events#upcoming-events" className="inline-flex items-center justify-center rounded-md bg-[#F26B4F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:border hover:border-(--primary) hover:text-(--primary)">
              See Upcoming Events
            </Link>
          </div>
        </div>
        <div className="absolute left-10 bottom-10 h-24 w-24 rounded-full bg-[#F7E8C8]" />
        <div className="absolute right-16 top-12 h-20 w-20 rounded-full bg-[#D6ECE8]" />
      </section>

    </div>
  );
}