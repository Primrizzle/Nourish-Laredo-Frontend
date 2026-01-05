import {Link} from "react-router-dom";
import { Calendar, Clock, MapPin } from "lucide-react";
import BagPacking from "../../assets/events/bag-packing.jpg";
import EventSpotlight from "../../assets/events/lori-tori-matt-bags.jpg";
import SantaRun from "../../assets/events/run-santa-run-5k.jpg";
import ThanksgivingMeals from "../../assets/events/thanksgiving-meals-for-seniors.jpg";
import GrocerySupport from "../../assets/events/holiday-grocery-support.webp";
import CivJamaica from "../../assets/events/civic-education-jamaica.jpg";
import EventList from "../../components/events/EventList.jsx";

const calendarData = [
  {
    month: "November 2025",
    year: 2025,
    monthIndex: 10, // 0-based (Nov)
    event: { day: 22, label: "Thanksgiving Meal Drive" },
  },
  {
    month: "December 2025",
    year: 2025,
    monthIndex: 11,
    event: { day: 14, label: "Holiday Care Box Day" },
  },
  {
    month: "January 2026",
    year: 2026,
    monthIndex: 0,
    event: { day: 18, label: "Health & Nutrition Fair" },
  },
];

const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

function generateCalendar(year, monthIndex) {
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  const blanks = Array(firstDay).fill(null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return [...blanks, ...days];
}

export default function Events() {
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
          src={BagPacking}
          alt="Volunteers packing food bags at Nourish Laredo event"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "50% 55%" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-(--secondary)/70" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
          <h1
            className="mb-6 text-4xl font-semibold md:text-5xl lg:text-6xl"
            style={{ fontFamily: "Poppins" }}
          >
            Join Our Events
          </h1>

          <p
            className="mb-10 text-lg leading-relaxed md:text-xl text-white/90"
            style={{ fontFamily: "Quicksand" }}
          >
            Connecting hearts and helping hands across Laredo.
          </p>

        
        </div>
      </section>

        <section className="w-full bg-[#FAF7F2] py-24">
      <div className="mx-auto max-w-[1199px] px-6 sm:px-8 text-center">

        <h2 className="mb-3 text-3xl sm:text-4xl font-semibold"
            style={{ fontFamily: "Poppins" }}>
          Upcoming Events
        </h2>

        <p className="mb-16 text-(--black)/70"
           style={{ fontFamily: "Quicksand" }}>
          Join us at our next community events
        </p>

        <EventList />

      </div>
    </section>

    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-[1199px] px-6 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          {/* Text Content */}
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
              EVENT SPOTLIGHT
            </span>

            <h2
              className="mb-6 text-3xl sm:text-4xl font-semibold text-(--black)"
              style={{ fontFamily: "Poppins" }}
            >
              How Youth Volunteers Helped 20 Laredo Families Enjoy Thanksgiving
            </h2>

            <div
              className="space-y-4 text-(--black)/70 leading-relaxed"
              style={{ fontFamily: "Quicksand" }}
            >
              <p>
                Earlier this November, Nourish Laredo’s youth-led Thanksgiving drive
                brought together young volunteers with one shared goal: making sure
                local families had everything they needed for a warm holiday meal.
                Through a gift card donation effort, the team raised more than
                <strong> $750 in H-E-B gift cards</strong>, directly supporting
                <strong> 20 Laredo households</strong>.
              </p>

              <p>
                Volunteers collected gift cards, assembled grocery bags filled with
                canned goods, dry foods, and holiday staples, and personally delivered
                them to families across the city. For many recipients, the effort
                removed barriers such as transportation challenges and financial
                strain during a critical time of year.
              </p>

              <p>
                Supported by local businesses and community partners, the initiative
                reflected Nourish Laredo’s mission to foster leadership, compassion,
                and civic engagement among young people — proving that even a few
                hours of service can create lasting impact.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-8 rounded-xl border-l-4 border-(--secondary) bg-[#FAF7F2] p-6">
              <p
                className="mb-2 text-sm text-(--black)/80"
                style={{ fontFamily: "Quicksand" }}
              >
                “Seeing our youth step up to serve their community during the holidays
                is powerful. This is the kind of leadership that creates a ripple
                effect — one act of service inspiring many more.”
              </p>

              <span
                className="text-xs font-semibold text-(--secondary)"
                style={{ fontFamily: "Poppins" }}
              >
                — Lorena Tellez, Co-Founder, Nourish Laredo
              </span>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                to="/get-involved"
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
                  hover:border
                  hover:border-(--primary)
                  hover:bg-(--white)
                  hover:text-(--primary)
                "
                style={{ fontFamily: "Quicksand" }}
              >
                Volunteer for Our Next Event
              </Link>
            </div>
          </div>

          {/* ===================== */}
          {/* Image */}
          {/* ===================== */}
          <div className="relative">
            <img
              src={EventSpotlight}
              alt="Youth volunteers preparing Thanksgiving meals"
              className="w-full rounded-xl object-cover shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
    <section className="w-full bg-[#FAF7F2] py-24">
      <div className="mx-auto max-w-[1199px] px-6 sm:px-8 text-center">

        <h2
          className="mb-3 text-3xl sm:text-4xl font-semibold text-(--black)"
          style={{ fontFamily: "Poppins" }}
        >
          Event Calendar
        </h2>

        <p
          className="mb-16 text-(--black)/70"
          style={{ fontFamily: "Quicksand" }}
        >
          Plan ahead with our upcoming event schedule
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          {calendarData.map((month) => {
            const calendarDays = generateCalendar(
              month.year,
              month.monthIndex
            );

            return (
              <div
                key={month.month}
                className="rounded-xl bg-white shadow-sm overflow-hidden"
              >
                {/* Month Header */}
                <div className="bg-(--secondary) py-3 text-white font-semibold"
                     style={{ fontFamily: "Poppins" }}>
                  {month.month}
                </div>

                {/* Calendar Grid */}
                <div className="p-4">
                  <div className="grid grid-cols-7 text-xs text-center mb-2 text-(--black)/60"
                       style={{ fontFamily: "Quicksand" }}>
                    {daysOfWeek.map((d) => (
                      <div key={d}>{d}</div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-sm">
                    {calendarDays.map((day, idx) => {
                      const isEventDay = day === month.event.day;

                      return (
                        <div
                          key={idx}
                          className={`h-8 flex items-center justify-center rounded
                            ${isEventDay
                              ? "bg-(--secondary) text-white font-semibold"
                              : "text-(--black)/70"}
                          `}
                          style={{ fontFamily: "Quicksand" }}
                        >
                          {day}
                        </div>
                      );
                    })}
                  </div>

                  {/* Event Label */}
                  <div className="mt-4 flex items-center gap-2 text-sm text-(--black)/70"
                       style={{ fontFamily: "Quicksand" }}>
                    <Calendar className="h-4 w-4 text-(--secondary)" />
                    {month.event.day} — {month.event.label}
                  </div>

                  {/* CTA */}
                  <button
                    className="
                      mt-4
                      w-full
                      rounded-md
                      border
                      border-(--secondary)
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
                    Add to Calendar
                  </button>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>

  {/* ===================== */}
{/* Past Events Highlights */}
{/* ===================== */}
<section className="w-full bg-(--white) py-24">
  <div className="mx-auto max-w-[1199px] px-6 sm:px-8 text-center">

    <h2
      className="mb-3 text-3xl sm:text-4xl font-semibold text-(--black)"
      style={{ fontFamily: "Poppins" }}
    >
      Past Events Highlights
    </h2>

    <p
      className="mb-16 text-(--black)/70"
      style={{ fontFamily: "Quicksand" }}
    >
      Celebrating our community impact through meaningful events
    </p>

    {/* Event Cards */}
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

      {/* Run Santa Run 5K */}
      <div className="overflow-hidden rounded-xl bg-white shadow-sm text-left">
        <div className="relative">
          <img
            src={SantaRun}
            alt="Run Santa Run 5K volunteer support"
            className="h-44 w-full object-cover"
          />
          <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-medium text-(--secondary)"
                style={{ fontFamily: "Quicksand"}}>
            Dec 2025
          </span>
        </div>

        <div className="p-6">
          <h3
            className="mb-2 text-lg font-semibold text-(--black)"
            style={{ fontFamily: "Poppins" }}
          >
            Run Santa Run 5K Support
          </h3>

          <p
            className="mb-4 text-sm text-(--black)/70"
            style={{ fontFamily: "Quicksand" }}
          >
            Volunteers assisted with packet pickup and registration for one of
            Laredo’s largest holiday runs.
          </p>

          <span className="inline-flex rounded-full bg-[#FAF7F2] px-3 py-1 text-xs text-(--secondary)"
                style={{ fontFamily: "Quicksand"}}>
            1,000+ runners supported
          </span>
        </div>
      </div>

      {/* Thanksgiving Seniors */}
      <div className="overflow-hidden rounded-xl bg-white shadow-sm text-left">
        <div className="relative">
          <img
            src={ThanksgivingMeals}
            alt="Thanksgiving meal distribution for seniors"
            className="h-44 w-full object-cover"
          />
          <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-medium text-(--secondary)"
                style={{ fontFamily: "Quicksand"}}>
            Nov 2025
          </span>
        </div>

        <div className="p-6">
          <h3
            className="mb-2 text-lg font-semibold text-(--black)"
            style={{ fontFamily: "Poppins" }}
          >
            Thanksgiving Meals for Seniors
          </h3>

          <p
            className="mb-4 text-sm text-(--black)/70"
            style={{ fontFamily: "Quicksand" }}
          >
            Youth volunteers delivered complete Thanksgiving meal bags to local
            seniors.
          </p>

          <span className="inline-flex rounded-full bg-[#FAF7F2] px-3 py-1 text-xs text-(--secondary)"
                style={{ fontFamily: "Quicksand"}}>
            150+ meals distributed
          </span>
        </div>
      </div>

      {/* Holiday Grocery Assistance */}
      <div className="overflow-hidden rounded-xl bg-white shadow-sm text-left">
        <div className="relative">
          <img
            src={GrocerySupport}
            alt="Holiday grocery assistance"
            className="h-44 w-full object-cover"
            style={{ objectPosition: "50% 10%" }}
          />
          <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-medium text-(--secondary)"
                style={{ fontFamily: "Quicksand"}}>
            Nov 2025
          </span>
        </div>

        <div className="p-6">
          <h3
            className="mb-2 text-lg font-semibold text-(--black)"
            style={{ fontFamily: "Poppins" }}
          >
            Holiday Grocery Support
          </h3>

          <p
            className="mb-4 text-sm text-(--black)/70"
            style={{ fontFamily: "Quicksand" }}
          >
            Grocery assistance provided to families referred through local school
            and community programs.
          </p>

          <span className="inline-flex rounded-full bg-[#FAF7F2] px-3 py-1 text-xs text-(--secondary)"
                style={{ fontFamily: "Quicksand"}}>
            15 families supported
          </span>
        </div>
      </div>

      {/* Civic Education Jamaica */}
      <div className="overflow-hidden rounded-xl bg-white shadow-sm text-left">
        <div className="relative">
          <img
            src={CivJamaica}
            alt="Civic education community event"
            className="h-44 w-full object-cover"
            style={{ objectPosition: "50% 5%" }}
          />
          <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-medium text-(--secondary)"
                style={{ fontFamily: "Quicksand"}}>
            Nov 2025
          </span>
        </div>

        <div className="p-6">
          <h3
            className="mb-2 text-lg font-semibold text-(--black)"
            style={{ fontFamily: "Poppins" }}
          >
            Civic Education Jamaica
          </h3>

          <p
            className="mb-4 text-sm text-(--black)/70"
            style={{ fontFamily: "Quicksand" }}
          >
            Community celebration focused on youth leadership, civic engagement,
            and education.
          </p>

          <span className="inline-flex rounded-full bg-[#FAF7F2] px-3 py-1 text-xs text-(--secondary)"
                style={{ fontFamily: "Quicksand"}} >
            Student-led community event
          </span>
        </div>
      </div>

    </div>

    {/* Gallery CTA */}
    <div className="mt-12">
      <Link
        to="/gallery"
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
        View Full Photo Gallery
      </Link>
    </div>

  </div>
</section>
<section className="relative w-full bg-[#FDEEE6] py-24 overflow-hidden">
  <div className="relative z-10 mx-auto max-w-[1199px] px-6 sm:px-8 text-center">

    <h2
      className="mb-4 text-3xl sm:text-4xl font-semibold text-(--black)"
      style={{ fontFamily: "Poppins" }}
    >
      Be Part of Our Next Event
    </h2>

    <p
      className="mx-auto mb-10 max-w-2xl text-(--black)/70"
      style={{ fontFamily: "Quicksand" }}
    >
      Whether you have one hour or one day, your help makes a difference.
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
          hover:border
          hover:border-(--primary)
          hover:bg-(--white)
          hover:text-(--primary)
        "
        style={{ fontFamily: "Quicksand" }}
      >
        Volunteer Today
      </Link>

      <Link
        to="/donate"
        className="
          rounded-md
          bg-(--secondary)
          px-6
          py-3
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
        Donate to Support Our Events
      </Link>
    </div>
  </div>

  {/* Decorative Circles */}
  <div className="absolute left-8 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#3BAEA0]/30" />
  <div className="absolute right-10 top-10 h-24 w-24 rounded-full bg-[#F7C96A]/40" />
  <div className="absolute right-1/4 bottom-10 h-16 w-16 rounded-full bg-[#F26B4F]/30" />
</section>


    </div>
  );
}
``