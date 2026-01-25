import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PastEvents from "../../components/events/PastEvents.jsx";
import EventList from "../../components/events/EventList.jsx";
import EventCalendar from "../../components/events/EventCalendar.jsx";

import BagPacking from "../../assets/events/bag-packing.jpg";
import EventSpotlight from "../../assets/events/lori-tori-matt-bags.jpg";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/events/")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
        setLoading(false);
      });
  }, []);

  const today = new Date();

  const upcomingEvents = events.filter(
    (event) => new Date(event.date) >= today
  );

  const pastEvents = events.filter(
    (event) => new Date(event.date) < today
  );

  const highlightedPastEvents = pastEvents.filter(
    (event) => event.is_highlight
  );

  return (
    <div>
      {/* ===================== */}
      {/* Hero Section */}
      {/* ===================== */}
      <section className="relative flex items-center justify-center h-[70vh] min-h-[520px] w-full overflow-hidden">
        <img
          src={BagPacking}
          alt="Volunteers packing food bags at Nourish Laredo event"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "50% 55%" }}
        />

        <div className="absolute inset-0 bg-(--secondary)/70" />

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

      {/* ===================== */}
      {/* Upcoming Events */}
      {/* ===================== */}
      <section className="w-full bg-[#FAF7F2] py-24">
        <div className="mx-auto max-w-[1199px] px-6 sm:px-8 text-center">
          <h2
            className="mb-3 text-3xl sm:text-4xl font-semibold"
            style={{ fontFamily: "Poppins" }}
          >
            Upcoming Events
          </h2>

          <p
            className="mb-16 text-(--black)/70"
            style={{ fontFamily: "Quicksand" }}
          >
            Join us at our next community events
          </p>

          <EventList events={upcomingEvents} loading={loading} />
        </div>
      </section>

      {/* ===================== */}
      {/* Event Spotlight (Static for now) */}
      {/* ===================== */}
      <section className="w-full bg-white py-24">
        <div className="mx-auto max-w-[1199px] px-6 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <div>
              <span
                className="mb-4 inline-flex items-center rounded-full bg-[#FBE3A3] px-4 py-1 text-xs font-semibold text-(--black)"
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

              <p
                className="text-(--black)/70 leading-relaxed"
                style={{ fontFamily: "Quicksand" }}
              >
                Supported by local businesses and community partners, this
                youth-led initiative delivered meals and hope across Laredo.
              </p>

              <div className="mt-10">
                <Link
                  to="/get-involved"
                  className="inline-flex items-center justify-center rounded-md bg-[#F26B4F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#F26B4F] hover:border hover:border-[#F26B4F]"
                  style={{ fontFamily: "Quicksand" }}
                >
                  Volunteer for Our Next Event
                </Link>
              </div>
            </div>

            <div>
              <img
                src={EventSpotlight}
                alt="Youth volunteers preparing Thanksgiving meals"
                className="w-full rounded-xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* Event Calendar */}
      {/* ===================== */}
      <EventCalendar events={upcomingEvents} />

      {/* ===================== */}
      {/* Past Events Highlights */}
      {/* ===================== */}
      <PastEvents events={highlightedPastEvents} />

      {/* ===================== */}
      {/* CTA */}
      {/* ===================== */}
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

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/get-involved"
              className="rounded-md bg-[#F26B4F] px-6 py-3 text-sm font-semibold text-white"
              style={{ fontFamily: "Quicksand" }}
            >
              Volunteer Today
            </Link>

            <Link
              to="/donate"
              className="rounded-md bg-(--secondary) px-6 py-3 text-sm font-semibold text-white"
              style={{ fontFamily: "Quicksand" }}
            >
              Donate to Support Our Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
