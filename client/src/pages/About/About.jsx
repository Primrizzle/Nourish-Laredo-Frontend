import AboutHero from "../../assets/about/AboutHeroImage.jpg";

export default function About() {
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
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-(--secondary)/65" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6 text-center text-white">
          <h1 className="mb-4 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'Poppins'}}>
            About Nourish Laredo
          </h1>

          <p className="text-lg leading-relaxed md:text-xl" style={{ fontFamily: 'Quicksand'}}>
            Nourish Laredo is a youth-led nonprofit dedicated to addressing food
            insecurity while empowering young leaders to serve their community
            with compassion and purpose.
          </p>
        </div>
      </section>
    </div>
  );
}
import AboutHero from "../../assets/about/AboutHeroImage.jpg";

export default function About() {
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
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-(--secondary)/65" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6 text-center text-white">
          <h1 className="mb-4 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'Poppins'}}>
            About Nourish Laredo
          </h1>

          <p className="text-lg leading-relaxed md:text-xl" style={{ fontFamily: 'Quicksand'}}>
            Nourish Laredo is a youth-led nonprofit dedicated to addressing food
            insecurity while empowering young leaders to serve their community
            with compassion and purpose.
          </p>
        </div>
      </section>
    </div>
  );
}
