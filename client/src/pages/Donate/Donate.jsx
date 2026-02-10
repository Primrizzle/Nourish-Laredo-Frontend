import {Link} from "react-router-dom";
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

} from "lucide-react";

import DonateHero from "../../assets/donate/donating-food.jpg";
import DonateForm from "../../components/donation/DonateForm.jsx";
import SchoolSupplies from "../../assets/donate/lori-school-supplies.jpg";
import YouthBaggers from "../../assets/donate/youth-volunteers-bagging.jpg";

export default function Donate() {
  return (
  <div>
    <section
      className="
        relative
        flex
        items-center
        justify-center
        h-[70vh]
        min-h-[520px]
        w-full
        overflow-hidden
      "
    >
      {/* Background Image */}
      <img
        src={DonateHero}
        alt="Supporting Nourish Laredo"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "50% 55%" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-(--secondary)/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
        <h1
          className="mb-4 text-4xl font-semibold md:text-5xl lg:text-6xl"
          style={{ fontFamily: "Poppins" }}
        >
          Support Nourish Laredo
        </h1>

        <p
          className="mb-10 text-lg leading-relaxed text-white/90 md:text-xl"
          style={{ fontFamily: "Quicksand" }}
        >
          Every dollar helps put a meal on the table for a Laredo family.
        </p>

        
      </div>
    </section>
    <section className="w-full bg-[#FAF7F2] py-24">
  <div className="mx-auto max-w-[1199px] px-6 sm:px-8 text-center">

    {/* Header */}
    <h2
      className="mb-4 text-3xl sm:text-4xl font-semibold text-(--black)"
      style={{ fontFamily: "Poppins" }}
    >
      Your Generosity Nourishes Our Community
    </h2>

    <p
      className="mx-auto mb-16 max-w-3xl text-(--black)/70 leading-relaxed"
      style={{ fontFamily: "Quicksand" }}
    >
      100% of your contribution funds local meal drives, youth volunteer programs,
      and care boxes for Laredo families. Every dollar you give directly impacts the
      people in our community who need it most.
    </p>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

      {/* Meals Served */}
      <div className="rounded-xl bg-white p-8 shadow-sm">
        <div className="mb-6 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#3BAEA0]">
            <Heart className="h-6 w-6 text-white" />
          </div>
        </div>

        <p
          className="text-3xl font-bold text-[#3BAEA0]"
          style={{ fontFamily: "Caveat Brush" }}
        >
          10,000+
        </p>

        <p
          className="mt-2 text-sm text-(--black)/70"
          style={{ fontFamily: "Quicksand" }}
        >
          Meals Served
        </p>
      </div>

      {/* Active Volunteers */}
      <div className="rounded-xl bg-white p-8 shadow-sm">
        <div className="mb-6 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F7C96A]">
            <Users className="h-6 w-6 text-white" />
          </div>
        </div>

        <p
          className="text-3xl font-bold text-[#F7C96A]"
          style={{ fontFamily: "Caveat Brush" }}
        >
          150
        </p>

        <p
          className="mt-2 text-sm text-(--black)/70"
          style={{ fontFamily: "Quicksand" }}
        >
          Active Volunteers
        </p>
      </div>

      {/* Families Reached */}
      <div className="rounded-xl bg-white p-8 shadow-sm">
        <div className="mb-6 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E75B45]">
            <Home className="h-6 w-6 text-white" />
          </div>
        </div>

        <p
          className="text-3xl font-bold text-[#E75B45]"
          style={{ fontFamily: "Caveat Brush" }}
        >
          500
        </p>

        <p
          className="mt-2 text-sm text-(--black)/70"
          style={{ fontFamily: "Quicksand" }}
        >
          Families Reached
        </p>
      </div>

    </div>
  </div>
</section>
<DonateForm />
<section className="w-full bg-[#FAF7F2] py-24">
  <div className="mx-auto max-w-[1199px] px-6 sm:px-8">

    {/* Header */}
    <div className="mb-12 text-center">
      <h2
        className="mb-3 text-3xl sm:text-4xl font-semibold text-(--black)"
        style={{ fontFamily: "Poppins" }}
      >
        Where Your Money Goes
      </h2>

      <p
        className="mx-auto max-w-2xl text-(--black)/70"
        style={{ fontFamily: "Quicksand" }}
      >
        We believe in complete transparency. Here’s exactly how your donation
        supports our mission.
      </p>
    </div>

    {/* Card */}
    <div className="rounded-xl bg-white p-8 shadow-sm">

      {/* Progress Bar */}
      <div className="mb-8 h-4 w-full overflow-hidden rounded-full bg-gray-200">
        <div className="flex h-full">
          <div className="w-[60%] bg-(--secondary)" />
          <div className="w-[25%] bg-(--tertiary)" />
          <div className="w-[10%] bg-(--primary)" />
          <div className="w-[5%] bg-[#6B7280]" />
        </div>
      </div>

      {/* Breakdown Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

        {/* 60% */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#3BAEA0]/10">
            <Apple className="h-5 w-5 text-[#3BAEA0]" />
          </div>

          <div>
            <p
              className="font-semibold text-[#3BAEA0]"
              style={{ fontFamily: "Poppins" }}
            >
              60%
            </p>
            <p
              className="text-sm text-(--black)/70"
              style={{ fontFamily: "Quicksand" }}
            >
              Meal Ingredients & Packaging
            </p>
          </div>
        </div>

        {/* 25% */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#F7C96A]/20">
            <Truck className="h-5 w-5 text-[#F7C96A]" />
          </div>

          <div>
            <p
              className="font-semibold text-[#F7C96A]"
              style={{ fontFamily: "Poppins" }}
            >
              25%
            </p>
            <p
              className="text-sm text-(--black)/70"
              style={{ fontFamily: "Quicksand" }}
            >
              Community Outreach & Delivery
            </p>
          </div>
        </div>

        {/* 10% */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#E75B45]/10">
            <GraduationCap className="h-5 w-5 text-[#E75B45]" />
          </div>

          <div>
            <p
              className="font-semibold text-[#E75B45]"
              style={{ fontFamily: "Poppins" }}
            >
              10%
            </p>
            <p
              className="text-sm text-(--black)/70"
              style={{ fontFamily: "Quicksand" }}
            >
              Youth Volunteer Training
            </p>
          </div>
        </div>

        {/* 5% */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-200">
            <Building2 className="h-5 w-5 text-gray-600" />
          </div>

          <div>
            <p
              className="font-semibold text-gray-600"
              style={{ fontFamily: "Poppins" }}
            >
              5%
            </p>
            <p
              className="text-sm text-(--black)/70"
              style={{ fontFamily: "Quicksand" }}
            >
              Administrative Support
            </p>
          </div>
        </div>

      </div>
    </div>

    {/* Transparency Note */}
    <div className="mt-8 rounded-lg bg-[#EAF6F4] px-6 py-4 text-center">
      <p
        className="text-sm text-(--black)/70"
        style={{ fontFamily: "Quicksand" }}
      >
        <strong>100%</strong> of donations go directly to our programs. Our
        administrative costs are covered by grants and partnerships.
      </p>
    </div>

  </div>
</section>
<section className="w-full bg-white py-24">
  <div className="mx-auto max-w-[1199px] px-6 sm:px-8">

    {/* Header */}
    <div className="mb-16 text-center">
      <h2
        className="mb-4 text-3xl sm:text-4xl font-semibold text-(--black)"
        style={{ fontFamily: "Poppins" }}
      >
        Stories of Impact
      </h2>

      <p
        className="mx-auto max-w-2xl text-(--black)/70"
        style={{ fontFamily: "Quicksand" }}
      >
        Real voices from our community showing how your support makes a difference.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

      {/* Teacher / Resident Card */}
      <div className="overflow-hidden rounded-xl bg-[#FAF7F2] shadow-sm">
        {/* Image */}
        <img
          src={SchoolSupplies}
          alt="Students receiving school supplies"
          className="h-56 w-full object-cover"
          style={{ objectPosition: "50% 55%" }}
        />

        {/* Content */}
        <div className="p-8">
          <p
            className="mb-6 text-lg leading-relaxed text-(--black)"
            style={{ fontFamily: "Quicksand" }}
          >
            “As a teacher, seeing my students receive school supplies through
            Nourish Laredo was incredibly meaningful. It removed a huge barrier
            for families and allowed our kids to walk into class prepared and
            confident.”
          </p>

          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3BAEA0] text-white font-semibold">
              T
            </div>

            <div style={{ fontFamily: "Quicksand"}}>
              <p className="text-sm font-semibold text-(--black)">
                Local Educator
              </p>
              <p className="text-xs text-(--black)/60">
                Laredo, TX
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Youth Volunteer Card */}
      <div className="overflow-hidden rounded-xl bg-[#FAF7F2] shadow-sm">
        {/* Image */}
        <img
          src={YouthBaggers}
          alt="Youth volunteers packing food bags"
          className="h-56 w-full object-cover"
          style={{ objectPosition: "50% 50%" }}
        />

        {/* Content */}
        <div className="p-8">
          <p
            className="mb-6 text-lg leading-relaxed text-(--black)"
            style={{ fontFamily: "Quicksand" }}
          >
            “Being part of Nourish Laredo taught me leadership skills I’ll use for
            the rest of my life. I’m proud to help my community and be part of
            something bigger than myself.”
          </p>

          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7C96A] text-white font-semibold">
              C
            </div>

            <div style={{ fontFamily: "Quicksand"}}>
              <p className="text-sm font-semibold text-(--black)">
                Carlos, 16
              </p>
              <p className="text-xs text-(--black)/60">
                Youth Volunteer
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
<section className="w-full bg-[#FAF7F2] py-24">
  <div className="mx-auto max-w-[1199px] px-6 sm:px-8 text-center">

    {/* Header */}
    <h2
      className="mb-4 text-3xl sm:text-4xl font-semibold text-(--black)"
      style={{ fontFamily: "Poppins" }}
    >
      Partner With Us
    </h2>

    <p
      className="mx-auto mb-12 max-w-2xl text-(--black)/70"
      style={{ fontFamily: "Quicksand" }}
    >
      Is your business interested in making a difference? We work with local
      companies to create sponsorship packages that align with your values and
      support our mission.
    </p>

    {/* Card */}
    <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-sm">

      <p
        className="mb-8 text-sm text-(--black)/70"
        style={{ fontFamily: "Quicksand" }}
      >
        Corporate partnerships help us expand our reach and serve more families
        in need.
      </p>

      {/* Benefits */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {[
          "Logo Placement",
          "Event Sponsorship",
          "Team Volunteering",
          "Matching Gifts",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center justify-center gap-2 rounded-md bg-[#FAF7F2] px-4 py-3 text-sm text-(--black)"
            style={{ fontFamily: "Quicksand" }}
          >
            <CheckCircle className="h-4 w-4 text-(--secondary)" />
            {item}
          </div>
        ))}
      </div>
    </div>

    {/* CTA */}
    <div className="mt-10">
      <Link
        to="/partners"
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
          hover:opacity-90
        "
        style={{ fontFamily: "Quicksand" }}
      >
        Become a Partner
      </Link>
    </div>
  </div>
</section>
<section className="w-full bg-[#FDEEE6] py-24">
  <div className="mx-auto max-w-[1199px] px-6 sm:px-8 text-center relative">

    {/* Decorative Circles */}
    <div className="absolute left-6 top-10 h-24 w-24 rounded-full bg-[#F7C96A]/30 hidden sm:block" />
    <div className="absolute right-10 bottom-10 h-28 w-28 rounded-full bg-[#3BAEA0]/30 hidden sm:block" />

    {/* Content */}
    <h2
      className="mb-4 text-3xl sm:text-4xl font-semibold text-(--black)"
      style={{ fontFamily: "Poppins" }}
    >
      Together, We Can End Hunger in Laredo
    </h2>

    <p
      className="mx-auto mb-10 max-w-2xl text-(--black)/70"
      style={{ fontFamily: "Quicksand" }}
    >
      No matter how you help, you’re part of something bigger. Join our mission
      today.
    </p>

    {/* Buttons */}
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">

      <Link
        to="/events"
        className="
          inline-flex
          items-center
          gap-2
          rounded-md
          bg-[#F26B4F]
          px-6
          py-3
          text-sm
          font-semibold
          text-white
          transition
          hover:bg-(--white)
          hover:text-(--primary)
          hover:border
          hover:border-(--primary)
        "
        style={{ fontFamily: "Quicksand" }}
      >
        <Calendar className="h-4 w-4" />
        Upcoming Events
      </Link>

      <Link
        to="/getinvolved#volunteer-form"
        className="
          inline-flex
          items-center
          gap-2
          rounded-md
          border
          border-(--secondary)
          bg-white
          px-6
          py-3
          text-sm
          font-semibold
          text-(--secondary)
          transition
          hover:bg-(--secondary)
          hover:text-white
          hover:border
          hover:border-(--white)
        "
        style={{ fontFamily: "Quicksand" }}
      >
        <Users className="h-4 w-4" />
        Volunteer Instead
      </Link>
    </div>
  </div>
</section>

  </div>);
}
