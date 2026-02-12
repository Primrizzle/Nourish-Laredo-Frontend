import {Link} from "react-router-dom"; 

import GroupPhoto from "../../assets/contact/group-photo-restaurant.jpg";
import Navigating from "../../assets/contact/Navigating.jpg";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="w-full">

      {/* ===================== */}
      {/* Hero Section */}
      {/* ===================== */}
      <section
        className="
          relative
          flex
          items-center
          justify-center
          h-[60vh]
          min-h-[420px]
          w-full
          overflow-hidden
        "
      >
        {/* Background Image */}
        <img
          src={GroupPhoto}
          alt="Nourish Laredo volunteers"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "50% 45%" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-(--secondary)/70" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
          <h1
            className="mb-4 text-4xl font-semibold md:text-5xl lg:text-6xl"
            style={{ fontFamily: "Poppins" }}
          >
            Let’s Connect
          </h1>

          <p
            className="text-lg md:text-xl text-white/90"
            style={{ fontFamily: "Quicksand" }}
          >
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

            {/* Contact Form */}
            <div className="lg:col-span-2 rounded-xl bg-white p-8 shadow-sm">
              <h2
                className="mb-2 text-2xl font-semibold text-(--black)"
                style={{ fontFamily: "Poppins" }}
              >
                Send Us a Message
              </h2>

              <p
                className="mb-6 text-(--black)/70"
                style={{ fontFamily: "Quicksand" }}
              >
                Fill out the form below and we’ll get back to you as soon as possible.
              </p>

              <form className="space-y-5">
                {/* Name */}
                <div>
                  <label className="text-sm font-medium text-(--black)">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-1 w-full rounded-md bg-[#FAF7F2] px-4 py-3 outline-none"
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-(--black)">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="mt-1 w-full rounded-md bg-[#FAF7F2] px-4 py-3 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-(--black)">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="(956) 555-0000"
                      className="mt-1 w-full rounded-md bg-[#FAF7F2] px-4 py-3 outline-none"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="text-sm font-medium text-(--black)">
                    Subject *
                  </label>
                  <select className="mt-1 w-full rounded-md bg-[#FAF7F2] px-4 py-3 outline-none">
                    <option>Select a subject</option>
                    <option>Volunteering</option>
                    <option>Donations</option>
                    <option>Partnerships</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm font-medium text-(--black)">
                    Message *
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Tell us how we can help..."
                    className="mt-1 w-full rounded-md bg-[#FAF7F2] px-4 py-3 outline-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="button"
                  className="
                    mt-4
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-md
                    bg-[#E85C45]
                    px-6
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:opacity-90
                  "
                  style={{ fontFamily: "Quicksand" }}
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="mb-4 font-semibold text-(--black)"
                    style={{ fontFamily: "Poppins"}}>
                  Contact Information
                </h3>

                <ul className="space-y-4 text-sm text-gray-600"
                    style={{ fontFamily: "Quicksand" }}>
                  <li className="flex gap-3">
                    <MapPin className="h-4 w-4 text-(--secondary) mt-0.5" />
                    <span>
                      702 Corpus Christi St.<br />
                      Laredo, TX 78040
                    </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-(--secondary)" />
                    hello@nourishlaredo.org
                  </li>

                  
                </ul>
              </div>

              {/* Social */}
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="mb-4 font-semibold text-(--black)">
                  Follow Us
                </h3>

                <div className="flex gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--secondary)">
                    <FaFacebookF className="h-5 w-5 text-(--white)" />
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* Contact Section */}
      {/* ===================== */}
      <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-[1199px] px-6 sm:px-8">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2
            className="text-3xl sm:text-4xl font-semibold text-(--black)"
            style={{ fontFamily: "Poppins" }}
          >
            Find Us in Downtown Laredo
          </h2>

          <p
            className="mt-4 text-(--black)/70"
            style={{ fontFamily: "Quicksand" }}
          >
            Visit our office or stop by during one of our events
          </p>
        </div>

        {/* Image Card */}
        <div className="relative overflow-hidden rounded-xl shadow-sm">
          <img
            src={Navigating}
            alt="Navigating to Nourish Laredo"
            className="h-[360px] w-full object-cover"
            style={{ objectPosition: "50% 50%" }}
          />

          {/* Address Pill */}
          <div className="
            absolute
            inset-x-0
            bottom-6
            flex
            justify-center
          ">
            <div className="
              flex
              items-center
              gap-2
              rounded-full
              bg-white
              px-5
              py-3
              shadow-md
              text-sm
              font-medium
              text-(--black)
              border
              border-(--secondary)
            "
              style={{ fontFamily: "Quicksand" }}>
              <MapPin className="h-4 w-4 text-(--secondary)"/>
              702 Corpus Christi St., Laredo, TX 78040
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=1234+San+Agustin+Ave+Laredo+TX"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              rounded-md
              bg-(--secondary)
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-(--white)
              hover:border
              hover:border-(--secondary)
              hover:text-(--secondary)
            "
            style={{ fontFamily: "Quicksand" }}
          >
            Get Directions
          </a>
        </div>

      </div>
    </section>

    {/* ===================== */}
    {/* Contact Section */}
    {/* ===================== */}
    <section className="w-full bg-[#FAF7F2] py-24">
      <div className="mx-auto max-w-[1199px] px-6 sm:px-8">

        {/* Header */}
        <div className="mb-16 text-center">
          <h2
            className="text-3xl sm:text-4xl font-semibold text-(--black)"
            style={{ fontFamily: "Poppins" }}
          >
            Meet the Sponsors Behind Nourish Laredo
          </h2>

          <p
            className="mt-4 text-(--black)/70"
            style={{ fontFamily: "Quicksand" }}
          >
            Our sponsors help make our work possible by organizing and supporting the events that strengthen our community.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">

          {/* Angie Tellez */}
          <div className="bg-white rounded-xl p-8 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-(--secondary)">
              <span
                className="text-xl font-semibold text-white"
                style={{ fontFamily: "Poppins" }}
              >
                A
              </span>
            </div>

            <h3
              className="text-lg font-semibold text-(--black)"
              style={{ fontFamily: "Poppins" }}
            >
              Angie Tellez
            </h3>

            <p
              className="mt-1 text-sm text-(--black)/60"
              style={{ fontFamily: "Quicksand" }}
            >
              Sponsor & Event Coordinator
            </p>

            <button
              className="
                mt-6
                inline-flex
                items-center
                justify-center
                rounded-md
                border
                border-(--secondary)
                px-4
                py-2
                text-sm
                font-semibold
                text-(--secondary)
                transition
                hover:bg-(--secondary)
                hover:text-white
              "
              style={{ fontFamily: "Quicksand" }}
            >
              Message Angie
            </button>
          </div>

          {/* Mari Canamar */}
          <div className="bg-white rounded-xl p-8 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-(--primary)">
              <span
                className="text-xl font-semibold text-white"
                style={{ fontFamily: "Poppins" }}
              >
                M
              </span>
            </div>

            <h3
              className="text-lg font-semibold text-(--black)"
              style={{ fontFamily: "Poppins" }}
            >
              Marisela Canamar
            </h3>

            <p
              className="mt-1 text-sm text-(--black)/60"
              style={{ fontFamily: "Quicksand" }}
            >
              Sponsor & Event Coordinator
            </p>

            <button
              className="
                mt-6
                inline-flex
                items-center
                justify-center
                rounded-md
                border
                border-(--primary)
                px-4
                py-2
                text-sm
                font-semibold
                text-(--primary)
                transition
                hover:bg-(--primary)
                hover:text-white
              "
              style={{ fontFamily: "Quicksand" }}
            >
              Message Marisela
            </button>
          </div>

        </div>
      </div>
    </section>
    {/* ===================== */}
    {/*      FAQ Section      */}
    {/* ===================== */}
    {/* FAQ Section */}
<section className="w-full bg-white py-24">
  <div className="mx-auto max-w-[900px] px-6 sm:px-8 text-center">

    {/* Header */}
    <h2
      className="text-3xl sm:text-4xl font-semibold text-(--black)"
      style={{ fontFamily: "Poppins" }}
    >
      Frequently Asked Questions
    </h2>

    <p
      className="mt-4 text-(--black)/70"
      style={{ fontFamily: "Quicksand" }}
    >
      Quick answers to common questions
    </p>

    {/* FAQ Cards */}
    <div className="mt-16 space-y-6 text-left">

      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h4 className="font-semibold text-(--secondary)"
            style={{ fontFamily: "Poppins" }}>
          How can I volunteer?
        </h4>
        <p className="mt-2 text-sm text-gray-600"
           style={{ fontFamily: "Quicksand" }}>
          Visit our Get Involved page to sign up or reach out to our Volunteer Coordinator.
        </p>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h4 className="font-semibold text-(--secondary)"
            style={{ fontFamily: "Poppins" }}>
          Do you accept food donations?
        </h4>
        <p className="mt-2 text-sm text-gray-600"
           style={{ fontFamily: "Quicksand" }}>
          Yes! We accept non-perishable food items and fresh produce from local partners.
        </p>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h4 className="font-semibold text-(--secondary)"
            style={{ fontFamily: "Poppins" }}>
          How can local businesses partner with you?
        </h4>
        <p className="mt-2 text-sm text-gray-600"
            style={{ fontFamily: "Quicksand" }}>
          Contact our Sponsorships team to discuss collaboration opportunities and sponsorships.
        </p>
      </div>
    </div>

    {/* Read All FAQs Button */}
    <div className="mt-12">
      <button
        className="
          rounded-md
          border
          border-(--secondary)
          px-6
          py-3
          text-sm
          font-semibold
          text-(--secondary)
          transition
          hover:bg-(--secondary)
          hover:text-white
        "
        style={{ fontFamily: "Quicksand" }}
      >
        Read All FAQs
      </button>
    </div>
  </div>
</section>
{/* ==================== */}
{/* Final Call to Action */}
{/* ==================== */}
<section className="relative w-full bg-[#EEF6F4] py-24 overflow-hidden">
  <div className="mx-auto max-w-[1199px] px-6 sm:px-8 text-center relative z-10">

    <h2
      className="text-3xl sm:text-4xl font-semibold text-(--black)"
      style={{ fontFamily: "Poppins" }}
    >
      Together, We Can Make Laredo Stronger
    </h2>

    <p
      className="mt-4 max-w-2xl mx-auto text-(--black)/70"
      style={{ fontFamily: "Quicksand" }}
    >
      Whether you’re interested in volunteering, partnering with us, or supporting our mission, we’d love to help you get involved.
    </p>

    {/* CTA Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="/getinvolved#volunteer-form"
          className="
            inline-flex
            items-center
            justify-center
            rounded-md
            bg-(--secondary)
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-(--white)
            hover:border
            hover:border-(--secondary)
            hover:text-(--secondary)
          "
          style={{ fontFamily: "Quicksand" }}
        >
          Volunteer With Us
        </Link>

        <Link
          to="/events#upcoming-events"
          className="
            inline-flex
            items-center
            justify-center
            rounded-md
            bg-[#F26B4F]
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-(--white)
            hover:border
            hover:border-(--primary)
            hover:text-(--primary)
            
          "
          style={{ fontFamily: "Quicksand" }}
        >
          See Upcoming Events
        </Link>
      </div>

  </div>

  {/* Decorative Circles */}
  <div className="absolute left-10 bottom-10 h-24 w-24 rounded-full bg-[#F7E8C8]" />
  <div className="absolute right-16 top-12 h-20 w-20 rounded-full bg-[#D6ECE8]" />
</section>

    </div>
  );
}
