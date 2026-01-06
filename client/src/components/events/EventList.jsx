import { Calendar, MapPin } from "lucide-react";

const colorVariants = [
  { border: "border-[#E85C45]", icon: "text-[#E85C45]" },
  { border: "border-(--secondary)", icon: "text-(--secondary)" },
  { border: "border-[#F7C96A]", icon: "text-[#F7C96A]" },
];

export default function EventList({ events }) {
  if (!events || events.length === 0) {
    return (
      <p className="text-center text-(--black)/60">
        No upcoming events scheduled yet.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event, index) => {
        const variant = colorVariants[index % colorVariants.length];

        return (
          <div
            key={event.id}
            className={`rounded-xl bg-white p-6 shadow-sm text-left border-t-4 ${variant.border}`}
          >
            <h3
              className="mb-2 text-lg font-semibold text-(--black)"
              style={{ fontFamily: "Poppins" }}
            >
              {event.title}
            </h3>

            <ul
              className="mb-4 space-y-2 text-sm text-(--black)/70"
              style={{ fontFamily: "Quicksand" }}
            >
              <li className="flex items-center gap-2">
                <Calendar className={`h-4 w-4 ${variant.icon}`} />
                {new Date(event.date).toLocaleDateString()}
              </li>

              <li className="flex items-center gap-2">
                <MapPin className={`h-4 w-4 ${variant.icon}`} />
                {event.location}
              </li>
            </ul>

            <p
              className="mt-auto text-sm text-(--black)/70 line-clamp-3"
              style={{ fontFamily: "Quicksand" }}
            >
              {event.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
