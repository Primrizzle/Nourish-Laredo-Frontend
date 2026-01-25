import { Calendar } from "lucide-react";

const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

function generateCalendar(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  return [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
}

export default function EventCalendar({ events = [] }) {
  if (!events.length) return null;

  const today = new Date();

  // Group events by month/year
  const grouped = events.reduce((acc, event) => {
    const d = new Date(event.date);
    const key = `${d.getFullYear()}-${d.getMonth()}`;

    acc[key] ??= {
      year: d.getFullYear(),
      month: d.getMonth(),
      label: d.toLocaleString("default", { month: "long", year: "numeric" }),
      days: [],
    };

    acc[key].days.push(d.getDate());
    return acc;
  }, {});

  return (
    <section className="w-full bg-[#FAF7F2] py-24">
      <div className="mx-auto max-w-[1199px] px-6 sm:px-8 text-center">
        <h2
          className="mb-3 text-3xl sm:text-4xl font-semibold"
          style={{ fontFamily: "Poppins" }}
        >
          Event Calendar
        </h2>

        <p
          className="mb-16 text-(--black)/70"
          style={{ fontFamily: "Quicksand" }}
        >
          Plan ahead with our upcoming events
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {Object.values(grouped).sort((a,b) => {
            if (a.year !== b.year) return a.year - b. year;
            return a.month - b.month;
          }).map((month) => {
            const days = generateCalendar(month.year, month.month);
            
            const monthEvents = events.filter((event) => {
              const d = new Date(event.date);
              return d.getFullYear() === month.year && d.getMonth() === month.month;
            });

            return (
              <div
                key={month.label}
                className="rounded-xl bg-white shadow-sm overflow-hidden"
              >
                <div className="bg-(--secondary) py-3 text-white font-semibold"
                     style={{ fontFamily: "Poppins"}}>
                  {month.label}
                </div>

                <div className="p-4">
                  <div className="grid grid-cols-7 text-xs mb-2"
                       style={{ fontFamily: "Quicksand"}}>
                    {daysOfWeek.map((d) => (
                      <div key={d}>{d}</div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {days.map((day, i) => (
                      <div
                        key={i}
                        className={`h-8 flex items-center justify-center rounded
                          ${
                            month.days.includes(day)
                              ? "bg-(--secondary) text-white font-semibold"
                              : "text-(--black)/70"
                          }
                        `}
                        style={{ fontFamily: "Quicksand"}}
                      >
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 space-y-2 text-left"
                       style={{ fontFamily: "Quicksand"}}>
                    {monthEvents.map((event) => {
                      const d = new Date(event.date);

                      return (
                        <div
                          key={event.id}
                          className="flex items-start gap-2 text-sm text-(--black)/70"
                        >
                          <Calendar className="mt-0.5 h-4 w-4 text-(--secondary)" />
                          <span>
                            {d.getDate()} – {event.title}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                    <div className="mt-4 space-y-2"
                         style={{ fontFamily: "Poppins"}}>
                      <a
                        href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                          month.label + " Events"
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full rounded-md bg-(--secondary) px-4 py-2 text-sm font-semibold text-white text-center hover:border hover:border-(--secondary) hover:bg-(--white) hover:text-(--secondary) transition"
                      >
                        Add to My Calendar
                      </a>
                    </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
