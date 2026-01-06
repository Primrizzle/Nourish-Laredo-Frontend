import { Link } from "react-router-dom";

export default function PastEvents({ events = [] }) {
  if (!events.length) return null;

  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-[1199px] px-6 sm:px-8 text-center">
        <h2
          className="mb-3 text-3xl sm:text-4xl font-semibold"
          style={{ fontFamily: "Poppins" }}
        >
          Past Events Highlights
        </h2>

        <p
          className="mb-16 text-(--black)/70"
          style={{ fontFamily: "Quicksand" }}
        >
          Celebrating our community impact through memorable events
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="overflow-hidden rounded-xl bg-white shadow-sm text-left"
            >
              {/* Image */}
              {event.image && (
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-44 w-full object-cover"
                  />

                  <span
                    className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-medium text-(--secondary)"
                    style={{ fontFamily: "Quicksand" }}
                  >
                    {new Date(event.date).toLocaleString("default", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <h3
                  className="mb-2 text-lg font-semibold text-(--black)"
                  style={{ fontFamily: "Poppins" }}
                >
                  {event.title}
                </h3>

                <p
                  className="mb-4 text-sm text-(--black)/70 line-clamp-3"
                  style={{ fontFamily: "Quicksand" }}
                >
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
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
  );
}
