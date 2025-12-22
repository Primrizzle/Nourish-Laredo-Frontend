import heroImg from "../../assets/home/HeroBackground.jpg";
import mealDrivesImg from "../../assets/home/PromDrive.jpg";
import foodDistributionImg from "../../assets/home/FoodSacks.jpg";
import youthCommunityImg from "../../assets/home/FootballTeam.png";
import HeartIcon from "../../components/icons/HeartIcon";
import VolunteerIcon from "../../components/icons/VolunteerIcon";
import HouseIcon from "../../components/icons/HouseIcon";
import GivingIcon from "../../components/icons/GivingIcon";
import MoneyIcon from "../../components/icons/MoneyIcon";
import BusinessIcon from "../../components/icons/BusinessIcon";
import HeadphonesIcon from "../../components/icons/HeadphonesIcon";


export default function Home() {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <section className="relative w-full flex justify-center h-[70vh] min-h-[520px] max-h-[900px]">

        <img
          src={heroImg}
          alt="Nourish Laredo hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-(--secondary) opacity-65"></div>

        <div className="relative w-full max-w-[1199px] px-6 sm:px-8 flex items-center justify-center">
          <div className="text-white max-w-2xl py-24 text-center">
            <h1
              className="text-[36px] sm:text-[48px] font-semibold leading-tight"
              style={{ fontFamily: "Poppins" }}
            >
              Nourishing Our Community, One Meal at a Time
            </h1>

            <p
              className="mt-4 text-lg"
              style={{ fontFamily: "Quicksand" }}
            >
              We're dedicated to eliminating food insecurity in Laredo by connecting families
              with nutritious meals and building a stronger, healthier community together.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/donate"
                className="h-10 px-6 rounded-md bg-(--primary) text-white font-semibold flex items-center justify-center hover:bg-white hover:text-(--primary)" 
                style={{ fontFamily: 'Quicksand'}}
              >
                Donate Now
              </a>

              <a
                href="/get-involved"
                className="h-10 px-6 rounded-md bg-white text-(--primary) font-semibold flex items-center justify-center hover:bg-(--primary) hover:text-white"
                style={{ fontFamily: 'Quicksand'}}
              >
                Volunteer
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="w-full flex justify-center bg-(--tertiary) py-8">
        <div
          className="
            grid
            w-full
            max-w-[1199px]
            px-3 sm:px-8
            py-16
            gap-8
            grid-cols-1
            md:grid-cols-3
            min-h-[303px]
            text-center
          "
        >
          <div className="flex flex-col items-center gap-4">
            <div className="flex w-16 h-16 p-4 items-center justify-center rounded-full bg-(--secondary)">
              <HeartIcon className="w-6 h-6 text-white" />
            </div>

            <h3 className="text-4xl font-bold text-(--black)" style={{ fontFamily: "Caveat Brush" }}>
              5,000+
            </h3>
            <p className="text-(--black)" style={{ fontFamily: "Quicksand" }}>
              Meals Served
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex w-16 h-16 p-4 items-center justify-center rounded-full bg-(--secondary)">
              <VolunteerIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-(--black)" style={{ fontFamily: "Caveat Brush" }}>
              200+
            </h3>
            <p className="text-(--black)" style={{ fontFamily: "Quicksand" }}>
              Active Volunteers
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex w-16 h-16 p-4 items-center justify-center rounded-full bg-(--secondary)">
              <HouseIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-(--black)" style={{ fontFamily: "Caveat Brush" }}>
              850+
            </h3>
            <p className="text-(--black)" style={{ fontFamily: "Quicksand" }}>
              Laredo Families Supported
            </p>
          </div>
        </div>
      </section>

      {/* About Preview Section -- Who we are */}
        <section className="w-full flex justify-center bg-white min-h-[738px]">
        <div
          className="
            w-full
            max-w-[1199px]
            px-6 sm:px-8
            flex
            flex-col
            items-center
            justify-center
            text-center
          "
        >
          <h1 className="text-(--secondary) font-bold text-5xl py-16 " style={{ fontFamily: "Poppins"}}> Who We Are </h1>
          <p
            className="max-w-3xl text-lg leading-relaxed text-(--black)"
            style={{ fontFamily: "Quicksand" }}
          >
            We are a youth-founded and youth-led nonprofit organization dedicated to
            fighting food insecurity in Laredo, Texas. Our mission is to empower young
            people to lead with compassion and action by organizing community meal
            drives, partnerships with local businesses, and outreach programs that
            ensure every family in Laredo has access to nutritious food.
          </p>

          <p
            className="mt-6 max-w-3xl text-lg leading-relaxed text-(--black)"
            style={{ fontFamily: "Quicksand" }}
          >
            Rooted in empathy and service, we believe that the next generation can end
            hunger by starting in their own neighborhoods.
          </p>

          <a
            href="/about"
            className="
              mt-10
              h-10
              px-8
              rounded-md
              border
              border-(--secondary)
              text-(--secondary)
              font-semibold
              flex
              items-center
              justify-center
              transition
              duration-200
              hover:bg-(--primary)
              hover:text-white
            "
            style={{ fontFamily: "Quicksand" }}
          >
            Read More
          </a>
        </div>
      </section>
    
    {/* Programs Preview -- What we do */}
    <section className="w-full flex justify-center bg-[#FAF7F2] py-24">
      <div className="w-full max-w-[1199px] px-6 sm:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-semibold text-(--secondary)"
            style={{ fontFamily: "Poppins" }}
          >
            What We Do
          </h2>

          <p
            className="mt-4 max-w-2xl mx-auto text-(--black)"
            style={{ fontFamily: "Quicksand" }}
          >
            Our programs are designed to address food insecurity from multiple angles,
            creating lasting impact in our community.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-xl overflow-hidden">
            <img
              src={mealDrivesImg}
              alt="Meal Drives"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3
                className="text-xl font-semibold text-(--secondary)"
                style={{ fontFamily: "Poppins" }}
              >
                Meal Drives
              </h3>

              <p
                className="mt-3 text-(--black)"
                style={{ fontFamily: "Quicksand" }}
              >
                We organize community meal drives across Laredo, bringing fresh,
                nutritious food directly to families who need it most.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl overflow-hidden">
            <img
              src={foodDistributionImg}
              alt="Food Distribution"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3
                className="text-xl font-semibold text-(--secondary)"
                style={{ fontFamily: "Poppins" }}
              >
                Food Distribution
              </h3>

              <p
                className="mt-3 text-(--black)"
                style={{ fontFamily: "Quicksand" }}
              >
                Through partnerships with local markets, restaurants, and businesses,
                we distribute fresh produce and groceries to households facing food insecurity.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl overflow-hidden">
            <img
              src={youthCommunityImg}
              alt="Community of Youth"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3
                className="text-xl font-semibold text-(--secondary)"
                style={{ fontFamily: "Poppins" }}
              >
                Community of Youth
              </h3>

              <p
                className="mt-3 text-(--black)"
                style={{ fontFamily: "Quicksand" }}
              >
                Our youth volunteers lead every effort — learning teamwork, empathy,
                and service while making a lasting impact in their community.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* Call to Action*/}
    <section className="w-full flex justify-center bg-white py-24">
      <div className="w-full max-w-[1199px] px-6 sm:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-semibold text-(--secondary)"
            style={{ fontFamily: "Poppins" }}
          >
            Join the Mission
          </h2>

          <p
            className="mt-4 max-w-2xl mx-auto text-(--black)"
            style={{ fontFamily: "Quicksand" }}
          >
            There are many ways you can help make a difference in our community.
            <br />
            Every contribution, big or small, creates lasting impact.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Volunteer Card */}
          <div className="bg-[#FAF7F2] border border-(--secondary) rounded-xl p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-(--secondary) flex items-center justify-center">
                <GivingIcon className="w-7 h-7 text-white" />
              </div>
            </div>

            <h3
              className="text-xl font-semibold text-(--secondary)"
              style={{ fontFamily: "Poppins" }}
            >
              Volunteer Your Time
            </h3>

            <p
              className="mt-4 text-(--black)"
              style={{ fontFamily: "Quicksand" }}
            >
              Join our team of dedicated volunteers. Whether you can spare a few
              hours a week or just want to help at events, we’d love to have you.
            </p>

            <a
              href="/get-involved"
              className="
                mt-8
                inline-flex
                items-center
                justify-center
                h-10
                px-6
                rounded-md
                border
                border-(--secondary)
                text-(--secondary)
                font-semibold
                transition
                hover:bg-(--secondary)
                hover:text-white
              "
              style={{ fontFamily: "Quicksand" }}
            >
              Become a Volunteer
            </a>
          </div>

          {/* Donation Card */}
          <div className="bg-(--secondary) rounded-xl p-8 text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-(--primary) flex items-center justify-center">
                <MoneyIcon className="w-7 h-7 text-white" />
              </div>
            </div>

            <h3
              className="text-xl font-semibold"
              style={{ fontFamily: "Poppins" }}
            >
              Make a Donation
            </h3>

            <p
              className="mt-4"
              style={{ fontFamily: "Quicksand" }}
            >
              Your financial support helps us purchase fresh food, maintain our
              facilities, and expand our reach to serve more families.
            </p>

            <a
              href="/donate"
              className="
                mt-8
                inline-flex
                items-center
                justify-center
                h-10
                px-6
                rounded-md
                bg-(--primary)
                text-white
                font-semibold
                transition
                hover:bg-white
                hover:text-(--primary)
              "
              style={{ fontFamily: "Quicksand" }}
            >
              Donate Today
            </a>
          </div>

          {/* Sponsor Card */}
          <div className="bg-[#FAF7F2] border border-(--primary) rounded-xl p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-(--primary) flex items-center justify-center">
                <BusinessIcon className="w-7 h-7 text-white" />
              </div>
            </div>

            <h3
              className="text-xl font-semibold text-(--primary)"
              style={{ fontFamily: "Poppins" }}
            >
              Become a Sponsor
            </h3>

            <p
              className="mt-4 text-(--black)"
              style={{ fontFamily: "Quicksand" }}
            >
              Partner with us as a local business sponsor. Your support helps us
              expand our programs and strengthen our community impact.
            </p>

            <a
              href="/partners"
              className="
                mt-8
                inline-flex
                items-center
                justify-center
                h-10
                px-6
                rounded-md
                border
                border-(--primary)
                text-(--primary)
                font-semibold
                transition
                hover:bg-(--primary)
                hover:text-white
              "
              style={{ fontFamily: "Quicksand" }}
            >
              Learn More
            </a>
          </div>

        </div>
      </div>
    </section>
    
    {/* Community Voices */}
      <section className="w-full bg-(--tertiary) py-24">
        <div className="w-full max-w-[1199px] mx-auto px-6 sm:px-8">

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto">
            <h2
              className="text-3xl sm:text-4xl font-semibold text-(--black)"
              style={{ fontFamily: "Poppins" }}
            >
              Community Voices
            </h2>

            <p
              className="mt-4 text-(--black) opacity-80"
              style={{ fontFamily: "Quicksand" }}
            >
              Hear from the people who make our mission possible and those whose lives
              have been touched by our work.
            </p>
          </div>

          {/* Testimonials */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm flex flex-col gap-6" style={{ fontFamily: "Quicksand" }}>
              <HeadphonesIcon className="w-10 h-10 text-(--secondary)" />

              <p className="text-(--black) leading-relaxed" >
                “This organization has been a lifeline for my family. The volunteers
                are kind, respectful, and truly care about our community.”
              </p>

              <div>
                <p className="font-semibold text-(--secondary)" >
                  Maria R.
                </p>
                <p className="text-sm text-(--black) opacity-70">Laredo Resident</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm flex flex-col gap-6" style={{ fontFamily: "Quicksand" }}>
              <HeadphonesIcon className="w-10 h-10 text-(--secondary)" />

              <p className="text-(--black) leading-relaxed" >
                “Volunteering here has been one of the most rewarding experiences
                of my life. It’s amazing to see the direct impact we make every week.”
              </p>
              <div>
                <p className="font-semibold text-(--secondary)" >
                  James T.
                </p>
                <p className="text-sm text-(--black) opacity-70">Volunteer Since 2020</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm flex flex-col gap-6 " style={{ fontFamily: "Quicksand" }}>
              <HeadphonesIcon className="w-10 h-10 text-(--secondary)" />
              <p className="text-(--black) leading-relaxed">
                “Thanks to their school partnership program, my children have access
                to nutritious meals that help them focus and succeed in their studies.”
              </p>
              <div>
                <p className="font-semibold text-(--secondary)"> Sofia M.</p>
                <p className="text-sm text-(--black) opacity-70"> Parent </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
