import { Link } from "react-router-dom";

import TeamBags from "../../assets/programs/nourish-with-bags-programs.jpg";
import LoriBagging from "../../assets/programs/lori-bagging.jpg";
import VolunteerCollage from "../../assets/programs/volunteer-collage.jpg";
import HungerFoodDrive from "../../assets/programs/hunger-action-month-food-drive.jpg";
import FootballWorkers from "../../assets/programs/football-players-working.jpg";
import CommunityBuilding from "../../assets/programs/support-community-building.jpg";
import UtensilsIcon from "../../components/icons/UtensilsIcon.jsx";
import PresentIcon from "../../components/icons/PresentIcon.jsx";
import CalendarIcon from "../../components/icons/CalendarIcon.jsx";
import HeartIcon from "../../components/icons/HeartIcon.jsx";
import VolunteerIcon from "../../components/icons/VolunteerIcon.jsx";
import HouseIcon from "../../components/icons/HouseIcon.jsx";
import SupportBuilding from "../../assets/programs/support-community-building.jpg";

export default function Programs() {
  return (
  <div>
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
        src={TeamBags}
        alt="Youth volunteers packing food bags"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "50% 60%" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-(--secondary)/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
        <h1
          className="mb-6 text-4xl font-semibold md:text-5xl lg:text-6xl"
          style={{ fontFamily: "Poppins" }}
        >
          Our Programs
        </h1>

        <p
          className="mb-10 text-lg leading-relaxed md:text-xl"
          style={{ fontFamily: "Quicksand" }}
        >
          Through youth-led initiatives and community partnerships, we’re
          creating lasting change in Laredo. Every program is designed to
          address food insecurity while building a stronger, more connected
          community.
        </p>
        
      </div>
    </section>
    {/* What We Do */}
    <section className="w-full bg-[#FAF7F2] px-8 py-24">
      <div className="mx-auto max-w-[1199px]">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2
            className="mb-4 text-3xl font-semibold text-(--black)"
            style={{ fontFamily: "Poppins" }}
          >
            What We Do
          </h2>

          <p
            className="mx-auto max-w-2xl text-(--black)/70"
            style={{ fontFamily: "Quicksand" }}
          >
            Our programs are designed to provide immediate relief while building
            long-term community resilience.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Meal Distribution */}
          <div className="overflow-hidden rounded-xl bg-white shadow-sm">
            <img
              src={LoriBagging}
              alt="Meal distribution program"
              className="h-56 w-full object-cover"
              style={{ objectPosition: "50% 35%" }}
            />

            <div className="p-6">
            <h3
              className="mb-2 text-xl font-semibold text-(--black)"
              style={{ fontFamily: "Poppins" }}
            >
              Meal Distribution Program
            </h3>

            <p
              className="mb-4 text-(--black)/70"
              style={{ fontFamily: "Quicksand" }}
            >
              Weekly meal drives delivering nutritious food directly to local
              families in need throughout Laredo.
            </p>

            <a
              href="/get-involved"
              className="inline-flex items-center text-sm font-semibold text-(--secondary) hover:underline"
              style={{ fontFamily: "Quicksand" }}
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Volunteer Initiative */}
          <div className="overflow-hidden rounded-xl bg-white shadow-sm">
            <img
              src={VolunteerCollage}
              alt="Volunteer initiative"
              className="h-56 w-full object-cover"
              style={{ objectPosition: "50% 35%" }}
            />

            <div className="p-6">
              <h3
                className="mb-2 text-xl font-semibold text-(--black)"
                style={{ fontFamily: "Poppins" }}
              >
                Volunteer Initiative
              </h3>

              <p
                className="mb-4 text-(--black)/70"
                style={{ fontFamily: "Quicksand" }}
              >
              Engaging local youth and community members to build leadership
              skills while serving their neighbors.
              </p>

              <a
                href="/get-involved"
                className="inline-flex items-center text-sm font-semibold text-(--secondary) hover:underline"
                style={{ fontFamily: "Quicksand" }}
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Seasonal Food Drives */}
          <div className="overflow-hidden rounded-xl bg-white shadow-sm">
            <img
              src={HungerFoodDrive}
              alt="Seasonal food drives"
              className="h-56 w-full object-cover"
              style={{ objectPosition: "50% 0%" }}
            />

            <div className="p-6">
              <h3
                className="mb-2 text-xl font-semibold text-(--black)"
                style={{ fontFamily: "Poppins" }}
              >
                Seasonal Food Drives
              </h3>

              <p
                className="mb-4 text-(--black)/70"
                style={{ fontFamily: "Quicksand" }}
              >
                Holiday and back-to-school campaigns providing special support
                during critical times of the year.
              </p>
              <a
                href="/programs"
                className="inline-flex items-center text-sm font-semibold text-(--secondary) hover:underline"
                style={{ fontFamily: "Quicksand" }}
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Community Outreach */}
          <div className="overflow-hidden rounded-xl bg-white shadow-sm">
            <img
              src={FootballWorkers}
              alt="Community outreach events"
              className="h-56 w-full object-cover"  
              />
            <div className="p-6">
              <h3
                className="mb-2 text-xl font-semibold text-(--black)"
                style={{ fontFamily: "Poppins" }}
              >
                Community Outreach Events
              </h3>

              <p
                className="mb-4 text-(--black)/70"
                style={{ fontFamily: "Quicksand" }}
              >
                Family wellness days, local fairs, and celebrations that strengthen
                community bonds and provide resources.
              </p>

              <a
                href="/programs"
                className="inline-flex items-center text-sm font-semibold text-(--secondary) hover:underline"
                style={{ fontFamily: "Quicksand" }}
              >
              Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* Our Impact */}
      <section className="w-full bg-[#F7C96A] px-8 py-24">
        <div className="mx-auto max-w-[1199px] text-center">
          {/* Header */}
          <h2
            className="mb-3 text-3xl font-semibold text-(--black)"
            style={{ fontFamily: "Poppins" }}
          >
            Our Impact
          </h2>

          <p
            className="mb-16 text-(--black)/70"
            style={{ fontFamily: "Quicksand" }}
              >
            Making a measurable difference in our community, one meal at a time.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {/* Meals */}
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-(--secondary)">
                <HeartIcon className="h-8 w-8 text-white" />
              </div>

              <span
                className="text-4xl font-bold text-(--black)"
                style={{ fontFamily: "Caveat Brush" }}
              >
                10,000+
              </span>

              <span
                className="mt-2 text-sm text-(--black)/70"
                style={{ fontFamily: "Quicksand" }}
              >
                Meals Served Annually
              </span>
            </div>

            {/* Volunteers */}
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-(--secondary)">
                <VolunteerIcon className="h-8 w-8 text-white" />
              </div>

              <span
                className="text-4xl font-bold text-(--black)"
                style={{ fontFamily: "Caveat Brush" }}
              >
                150+
              </span>

              <span
                className="mt-2 text-sm text-(--black)/70"
                style={{ fontFamily: "Quicksand" }}
              >
                Active Volunteers
              </span>
            </div>

            {/* Families */}
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-(--secondary)">
                <HouseIcon className="h-8 w-8 text-white" />
              </div>

              <span
                className="text-4xl font-bold text-(--black)"
                style={{ fontFamily: "Caveat Brush" }}
              >
                500+
              </span>

              <span
                className="mt-2 text-sm text-(--black)/70"
                style={{ fontFamily: "Quicksand" }}
              >
                Families Reached Monthly
              </span>
            </div>
          </div>

          {/* Quote */}
          <div className="mx-auto mt-16 max-w-3xl rounded-xl bg-[#FBE3A3] px-8 py-6">
            <p
              className="mb-4 text-(--black)/80"
              style={{ fontFamily: "Quicksand" }}
            >
              “The programs at Nourish Laredo have transformed our community. It’s
              incredible to see young people leading with such compassion and making
              a real difference for families who need it most.”
            </p>

            <span
              className="block text-sm font-semibold text-(--black)"
              style={{ fontFamily: "Poppins" }}
            >
              Community Partner
            </span>
          </div>
        </div>
      </section>
      {/* Featured Story */}
        <section className="w-full bg-white px-8 py-24">
          <div className="mx-auto grid max-w-[1199px] grid-cols-1 gap-16 md:grid-cols-2 items-center">
            {/* Image */}
              <div>
                <img
                  src={SupportBuilding}
                  alt="Support Community mural"
                  className="w-full h-full rounded-xl object-cover shadow-md"
                />
              </div>

              {/* Content */}
              <div>
                {/* Badge */}
                <span
                  className="
                    mb-4
                    inline-flex
                    items-center
                    rounded-full
                    bg-[#FBE3A3]
                    px-4
                    py-1
                    text-xs
                    font-semibold
                    text-(--black)
                    "
                  style={{ fontFamily: "Poppins" }}
                  >
                  FEATURED STORY
                </span>

                <h2
                  className="mt-4 mb-6 text-3xl font-semibold text-(--black)"
                  style={{ fontFamily: "Poppins" }}
                >
                  Making an Impact in Laredo
                </h2>

                <div
                  className="space-y-4 text-(--black)/70 leading-relaxed"
                  style={{ fontFamily: "Quicksand" }}
                >
                  <p>
                    Last month, our Meal Distribution Program reached a major milestone—
                    delivering over 10,000th meal to families across Laredo. What started
                    as a small group of passionate youth volunteers has grown into a
                    movement that touches hundreds of lives every week.
                  </p>

                  <p>
                    Through partnerships with local businesses and the dedication of our
                    volunteer teams, we’ve been able to provide not just food, but hope and
                    community connection to those who need it most. This is just the
                    beginning of what we can achieve together.
                  </p>
                </div>

                {/* Button */}
                  <a
                    href="/stories"
                    className="
                      mt-8
                      inline-flex
                      items-center
                      justify-center
                      rounded-lg
                      bg-(--secondary)
                      px-6
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      transition
                      hover:bg-(--tertiary)
                      hover:border
                    "
                    style={{ fontFamily: "Quicksand" }}
                  >
                    Read Full Story
                  </a>
                </div>
              </div>
            </section>
    {/* Call to Action */}
    <section className="relative w-full overflow-hidden bg-(--secondary)">
      {/* Decorative circles */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
      <div className="absolute left-[-60px] bottom-[-60px] h-48 w-48 rounded-full bg-white/10" />

      <div className="relative mx-auto max-w-[1199px] px-8 py-24 text-center text-white">
        <h2
          className="mb-4 text-3xl font-semibold md:text-4xl"
          style={{ fontFamily: "Poppins" }}
        >
          Ready to Make a Difference?
        </h2>

        <p
          className="mx-auto mb-10 max-w-2xl text-white/90"
          style={{ fontFamily: "Quicksand" }}
        >
          Join us in our mission to eliminate food insecurity in Laredo. Whether you
          volunteer your time or contribute financially, every action creates
          positive change in our community.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="/get-involved"
            className="
              rounded-lg
              bg-[#F26B4F]
              px-8
              py-3
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-(--white)
              hover:border
              hover:text-(--primary)
            "
            style={{ fontFamily: "Quicksand" }}
          >
            Volunteer with Us
          </a>

          <a
            href="/donate"
            className="
              rounded-lg
              bg-white
              px-8
              py-3
              text-sm
              font-semibold
              text-(--primary)
              transition
              hover:bg-(--primary)
              hover:text-(--white)
              hover:border
            "
            style={{ fontFamily: "Quicksand" }}
          >
            Donate to Support These Programs
          </a>
        </div>
      </div>
    </section>

  </div>);
}
