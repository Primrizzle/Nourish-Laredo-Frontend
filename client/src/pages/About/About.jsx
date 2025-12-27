import { useState } from "react";

import AboutHero from "../../assets/about/AboutHeroImage.jpg";
import WhiteTarget from "../../components/icons/WhiteTargetIcon.jsx";
import IncreasingArrow from "../../components/icons/IncreasingArrowIcon.jsx";
import YoungFounders from "../../assets/about/OriginPic.png";
import VolunteerIcon from "../../components/icons/VolunteerIcon.jsx";
import BadgeIcon from "../../components/icons/BadgeIcon.jsx";
import SparkleIcon from "../../components/icons/SparkleIcon.jsx";
import HeartIcon from "../../components/icons/HeartIcon";
import CallToActionImage from "../../assets/about/AboutCTA.jpg";



export default function About() {
  const [activeMember, setActiveMember] = useState(null);

  const teamMembers = [
    { name: "Adan Tellez", role: "Co-Founder", photo: null },
    { name: "Victoria Tellez", role: "Co-Founder", photo: null },
    { name: "Matteo Canamar", role: "Co-Founder", photo: null },
    { name: "Lorena Tellez", role: "Co-Founder", photo: null },
    { name: "Eduardo Canamar", role: "Co-Founder", photo: null },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="
          relative
          flex
          items-center
          justify-center
          h-[70vh]
          min-h-[500px]
          w-full
          overflow-hidden
        "
      >
        {/* Background Image */}
        <img
          src={AboutHero}
          alt="Awards ceremony"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-(--secondary)/65" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6 text-center text-white">
          <h1
            className="mb-4 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
            style={{ fontFamily: "Poppins" }}
          >
            About Nourish Laredo
          </h1>

          <p
            className="text-lg leading-relaxed md:text-xl"
            style={{ fontFamily: "Quicksand" }}
          >
            Nourish Laredo is a youth-led nonprofit dedicated to addressing food
            insecurity while empowering young leaders to serve their community
            with compassion and purpose.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full bg-[#FAF7F2] py-20 px-8">
        <div
          className="
            mx-auto
            grid
            max-w-[1199px]
            grid-cols-1
            gap-x-12
            gap-y-12
            md:grid-cols-2
          "
        >
          {/* Mission Card */}
          <div className="rounded-lg border border-(--secondary) bg-white p-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-(--secondary)">
              <WhiteTarget size={24} />
            </div>

            <h3 className="mb-4 text-xl font-semibold text-(--secondary)" 
                style={{ fontFamily: "Poppins"}}>
              Our Mission
            </h3>

            <p className="leading-relaxed text-(--black)"
               style={{ fontFamily: "Quicksand"}}>
              Our mission is to equip young leaders to create lasting change in
              Laredo by coordinating food relief efforts, fostering community
              collaboration, and ensuring every family has access to healthy,
              reliable meals.
            </p>
          </div>

          {/* Vision Card */}
          <div className="rounded-lg border border-(--tertiary) bg-white p-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-(--tertiary)">
              <IncreasingArrow size={24} stroke="var(--black)" />
            </div>

            <h3 className="mb-4 text-xl font-semibold text-(--black)"
                style={{ fontFamily: "Poppins"}}>
              Our Vision
            </h3>

            <p className="leading-relaxed text-(--black)" 
               style={{ fontFamily: "Quicksand" }} >
              We envision a Laredo where every family is nourished, every young
              person is empowered to lead, and food security unites the
              community. Together, we’re building a future rooted in empathy,
              collaboration, and lasting change.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-8 py-20">
        <div
          className="
            mx-auto
            grid
            max-w-[1199px]
            grid-cols-1
            gap-x-16
            gap-y-12
            lg:grid-cols-2
            items-start
          "
        >
          {/* Text Content */}
          <div>
            <h2 className="mb-6 text-3xl font-semibold text-(--secondary)"
                style={{ fontFamily: "Poppins"}}>
              How It All Started
            </h2>

            <div className="space-y-5 text-(--black) leading-relaxed"
                style={{ fontFamily: "Quicksand"}}>
              <p>
                Nourish Laredo was founded in 2023 by a group of local high school
                students who saw families in their neighborhoods facing hunger
                and chose to act. Rather than waiting for change, they organized
                their first small meal drive to provide food and hope where it
                was needed most.
              </p>

              <p>
                What started as a weekend food distribution effort in a school
                parking lot has grown into a comprehensive youth-led
                organization that coordinates food aid across Laredo. Our
                founders believed that young people could make a real
                difference—and they were right.
              </p>

              <p>
                Today, Nourish Laredo partners with local businesses, food banks,
                and community leaders to deliver thousands of meals each month.
                What makes us unique is our model of youth leadership: students
                don’t just volunteer—they organize, plan, and lead every step of
                the mission.
              </p>
            </div>

            {/* Journey Timeline */}
            <div className="mt-10">
              <h4 className="mb-4 font-semibold text-(--black) text-2xl"
                  style={{ fontFamily: "Poppins"}}>
                Our Journey
              </h4>

              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <span className="rounded-md bg-(--tertiary) px-3 py-1 text-lg font-semibold text-(--black)"
                        style={{ fontFamily: "Caveat Brush"}}>
                    2023
                  </span>
                  <span className="text-(--black)"
                        style={{ fontFamily: "Quicksand"}}>
                    Founded by local high school students
                  </span>
                </li>

                <li className="flex items-center gap-4">
                  <span className="rounded-md bg-(--tertiary) px-3 py-1 text-lg font-semibold text-(--black)"
                        style={{ fontFamily: "Caveat Brush"}}>
                    2024
                  </span>
                  <span className="text-(--black)"
                        style={{ fontFamily: "Quicksand"}}>
                    First 1,000 meals served
                  </span>
                </li>

                <li className="flex items-center gap-4">
                  <span className="rounded-md bg-(--tertiary) px-3 py-1 text-lg font-semibold text-(--black)"
                        style={{ fontFamily: "Caveat Brush"}}>
                    2025
                  </span>
                  <span className="text-(--black)"
                        style={{ fontFamily: "Quicksand"}}>
                    Reached 50,000+ meals distributed
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="w-full">
            <img
              src={YoungFounders}
              alt="Young founders distributing food in the community"
              className="w-full rounded-xl object-cover shadow-sm"
            />
          </div>
        </div>
      </section>
            {/* Meet the Team */}
      <section className="w-full bg-[#FAF7F2] px-8 py-24">
        <div className="mx-auto max-w-[1199px]">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2
              className="mb-4 text-3xl font-semibold text-(--black)"
              style={{ fontFamily: "Poppins" }}
            >
              Meet the Team
            </h2>
            <p
              className="text-(--black)/70"
              style={{ fontFamily: "Quicksand" }}
            >
              Our passionate youth leaders who make it all happen
            </p>
          </div>

        {/* Team Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => {
              const isOpen = activeMember === member.name;

              return (
                <button
                  key={member.name}
                  onClick={() =>
                    setActiveMember(isOpen ? null : member.name)
                  }
                  className="
                    w-full
                    rounded-xl
                    bg-white
                    p-8
                    text-left
                    shadow-sm
                    transition
                    hover:shadow-md
                  "
                >
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`
                        flex
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-full
                        bg-(--secondary)
                        transition-all
                        ${
                          isOpen
                            ? "h-24 w-24"
                            : "h-16 w-16"
                        }
                      `}
                    >
                      {member.photo ? (
                        <img
                          src={member.photo}
                          alt={`${member.name} portrait`}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-(--secondary)">
                        <VolunteerIcon className="h-10 w-10 text-(--white)" />
                      </div>

                      )}
                    </div>

                    <div>
                      <h3
                        className="font-semibold text-(--black)"
                        style={{ fontFamily: "Poppins" }}
                      >
                        {member.name}
                      </h3>

                      <p
                        className="text-sm text-(--secondary)"
                        style={{ fontFamily: "Quicksand" }}
                      >
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Expanded Detail (subtle, optional) */}
                  {isOpen && (
                    <div
                      className="mt-4 text-sm text-(--black)/70"
                      style={{ fontFamily: "Quicksand" }}
                    >
                      Dedicated youth leader helping drive Nourish Laredo’s mission
                      through hands-on community action.
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>
    {/* Our Values */}
            {/* Our Values */}
      <section className="w-full bg-white px-8 py-24">
        <div className="mx-auto max-w-[1199px]">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2
              className="mb-4 text-3xl font-semibold text-(--black)"
              style={{ fontFamily: "Poppins" }}
            >
              Our Values
            </h2>
            <p
              className="text-(--black)/70"
              style={{ fontFamily: "Quicksand" }}
            >
              The principles that guide everything we do
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                title: "Compassion",
                description:
                  "We believe every meal served brings a family closer to hope and dignity.",
                Icon: HeartIcon,
              },
              {
                title: "Integrity",
                description:
                  "We operate with transparency and accountability to our community and donors.",
                Icon: BadgeIcon,
              },
              {
                title: "Community",
                description:
                  "We work together to build stronger connections across Laredo.",
                Icon: VolunteerIcon,
              },
              {
                title: "Service",
                description:
                  "We’re dedicated to helping families in need with hands-on action.",
                Icon: WhiteTarget,
              },
              {
                title: "Hope",
                description:
                  "We inspire positive change and believe in a future without food insecurity.",
                Icon: SparkleIcon,
              },
            ].map(({ title, description, Icon }) => (
              <div
                key={title}
                className="rounded-xl bg-[#FAF7F2] p-6 text-center"
              >
                {/* Icon */}
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-(--secondary)">
                  <Icon className="h-7 w-7 text-(--white)" />
                </div>


                {/* Title */}
                <h3
                  className="mb-2 font-semibold text-(--black)"
                  style={{ fontFamily: "Poppins" }}
                >
                  {title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm text-(--black)/70"
                  style={{ fontFamily: "Quicksand" }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* Our Impact */}
      <section className="w-full bg-[#F7C96A] px-8 py-24">
        <div className="mx-auto max-w-[1199px] text-center">
        {/* Header */}
          <h2
            className="mb-4 text-3xl font-semibold text-(--black)"
            style={{ fontFamily: "Poppins" }}
          >
            Our Impact Since 2018
          </h2>

          <p
            className="mb-16 text-(--black)/70"
            style={{ fontFamily: "Quicksand" }}
          >
            Making a measurable difference in our community
          </p>

        {/* Impact Stats */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {/* Meals */}
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-(--secondary)">
                <HeartIcon className="h-8 w-8 text-(--white)" />
              </div>


              <span
                className="text-4xl font-bold text-(--black)"
                style={{ fontFamily: "Caveat Brush" }}
              >
                50,000+
              </span>

              <span
                className="mt-2 text-sm text-(--black)/70"
                style={{ fontFamily: "Quicksand" }}
              >
                Meals Distributed
              </span>
            </div>

            {/* Volunteers */}
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-(--secondary)">
                <VolunteerIcon className="h-8 w-8 text-(--white)" />
              </div>

              <span
                className="text-4xl font-bold text-(--black)"
                style={{ fontFamily: "Caveat Brush" }}
              >
                200+
              </span>

              <span
                className="mt-2 text-sm text-(--black)/70"
                style={{ fontFamily: "Quicksand" }}
              >
                Youth Volunteers
              </span>
            </div>

            {/* Families */}
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-(--secondary)">
                <WhiteTarget size={36} />
              </div>

              <span
                className="text-4xl font-bold text-(--black)"
                style={{ fontFamily: "Caveat Brush" }}
              >
                1,500+
              </span>

              <span
                className="mt-2 text-sm text-(--black)/70"
                style={{ fontFamily: "Quicksand" }}
              >
                Families Served
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16">
            <button
              className="
                rounded-lg
                bg-(--secondary)
                px-6
                py-3
                text-sm
                font-semibold
                text-(--white)
                transition
                hover:opacity-90
              "
              style={{ fontFamily: "Quicksand" }}
            >
              Learn More About Our Programs
            </button>
          </div>
        </div>
      </section>
              {/* Call to Action */}
        <section className="relative w-full overflow-hidden">
          {/* Background Image */}
          <img
            src={CallToActionImage}
            alt="Nourish Laredo volunteers"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "50% 35%" }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 mx-auto flex max-w-[1199px] flex-col items-center px-8 py-24 text-center text-white">
            <h2
              className="mb-4 text-4xl font-semibold md:text-5xl"
              style={{ fontFamily: "Poppins" }}
            >
              Be Part of Our Story
            </h2>

            <p
              className="mb-10 max-w-2xl text-lg leading-relaxed text-white/90"
              style={{ fontFamily: "Quicksand" }}
            >
              Whether you want to volunteer your time, donate to support our mission,
              or simply learn more about how we’re making a difference—we’d love to
              have you join us.
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                className="
                  rounded-lg
                  bg-[#F26B4F]
                  px-8
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:opacity-90
                "
                style={{ fontFamily: "Quicksand" }}
              >
                Volunteer With Us
              </button>

              <button
                className="
                  rounded-lg
                  bg-white
                  px-8
                  py-3
                  text-sm
                  font-semibold
                  text-(--black)
                  transition
                  hover:bg-white/90
                "
                style={{ fontFamily: "Quicksand" }}
              >
                Donate to Support Our Work
              </button>
            </div>
          </div>
        </section>

    </div>
  );
}
