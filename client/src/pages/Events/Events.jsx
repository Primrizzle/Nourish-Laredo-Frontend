import {Link} from "react-router-dom";
import BagPacking from "../../assets/events/bag-packing.jpg";

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
    </div>
  );
}
``