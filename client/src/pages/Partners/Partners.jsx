import { 
  Users, 
  Heart,
  Coffee, 
  Building2,
  Handshake,
  Quote,
  Calendar, 
} from "lucide-react";

import { Link } from "react-router-dom";

import PartnersSection from "../../components/partners/PartnersSection.jsx";
import CakePartner from "../../assets/partners/local-partners-lo-mat-ad.jpg";
import StoneStorefront from "../../assets/partners/stone-storefront.jpg";
import SunsetGroup from "../../assets/partners/sunset-group-pic.jpg";

export default function Partners() {
  return <div>
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
          <Link
            to="/get-involved"
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
            "
            style={{ fontFamily: "Quicksand" }}
          >
            Become a Partner
          </Link>

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
      <PartnersSection />
      
    </section>
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-[1199px] px-6 sm:px-8 space-y-20">

        {/* ===================== */}
        {/* Café Vida Spotlight */}
        {/* ===================== */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

          {/* Text */}
          <div>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF6F4]">
              <Coffee className="h-5 w-5 text-(--secondary)" />
            </div>

            <h3
              className="mb-4 text-2xl sm:text-3xl font-semibold text-(--black)"
              style={{ fontFamily: "Poppins" }}
            >
              A Community Built on Kindness: <br />
              Our Partnership with Café Vida
            </h3>

            <p
              className="mb-6 text-(--black)/70 leading-relaxed"
              style={{ fontFamily: "Quicksand" }}
            >
              Since 2020, Café Vida has been an integral part of Nourish Laredo’s
              mission. Their monthly meal voucher program ensures that families
              in need have access to nutritious food, while their sponsorship of
              volunteer lunches keeps our youth team energized and motivated.
              Together, we’ve served over <strong>5,000 meals</strong> to the
              Laredo community.
            </p>

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

          {/* Image */}
          <div className="relative">
            <img
              src={StoneStorefront}
              alt="Café Vida storefront"
              className="w-full rounded-xl object-cover shadow-md"
            />
          </div>
        </div>

        {/* ===================== */}
        {/* Rio Grande Credit Union Spotlight */}
        {/* ===================== */}
        <div className="rounded-xl bg-[#FAF7F2] p-8 md:p-12">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

            {/* Image */}
            <div>
              <img
                src={SunsetGroup}
                alt="Community members together at sunset"
                className="w-full rounded-xl object-cover shadow-md"
              />
            </div>

            {/* Text */}
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FBE3A3]">
                <Building2 className="h-5 w-5 text-[#F7A600]" />
              </div>

              <h3
                className="mb-4 text-2xl sm:text-3xl font-semibold text-(--black)"
                style={{ fontFamily: "Poppins" }}
              >
                Building Community Together: <br />
                Rio Grande Credit Union
              </h3>

              <p
                className="mb-6 text-(--black)/70 leading-relaxed"
                style={{ fontFamily: "Quicksand" }}
              >
                Rio Grande Credit Union’s financial contributions have enabled
                us to expand our holiday food drives and emergency relief
                programs. Their commitment to community investment has helped
                us reach more families during the times they need support most.
              </p>

              <Link
                to="/partners"
                className="
                  inline-flex
                  items-center
                  justify-center
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
                Read More
              </Link>
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

            {/* Local Partners */}
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-6 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF6F4]">
                  <Handshake className="h-6 w-6 text-(--secondary)" />
                </div>
              </div>

              <p
                className="text-3xl font-bold text-(--secondary)"
                style={{ fontFamily: "Caveat Brush" }}
              >
                12
              </p>

              <p
                className="mt-2 font-semibold text-(--black)"
                style={{ fontFamily: "Poppins" }}
              >
                Local Partners
              </p>

              <p
                className="mt-1 text-sm text-(--black)/60"
                style={{ fontFamily: "Quicksand" }}
              >
                Community businesses supporting our mission
              </p>
            </div>

            {/* Meals Distributed */}
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-6 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF6F4]">
                  <Heart className="h-6 w-6 text-(--secondary)" />
                </div>
              </div>

              <p
                className="text-3xl font-bold text-(--secondary)"
                style={{ fontFamily: "Caveat Brush" }}
              >
                25,000
              </p>

              <p
                className="mt-2 font-semibold text-(--black)"
                style={{ fontFamily: "Poppins" }}
              >
                Meals Distributed
              </p>

              <p
                className="mt-1 text-sm text-(--black)/60"
                style={{ fontFamily: "Quicksand" }}
              >
                Through sponsorships and partnerships
              </p>
            </div>

            {/* Annual Events */}
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-6 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF6F4]">
                  <Calendar className="h-6 w-6 text-(--secondary)" />
                </div>
              </div>

              <p
                className="text-3xl font-bold text-(--secondary)"
                style={{ fontFamily: "Caveat Brush" }}
              >
                8
              </p>

              <p
                className="mt-2 font-semibold text-(--black)"
                style={{ fontFamily: "Poppins" }}
              >
                Annual Events
              </p>

              <p
                className="mt-1 text-sm text-(--black)/60"
                style={{ fontFamily: "Quicksand" }}
              >
                Co-hosted with partner organizations
              </p>
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

            {/* Testimonial 1 */}
            <div className="rounded-xl border border-(--secondary) p-6 text-left shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF6F4]">
                  <Quote className="h-5 w-5 text-(--secondary)" />
                </div>

                <div>
                  <p
                    className="font-semibold text-(--black)"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Marcos Rodriguez
                  </p>
                  <p
                    className="text-xs text-(--black)/60"
                    style={{ fontFamily: "Quicksand" }}
                  >
                    Rio Grande Credit Union
                  </p>
                </div>
              </div>

              <p
                className="text-sm text-(--black)/70"
                style={{ fontFamily: "Quicksand" }}
              >
                “Working with Nourish Laredo has brought our team closer to the
                community. We’re proud to support an organization that truly
                changes lives every single day.”
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-xl border border-[#F7C96A] p-6 text-left shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FBE3A3]">
                  <Heart className="h-5 w-5 text-[#F7A600]" />
                </div>

                <div>
                  <p
                    className="font-semibold text-(--black)"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Ana Gutierrez
                  </p>
                  <p
                    className="text-xs text-(--black)/60"
                    style={{ fontFamily: "Quicksand" }}
                  >
                    Café Vida
                  </p>
                </div>
              </div>

              <p
                className="text-sm text-(--black)/70"
                style={{ fontFamily: "Quicksand" }}
              >
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

        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
            <Users className="h-7 w-7 text-white" />
          </div>
        </div>

        {/* Heading */}
        <h2
          className="mb-4 text-3xl sm:text-4xl font-semibold"
          style={{ fontFamily: "Poppins" }}
        >
          Join Our Family of Partners
        </h2>

        {/* Description */}
        <p
          className="mx-auto mb-10 max-w-2xl text-white/90"
          style={{ fontFamily: "Quicksand" }}
        >
          From local restaurants to community banks, our partners are the
          heartbeat of Nourish Laredo’s success. Join us in feeding families,
          funding events, and shaping a better future for Laredo.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">

          {/* Partner Inquiry */}
          <Link
            to="/contact"
            className="
              rounded-md
              bg-white
              px-6
              py-3
              text-sm
              font-semibold
              text-[#E85C45]
              transition
              hover:bg-white/90
            "
            style={{ fontFamily: "Quicksand" }}
          >
            Partner Inquiry Form
          </Link>

          {/* Partnership Guide */}
          <Link
            to="/partners"
            className="
              rounded-md
              bg-white/15
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-white
              hover:text-[#E85C45]
            "
            style={{ fontFamily: "Quicksand" }}
          >
            See Partnership Guide
          </Link>

        </div>
      </div>
    </section>
  </div>;
}
