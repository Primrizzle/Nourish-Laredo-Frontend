import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Heart, 
  Users, 
  Home,
  Apple,
  Truck,
  GraduationCap,
  Building2,
  CheckCircle,
  Calendar,
  X
} from "lucide-react";

import DonateForm from "../../components/donation/DonateForm.jsx";
import SchoolSupplies from "../../assets/donate/lori-school-supplies.jpg";
import YouthBaggers from "../../assets/donate/youth-volunteers-bagging.jpg";
import DonationFamily from "../../assets/donate/Donate_fam.jpg";
import PartnerInquiry from "../../components/partners/PartnerInquiry";

export default function Donate() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  return (
    <div className="relative w-full">
      
      {/* Partner Inquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/80 p-2 hover:bg-gray-100 transition"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
            <PartnerInquiry />
          </div>
        </div>
      )}

      {/* Hero Section - Fixed Head Cropping & Text Position */}
      <section className="relative flex items-end justify-center h-[70vh] min-h-[520px] w-full overflow-hidden pb-24">
        <img
          src={DonationFamily}
          alt="Supporting Nourish Laredo"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "50% 20%" }} 
        />
        <div className="absolute inset-0 bg-(--secondary)/70" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
          <h1 className="mb-4 text-4xl font-semibold md:text-5xl lg:text-6xl" style={{ fontFamily: "Poppins" }}>
            Support Nourish Laredo
          </h1>
          <p className="text-lg leading-relaxed text-white/90 md:text-xl" style={{ fontFamily: "Quicksand" }}>
            Every dollar helps put a meal on the table for a Laredo family.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="w-full bg-[#FAF7F2] py-24">
        <div className="mx-auto max-w-[1199px] px-6 sm:px-8 text-center">
          <h2 className="mb-4 text-3xl sm:text-4xl font-semibold text-(--black)" style={{ fontFamily: "Poppins" }}>
            Your Generosity Nourishes Our Community
          </h2>
          <p className="mx-auto mb-16 max-w-3xl text-(--black)/70 leading-relaxed" style={{ fontFamily: "Quicksand" }}>
            100% of your contribution funds local meal drives, youth volunteer programs, and care boxes.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-6 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#3BAEA0]">
                  <Heart className="h-6 w-6 text-white" />
                </div>
              </div>
              <p className="text-3xl font-bold text-[#3BAEA0]" style={{ fontFamily: "Caveat Brush" }}>10,000+</p>
              <p className="mt-2 text-sm text-(--black)/70" style={{ fontFamily: "Quicksand" }}>Meals Served</p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-6 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F7C96A]">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
              <p className="text-3xl font-bold text-[#F7C96A]" style={{ fontFamily: "Caveat Brush" }}>150</p>
              <p className="mt-2 text-sm text-(--black)/70" style={{ fontFamily: "Quicksand" }}>Active Volunteers</p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-6 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E75B45]">
                  <Home className="h-6 w-6 text-white" />
                </div>
              </div>
              <p className="text-3xl font-bold text-[#E75B45]" style={{ fontFamily: "Caveat Brush" }}>500</p>
              <p className="mt-2 text-sm text-(--black)/70" style={{ fontFamily: "Quicksand" }}>Families Reached</p>
            </div>
          </div>
        </div>
      </section>

      <DonateForm />

      {/* Transparency Section */}
      <section className="w-full bg-[#FAF7F2] py-24">
        <div className="mx-auto max-w-[1199px] px-6 sm:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl sm:text-4xl font-semibold text-(--black)" style={{ fontFamily: "Poppins" }}>Where Your Money Goes</h2>
            <p className="mx-auto max-w-2xl text-(--black)/70" style={{ fontFamily: "Quicksand" }}>We believe in complete transparency.</p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-sm">
            <div className="mb-8 h-4 w-full overflow-hidden rounded-full bg-gray-200">
              <div className="flex h-full">
                <div className="w-[60%] bg-(--secondary)" /><div className="w-[25%] bg-(--tertiary)" /><div className="w-[10%] bg-(--primary)" /><div className="w-[5%] bg-[#6B7280]" />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#3BAEA0]/10"><Apple className="h-5 w-5 text-[#3BAEA0]" /></div>
                <div><p className="font-semibold text-[#3BAEA0]" style={{ fontFamily: "Poppins" }}>60%</p><p className="text-sm text-(--black)/70" style={{ fontFamily: "Quicksand" }}>Meal Ingredients & Packaging</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#F7C96A]/20"><Truck className="h-5 w-5 text-[#F7C96A]" /></div>
                <div><p className="font-semibold text-[#F7C96A]" style={{ fontFamily: "Poppins" }}>25%</p><p className="text-sm text-(--black)/70" style={{ fontFamily: "Quicksand" }}>Outreach & Delivery</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#E75B45]/10"><GraduationCap className="h-5 w-5 text-[#E75B45]" /></div>
                <div><p className="font-semibold text-[#E75B45]" style={{ fontFamily: "Poppins" }}>10%</p><p className="text-sm text-(--black)/70" style={{ fontFamily: "Quicksand" }}>Youth Training</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-200"><Building2 className="h-5 w-5 text-gray-600" /></div>
                <div><p className="font-semibold text-gray-600" style={{ fontFamily: "Poppins" }}>5%</p><p className="text-sm text-(--black)/70" style={{ fontFamily: "Quicksand" }}>Administrative Support</p></div>
              </div>
            </div>
          </div>
          <div className="mt-8 rounded-lg bg-[#EAF6F4] px-6 py-4 text-center">
            <p className="text-sm text-(--black)/70" style={{ fontFamily: "Quicksand" }}><strong>100%</strong> of donations go directly to our programs.</p>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="w-full bg-white py-24">
        <div className="mx-auto max-w-[1199px] px-6 sm:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl sm:text-4xl font-semibold text-(--black)" style={{ fontFamily: "Poppins" }}>Stories of Impact</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl bg-[#FAF7F2] shadow-sm">
              <img src={SchoolSupplies} alt="Impact" className="h-56 w-full object-cover" style={{ objectPosition: "50% 55%" }} />
              <div className="p-8">
                <p className="mb-6 text-lg text-(--black)" style={{ fontFamily: "Quicksand" }}>“It removed a huge barrier for families...”</p>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3BAEA0] text-white">T</div>
                  <div><p className="text-sm font-semibold text-(--black)">Local Educator</p></div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl bg-[#FAF7F2] shadow-sm">
              <img src={YouthBaggers} alt="Impact" className="h-56 w-full object-cover" />
              <div className="p-8">
                <p className="mb-6 text-lg text-(--black)" style={{ fontFamily: "Quicksand" }}>“Being part of Nourish Laredo taught me leadership...”</p>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7C96A] text-white">C</div>
                  <div><p className="text-sm font-semibold text-(--black)">Carlos, 16</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner with Us Section */}
      <section className="w-full bg-[#FAF7F2] py-24">
        <div className="mx-auto max-w-[1199px] px-6 sm:px-8 text-center">
          <h2 className="mb-4 text-3xl sm:text-4xl font-semibold text-(--black)" style={{ fontFamily: "Poppins" }}>Partner With Us</h2>
          <div className="mx-auto mt-8 max-w-3xl rounded-xl bg-white p-8 shadow-sm">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {["Logo Placement", "Event Sponsorship", "Team Volunteering", "Matching Gifts"].map((item) => (
                <div key={item} className="flex items-center justify-center gap-2 rounded-md bg-[#FAF7F2] px-4 py-3 text-sm text-(--black)" style={{ fontFamily: "Quicksand" }}>
                  <CheckCircle className="h-4 w-4 text-(--secondary)" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center rounded-md bg-(--secondary) px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90 cursor-pointer"
              style={{ fontFamily: "Quicksand" }}
            >
              Become a Partner
            </button>
          </div>
        </div>
      </section>

      {/* Footer CTA with Fixed Decorative Circles */}
      <section className="relative w-full bg-[#FDEEE6] py-24 overflow-hidden">
        <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-[#F7C96A]/30 blur" />
        <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-[#3BAEA0]/30 hidden sm:block blur" />
        
        <div className="relative z-10 mx-auto max-w-[1199px] px-6 sm:px-8 text-center">
          <h2 className="mb-4 text-3xl sm:text-4xl font-semibold text-(--black)" style={{ fontFamily: "Poppins" }}>
            Together, We Can End Hunger in Laredo
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-(--black)/70" style={{ fontFamily: "Quicksand" }}>
            No matter how you help, you’re part of something bigger.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/events" className="inline-flex items-center gap-2 rounded-md bg-[#F26B4F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-(--primary) hover:border hover:border-(--primary)">
              <Calendar className="h-4 w-4" /> Upcoming Events
            </Link>
            <Link to="/getinvolved#volunteer-form" className="inline-flex items-center gap-2 rounded-md border border-(--secondary) bg-white px-6 py-3 text-sm font-semibold text-(--secondary) transition hover:bg-(--secondary) hover:text-white">
              <Users className="h-4 w-4" /> Volunteer Instead
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}