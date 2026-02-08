import { Link, useLocation } from "react-router-dom";
import {useEffect} from "react";

import {
  Wheat,
  Heart,
  Users,
  DollarSign, 
  Handshake,
  HandHeart,
  Share2,
} from "lucide-react";

import HonorSociety from "../../assets/getinvolved/honor-society-delivery.jpg";
import BackseatBags from "../../assets/getinvolved/bags-in-the-backseat.png";
import TruckLoading from "../../assets/getinvolved/loading-the-truck.jpg";
import HelpingHands from "../../assets/getinvolved/helping-hands.jpg";
import VolunteerForm from "../../components/getinvolved/VolunteerForm.jsx";

export default function GetInvolved() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const el = document.getElementById(hash.replace("#", ""));
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (<div>
    {/* Hero Section */}
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
          src={HonorSociety}
          alt="Honor Society students delivering food to families"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "50% 60%" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-(--secondary)/70" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
          <h1
            className="mb-4 text-4xl font-semibold md:text-5xl lg:text-6xl"
            style={{ fontFamily: "Poppins" }}
          >
            Join the Mission
          </h1>

          <p
            className="text-lg leading-relaxed md:text-xl text-white/90"
            style={{ fontFamily: "Quicksand" }}
          >
            Every helping hand brings hope to a family in need.
          </p>
        </div>
      </section>
  {/* Why Get Involved Section */}
<section className="w-full bg-[#FAF7F2] py-24">
  <div className="mx-auto max-w-[1199px] px-6 sm:px-8">

    {/* Section Header */}
    <div className="mb-16 text-center">
      <h2
        className="text-3xl sm:text-4xl font-semibold text-(--black)"
        style={{ fontFamily: "Poppins" }}
      >
        Why Get Involved?
      </h2>

      <p
        className="mt-4 text-(--black)/70"
        style={{ fontFamily: "Quicksand" }}
      >
        Your participation creates real change in Laredo
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

      {/* Card 1 */}
      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="relative">
          <img
            src={BackseatBags}
            alt="Food donations in vehicle"
            className="h-56 w-full object-cover"
            style={{ objectPosition: "50% 60%" }}
          />

          <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-(--secondary)">
            <Heart className="h-6 w-6 text-white" />
          </div>
        </div>

        <div className="p-6">
          <h3
            className="mb-2 text-xl font-semibold text-(--black)"
            style={{ fontFamily: "Poppins" }}
          >
            Make Real Impact
          </h3>

          <p
            className="text-(--black)/70"
            style={{ fontFamily: "Quicksand" }}
          >
            Every hour you volunteer or dollar you donate directly helps families
            in need right here in Laredo.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="relative">
          <img
            src={TruckLoading}
            alt="Volunteers loading supplies"
            className="h-56 w-full object-cover"
            style={{ objectPosition: "50% 55%" }}
          />

          <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-(--secondary)">
            <Users className="h-6 w-6 text-white" />
          </div>
        </div>

        <div className="p-6">
          <h3
            className="mb-2 text-xl font-semibold text-(--black)"
            style={{ fontFamily: "Poppins" }}
          >
            Build Community
          </h3>

          <p
            className="text-(--black)/70"
            style={{ fontFamily: "Quicksand" }}
          >
            Connect with passionate people who share your commitment to creating
            positive change in our city.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="relative">
          <img
            src={HelpingHands}
            alt="Helping hands"
            className="h-56 w-full object-cover grayscale"
            style={{ objectPosition: "50% 50%" }}
          />

          <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-(--secondary)">
            <Wheat className="h-6 w-6 text-(--white)" />
          </div>
        </div>

        <div className="p-6">
          <h3
            className="mb-2 text-xl font-semibold text-(--black)"
            style={{ fontFamily: "Poppins" }}
          >
            Sustain Our Mission
          </h3>

          <p
            className="text-(--black)/70"
            style={{ fontFamily: "Quicksand" }}
          >
            Your involvement ensures we can continue serving families month after
            month, year after year.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
{/* Ways to Help */}
<section className="w-full bg-white py-24">
  <div className="mx-auto max-w-[1199px] px-6 sm:px-8">

    {/* Header */}
    <div className="mb-16 text-center">
      <h2
        className="mb-4 text-3xl sm:text-4xl font-semibold text-(--black)"
        style={{ fontFamily: "Poppins" }}
      >
        Ways to Help
      </h2>

      <p
        className="text-(--black)/70"
        style={{ fontFamily: "Quicksand" }}
      >
        Choose the way that works best for you—every action makes a difference
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

      {/* Volunteer */}
      <div className="rounded-xl border-2 border-(--secondary) p-8">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-(--secondary)">
          <HandHeart className="h-6 w-6 text-white" />
        </div>

        <h3
          className="mb-2 text-xl font-semibold text-(--black)"
          style={{ fontFamily: "Poppins" }}
        >
          Volunteer Your Time
        </h3>

        <p
          className="mb-6 text-(--black)/70"
          style={{ fontFamily: "Quicksand" }}
        >
          Help pack or distribute meals at weekly drives. No experience
          needed—just bring your energy and compassion.
        </p>

        <Link
          to="/getinvolved#volunteer-form"
          className="
            inline-flex
            items-center
            justify-center
            rounded-md
            bg-(--secondary)
            px-5
            py-2
            text-sm
            font-semibold
            text-white
            transition
            hover:border
            hover:border-(--secondary)
            hover:bg-(--white)
            hover:text-(--secondary)
          "
          style={{ fontFamily: "Quicksand" }}
        >
          Sign Up to Volunteer
        </Link>
      </div>

      {/* Donation */}
      <div className="rounded-xl border-2 border-[#F26B4F] p-8">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#F26B4F]">
          <DollarSign className="h-6 w-6 text-white" />
        </div>

        <h3
          className="mb-2 text-xl font-semibold text-(--black)"
          style={{ fontFamily: "Poppins" }}
        >
          Make a Donation
        </h3>

        <p
          className="mb-6 text-(--black)/70"
          style={{ fontFamily: "Quicksand" }}
        >
          Every $20 provides nutritious meals for five families. Your financial
          support makes our work possible.
        </p>

        <Link
          to="/donate#donate-form"
          className="
            inline-flex
            items-center
            justify-center
            rounded-md
            bg-[#F26B4F]
            px-5
            py-2
            text-sm
            font-semibold
            text-white
            transition
            hover:border
            hover:border-(--primary)
            hover:bg-(--white)
            hover:text-(--primary)
          "
          style={{ fontFamily: "Quicksand" }}
        >
          Donate Now
        </Link>
      </div>

      {/* Partner */}
      <div className="rounded-xl border-2 border-[#F7C96A] p-8">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#F7C96A]">
          <Handshake className="h-6 w-6 text-(--white)" />
        </div>

        <h3
          className="mb-2 text-xl font-semibold text-(--black)"
          style={{ fontFamily: "Poppins" }}
        >
          Become a Partner
        </h3>

        <p
          className="mb-6 text-(--black)/70"
          style={{ fontFamily: "Quicksand" }}
        >
          Collaborate as a sponsor, local business, or organization to amplify
          your reach and impact.
        </p>

        <Link
          to="/partners"
          className="
            inline-flex
            items-center
            justify-center
            rounded-md
            bg-[#F7C96A]
            px-5
            py-2
            text-sm
            font-semibold
            text-(--white)
            transition
            hover:border
            hover:border-(--tertiary)
            hover:bg-(--white)
            hover:text-(--tertiary)
          "
          style={{ fontFamily: "Quicksand" }}
        >
          Partner With Us
        </Link>
      </div>

      {/* Spread the Word */}
      <div className="rounded-xl border-2 border-(--secondary) p-8">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-(--secondary)">
          <Share2 className="h-6 w-6 text-white" />
        </div>

        <h3
          className="mb-2 text-xl font-semibold text-(--black)"
          style={{ fontFamily: "Poppins" }}
        >
          Spread the Word
        </h3>

        <p
          className="mb-6 text-(--black)/70"
          style={{ fontFamily: "Quicksand" }}
        >
          Share our mission on social media, tell friends, or host a fundraiser
          at your school or workplace.
        </p>

        <Link
          to="/getinvolved#volunteer-form"
          className="
            inline-flex
            items-center
            justify-center
            rounded-md
            bg-(--secondary)
            px-5
            py-2
            text-sm
            font-semibold
            text-white
            transition
            hover:border
            hover:border-(--secondary)
            hover:bg-(--white)
            hover:text-(--secondary)
          "
          style={{ fontFamily: "Quicksand" }}
        >
          Learn How to Help
        </Link>
      </div>

    </div>
  </div>
</section>
    {/* Volunteer Sign-Up */}
    <section 
    id="volunteer-form"
    className="w-full bg-[#FAF7F2] py-24">
    <div className="mx-auto max-w-[1199px] px-6 sm:px-8">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2
            className="mb-4 text-3xl sm:text-4xl font-semibold text-(--black)"
            style={{ fontFamily: "Quicksand" }}
          >
            Volunteer Sign-Up
          </h2>

          <p
            className="text-(--black)/70"
            style={{ fontFamily: "Quicksand" }}
          >
            Fill out the form below and we’ll be in touch with next steps
          </p>
        </div>

        {/* Form */}
        <VolunteerForm />

      </div>
    </section>

{/* Hear from Our Volunteers */}
<section className="w-full bg-white px-8 py-24">
  <div className="mx-auto max-w-[1199px]">

    {/* Header */}
    <div className="mb-16 text-center">
      <h2
        className="mb-4 text-3xl font-semibold text-(--black)"
        style={{ fontFamily: "Poppins" }}
      >
        Hear from Our Volunteers
      </h2>

      <p
        className="text-(--black)/70"
        style={{ fontFamily: "Quicksand" }}
      >
        Real stories from youth making a difference
      </p>
    </div>

    {/* Testimonials */}
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

      {/* Testimonial 1 */}
      <div className="relative rounded-xl bg-[#FAF7F2] p-8">
        <div className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#F7C96A]">
          <Heart className="h-5 w-5 text-(--black)" />
        </div>

        <p
          className="mb-6 text-(--black) leading-relaxed"
          style={{ fontFamily: "Quicksand" }}
        >
          “Volunteering here changed how I see my community. I’m not just helping—I’m part of something bigger.”
        </p>

        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--secondary) text-white font-semibold">
            M
          </div>

          <div>
            <p className="font-semibold text-(--black)"
               style={{ fontFamily: "Poppins"}}>
                Maya, 16
            </p>
            <p className="text-sm text-(--black)/70"
               style={{ fontFamily: "Quicksand"}}>
                Student Volunteer
              </p>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="relative rounded-xl bg-[#FAF7F2] p-8">
        <div className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#F7C96A]">
          <Heart className="h-5 w-5 text-(--black)" />
        </div>

        <p
          className="mb-6 text-(--black) leading-relaxed"
          style={{ fontFamily: "Quicksand" }}
        >
          “Being part of Nourish Laredo taught me leadership skills I’ll use for the rest of my life.”
        </p>

        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--secondary) text-white font-semibold">
            C
          </div>

          <div>
            <p className="font-semibold text-(--black)"
               style={{ fontFamily: "Poppins"}}>
              Carlos, 18</p>
            <p className="text-sm text-(--black)/70"
               style={{ fontFamily: "Quicksand"}}>
              Volunteer Coordinator</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
{/* Ready to Make a Difference */}
<section className="relative w-full bg-[#FFF1E6] px-8 py-24 overflow-hidden">
  {/* Decorative Circles */}
  <div className="absolute left-10 top-10 h-24 w-24 rounded-full bg-[#E6F2EF]" />
  <div className="absolute right-16 bottom-12 h-28 w-28 rounded-full bg-[#FFE2B8]" />

  <div className="relative z-10 mx-auto max-w-[1199px] text-center">
    <h2
      className="mb-4 text-3xl font-semibold text-(--black)"
      style={{ fontFamily: "Poppins" }}
    >
      Ready to Make a Difference?
    </h2>

    <p
      className="mb-8 text-(--black)/70"
      style={{ fontFamily: "Quicksand" }}
    >
      Your time and generosity help us feed families across Laredo.
    </p>

    <Link
      to="/donate#donate-form"
      className="
        inline-flex
        items-center
        justify-center
        rounded-lg
        bg-(--primary)
        px-8
        py-3
        text-sm
        font-semibold
        text-white
        transition
        hover:border
        hover:border-(--primary)
        hover:bg-(--white)
        hover:text-(--primary)
      "
      style={{ fontFamily: "Quicksand" }}
    >
      Make a Donation
    </Link>
  </div>
</section>

    </div>
  );
}
