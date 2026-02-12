import { useState, useEffect } from "react";
import { 
  Users, 
  Heart,
  Coffee, 
  Building2,
  Handshake,
  Quote,
  Calendar, 
  Star,
  Church,
  X 
} from "lucide-react";

import { Link } from "react-router-dom";

import CakePartner from "../../assets/partners/local-partners-lo-mat-ad.jpg";
import StoneStorefront from "../../assets/partners/stone-storefront.jpg";
import SunsetGroup from "../../assets/partners/sunset-group-pic.jpg";
import DynamicPartnersGrid from "../../components/partners/DynamicPartnersGrid.jsx";
import BruniChurch from "../../assets/partners/bruni-umc-ii.jpg"
import TellezLaw from "../../assets/partners/joey-tellez-law.jpg"
import PhilanthropyBabe from "../../assets/partners/philanthropy-again.jpg"
import GlobalPC from "../../assets/partners/global-pcnet-I.avif"
import PartnerInquiry from "../../components/partners/PartnerInquiry";

export default function Partners() {
  // 1. STATE FOR MODAL VISIBILITY
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Optional: Prevent scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  return (
    <div className="relative">
      
      {/* ======================================= */}
      {/* MODAL POPUP LOGIC                       */}
      {/* ======================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Dark Backdrop (Click to close) */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Content Container */}
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-200">
            
            {/* Close Button (X) */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/80 p-2 hover:bg-gray-100 transition"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>

            {/* The Form Component */}
            <PartnerInquiry />
          </div>
        </div>
      )}

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
          src={CakePartner}
          alt="Nourish Laredo community partners"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "50% 40%" }}
        />

        {/* Teal Overlay */}
        <div className="absolute inset-0 bg-(--secondary)/80" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
          <h1
            className="mb-4 text-4xl font-semibold md:text-5xl"
            style={{ fontFamily: "Poppins" }}
          >
            Our Partners
          </h1>

          <p
            className="mx-auto mb-8 max-w-2xl text-white/90"
            style={{ fontFamily: "Quicksand" }}
          >
            We couldn’t do it without the businesses and organizations that stand
            with us.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            
            {/* TOP MODAL TRIGGER BUTTON */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="
                rounded-md
                bg-[#F26B4F]
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-white
                hover:text-(--primary)
                cursor-pointer
              "
              style={{ fontFamily: "Quicksand" }}
            >
              Become a Partner
            </button>

            <Link
              to="/contact"
              className="
                rounded-md
                bg-white
                px-6
                py-3
                text-sm
                font-semibold
                text-(--black)
                transition
                hover:bg-(--tertiary)
              "
              style={{ fontFamily: "Quicksand" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      <section>
        {/* Hero */}
        <DynamicPartnersGrid />
      </section>
    
      {/* ======================================= */}
      {/* PARTNER SPOTLIGHTS SECTION      */}
      {/* ======================================= */}
      <section className="w-full bg-white py-24">
        <div className="mx-auto max-w-[1199px] px-6 sm:px-8 space-y-20">

          {/* ===================== */}
          {/* SPOTLIGHT 1: Bruni United Methodist Church */}
          {/* ===================== */}
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF6F4]">
                <Users className="h-5 w-5 text-(--secondary)" />
              </div>

              <h3
                className="mb-4 text-2xl sm:text-3xl font-semibold text-(--black)"
                style={{ fontFamily: "Poppins" }}
              >
                Faith in Action: <br />
                Bruni United Methodist Church
              </h3>

              <p
                className="mb-6 text-(--black)/70 leading-relaxed"
                style={{ fontFamily: "Quicksand" }}
              >
                Bruni United Methodist Church has been a cornerstone of compassion 
                in our network. By opening their doors for community gatherings 
                and organizing dedicated volunteer teams, they transform faith into 
                tangible support for Laredo families. Their consistent contribution 
                helps ensure that our outreach programs have a safe and welcoming 
                home.
              </p>
            </div>

            <div className="relative">
              <img
                src={BruniChurch} 
                alt="Bruni United Methodist Church"
                className="w-full rounded-xl object-cover shadow-md"
              />
            </div>
          </div>

          {/* ===================== */}
          {/* SPOTLIGHT 2: Tellez Law */}
          {/* ===================== */}
          <div className="rounded-xl bg-[#FAF7F2] p-8 md:p-12">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

              <div>
                <img
                  src={TellezLaw}
                  alt="Tellez Law Team"
                  className="w-full rounded-xl object-cover shadow-md"
                />
              </div>

              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FBE3A3]">
                  <Handshake className="h-5 w-5 text-[#F7A600]" />
                </div>

                <h3
                  className="mb-4 text-2xl sm:text-3xl font-semibold text-(--black)"
                  style={{ fontFamily: "Poppins" }}
                >
                  Advocating for Laredo: <br />
                  Tellez Law
                </h3>

                <p
                  className="mb-6 text-(--black)/70 leading-relaxed"
                  style={{ fontFamily: "Quicksand" }}
                >
                  Committed to justice both inside and outside the courtroom, 
                  Tellez Law is a powerful advocate for our mission. Their 
                  generous financial sponsorship allows us to expand our emergency 
                  relief funds, proving that legal leadership goes hand-in-hand 
                  with community care. They are true partners in building a safer, 
                  stronger Laredo.
                </p>
              </div>
            </div>
          </div>

          {/* ===================== */}
          {/* SPOTLIGHT 3: Susana Valencia */}
          {/* ===================== */}
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF6F4]">
                <Heart className="h-5 w-5 text-(--secondary)" />
              </div>

              <h3
                className="mb-4 text-2xl sm:text-3xl font-semibold text-(--black)"
                style={{ fontFamily: "Poppins" }}
              >
                A Heart for Service: <br />
                Susana Valencia
              </h3>

              <p
                className="mb-6 text-(--black)/70 leading-relaxed"
                style={{ fontFamily: "Quicksand" }}
              >
                Philanthropy starts with individuals who care deeply, and Susana 
                Valencia exemplifies this spirit. As a dedicated community leader, 
                her personal support and advocacy have opened doors for new 
                initiatives and inspired others to give back. Susana’s commitment 
                reminds us that one person’s passion can ignite a movement of kindness.
              </p>
            </div>

            <div className="relative">
              <img
                src={PhilanthropyBabe} 
                alt="Susana Valencia"
                className="w-full rounded-xl object-cover shadow-md"
              />
            </div>
          </div>

          {/* ===================== */}
          {/* SPOTLIGHT 4: Global PC Net */}
          {/* ===================== */}
          <div className="rounded-xl bg-[#FAF7F2] p-8 md:p-12">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

              <div>
                <img
                  src={GlobalPC}
                  alt="Global PC Net"
                  className="w-full rounded-xl object-cover shadow-md"
                />
              </div>

              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FBE3A3]">
                  <Building2 className="h-5 w-5 text-[#F7A600]" />
                </div>

                <h3
                  className="mb-4 text-2xl sm:text-3xl font-semibold text-(--black)"
                  style={{ fontFamily: "Poppins" }}
                >
                  Connecting Our Community: <br />
                  Global PCNet
                </h3>

                <p
                  className="mb-6 text-(--black)/70 leading-relaxed"
                  style={{ fontFamily: "Quicksand" }}
                >
                  In an increasingly digital world, Global PC Net helps keep our 
                  operations running smoothly. Their support goes beyond business; 
                  it is an investment in the efficiency and reach of Nourish Laredo. 
                  Thanks to their partnership, we can focus less on logistics and 
                  more on what matters most—serving our neighbors.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="w-full bg-[#F7C96A] py-24">
        <div className="mx-auto max-w-[1199px] px-6 sm:px-8 text-center">

          <h2
            className="mb-3 text-3xl sm:text-4xl font-semibold text-(--black)"
            style={{ fontFamily: "Poppins" }}
          >
            Together, We Make an Impact
          </h2>

          <p
            className="mb-16 text-(--black)/70"
            style={{ fontFamily: "Quicksand" }}
          >
            Our partnerships create real, measurable change in the Laredo community.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-6 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF6F4]">
                  <Handshake className="h-6 w-6 text-(--secondary)" />
                </div>
              </div>
              <p className="text-3xl font-bold text-(--secondary)" style={{ fontFamily: "Caveat Brush" }}>12</p>
              <p className="mt-2 font-semibold text-(--black)" style={{ fontFamily: "Poppins" }}>Local Partners</p>
              <p className="mt-1 text-sm text-(--black)/60" style={{ fontFamily: "Quicksand" }}>Community businesses supporting our mission</p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-6 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF6F4]">
                  <Heart className="h-6 w-6 text-(--secondary)" />
                </div>
              </div>
              <p className="text-3xl font-bold text-(--secondary)" style={{ fontFamily: "Caveat Brush" }}>25,000</p>
              <p className="mt-2 font-semibold text-(--black)" style={{ fontFamily: "Poppins" }}>Meals Distributed</p>
              <p className="mt-1 text-sm text-(--black)/60" style={{ fontFamily: "Quicksand" }}>Through sponsorships and partnerships</p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-6 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF6F4]">
                  <Calendar className="h-6 w-6 text-(--secondary)" />
                </div>
              </div>
              <p className="text-3xl font-bold text-(--secondary)" style={{ fontFamily: "Caveat Brush" }}>8</p>
              <p className="mt-2 font-semibold text-(--black)" style={{ fontFamily: "Poppins" }}>Annual Events</p>
              <p className="mt-1 text-sm text-(--black)/60" style={{ fontFamily: "Quicksand" }}>Co-hosted with partner organizations</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* Partner Testimonials */}
      {/* ===================== */}
      <section className="w-full bg-white py-24">
        <div className="mx-auto max-w-[900px] px-6 sm:px-8 text-center">

          <h2
            className="mb-12 text-3xl sm:text-4xl font-semibold text-(--black)"
            style={{ fontFamily: "Poppins" }}
          >
            What Our Partners Say
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">

            <div className="rounded-xl border border-(--secondary) p-6 text-left shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF6F4]">
                  <Quote className="h-5 w-5 text-(--secondary)" />
                </div>
                <div>
                  <p className="font-semibold text-(--black)" style={{ fontFamily: "Poppins" }}>Belen Ortiz</p>
                  <p className="text-xs text-(--black)/60" style={{ fontFamily: "Quicksand" }}>Tellez Law</p>
                </div>
              </div>
              <p className="text-sm text-(--black)/70" style={{ fontFamily: "Quicksand" }}>
                “Working with Nourish Laredo has brought our team closer to the
                community. We’re proud to support an organization that truly
                changes lives every single day.”
              </p>
            </div>

            <div className="rounded-xl border border-[#F7C96A] p-6 text-left shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FBE3A3]">
                  <Heart className="h-5 w-5 text-[#F7A600]" />
                </div>
                <div>
                  <p className="font-semibold text-(--black)" style={{ fontFamily: "Poppins" }}>Juan Gutierrez</p>
                  <p className="text-xs text-(--black)/60" style={{ fontFamily: "Quicksand" }}>Global PCNet</p>
                </div>
              </div>
              <p className="text-sm text-(--black)/70" style={{ fontFamily: "Quicksand" }}>
                “We love being part of something that truly changes lives.
                Nourish Laredo’s youth-driven approach inspires us to give back
                even more.”
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="w-full bg-[#E85C45] py-24">
        <div className="mx-auto max-w-[900px] px-6 text-center text-white">
          <div className="mb-6 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
              <Users className="h-7 w-7 text-white" />
            </div>
          </div>
          <h2 className="mb-4 text-3xl sm:text-4xl font-semibold" style={{ fontFamily: "Poppins" }}>
            Join Our Family of Partners
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-white/90" style={{ fontFamily: "Quicksand" }}>
            From local restaurants to community banks, our partners are the
            heartbeat of Nourish Laredo’s success. Join us in feeding families,
            funding events, and shaping a better future for Laredo.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            
            {/* BOTTOM MODAL TRIGGER BUTTON */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="
                rounded-md
                bg-(--tertiary)
                px-6
                py-3
                text-sm
                font-semibold
                text-(--white)
                border
                border-(--tertiary)
                transition
                hover:border
                hover:border-(--tertiary)
                hover:bg-(--white)
                hover:text-(--tertiary)
                cursor-pointer
              "
              style={{ fontFamily: "Quicksand" }}
            >
              Become a Partner
            </button>

            <Link
              to="/donate#donate-form"
              className="
                rounded-md
                bg-(--secondary)
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-white
                hover:border
                hover:border-(--secondary)
                hover:text-(--secondary)
              "
              style={{ fontFamily: "Quicksand" }}
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}