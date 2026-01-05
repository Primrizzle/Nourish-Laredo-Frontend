import {
  Store,
  Coffee,
  Printer,
  Building2,
  HeartPulse,
  ShoppingBag,
} from "lucide-react";

const partners = [
  {
    name: "Tellez Law",
    description:
      "Donates fresh produce and dry goods monthly to support our meal distribution programs.",
    icon: Store,
  },
  {
    name: "Café Vida",
    description:
      "Sponsors meal vouchers and provides lunch for our dedicated youth volunteers.",
    icon: Coffee,
  },
  {
    name: "Trevino Printing Co.",
    description:
      "Prints outreach flyers and event banners at no cost to spread awareness.",
    icon: Printer,
  },
  {
    name: "Rio Grande Credit Union",
    description:
      "Provides financial support for holiday drives and emergency food relief.",
    icon: Building2,
  },
  {
    name: "Texas Community Health Center",
    description:
      "Partners for nutrition fairs and family wellness days throughout the year.",
    icon: HeartPulse,
  },
  {
    name: "El Mercado Local",
    description:
      "Contributes culturally appropriate ingredients for our community meal programs.",
    icon: ShoppingBag,
  },
];

export default function PartnersSection() {
  return (
    <section className="w-full bg-[#FAF7F2] py-24">
      <div className="mx-auto max-w-[1199px] px-6 sm:px-8">

        {/* Header */}
        <div className="mb-16 text-center">
          <h2
            className="mb-4 text-3xl sm:text-4xl font-semibold text-(--black)"
            style={{ fontFamily: "Poppins" }}
          >
            Meet Our Partners
          </h2>

          <p
            className="mx-auto max-w-2xl text-(--black)/70"
            style={{ fontFamily: "Quicksand" }}
          >
            These incredible local businesses and organizations make our work
            possible through their generous support and collaboration.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map(({ name, description, icon: Icon }) => (
            <div key={name} className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF6F4]">
                <Icon className="h-6 w-6 text-(--secondary)" />
              </div>

              <h3
                className="mb-2 text-lg font-semibold text-(--black)"
                style={{ fontFamily: "Poppins" }}
              >
                {name}
              </h3>

              <p
                className="mb-6 text-sm text-(--black)/70"
                style={{ fontFamily: "Quicksand" }}
              >
                {description}
              </p>

              <button
                className="
                  rounded-md
                  border
                  border-(--secondary)
                  px-4
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
                Visit Website
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
