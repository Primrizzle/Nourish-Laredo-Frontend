import { useState } from "react";
const API_BASE_URL = "https://web-production-d5735.up.railway.app";

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    availability: "",
    motivation: "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(h(`${API_BASE_URL}/api/volunteer-signup/`, {)
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Submission failed");

      setSuccess(true);
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        availability: "",
        motivation: "",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-xl rounded-xl bg-white p-8 shadow-sm">
      {success && (
        <p className="mb-6 text-center text-sm font-semibold text-green-600">
          Thank you! We’ll be in touch soon.
        </p>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name + Email */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-(--black)">
              Full Name *
            </label>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
              className="w-full rounded-md bg-[#FAF7F2] px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-(--secondary)"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-(--black)">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-md bg-[#FAF7F2] px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-(--secondary)"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 block text-sm font-medium text-(--black)">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-md bg-[#FAF7F2] px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-(--secondary)"
          />
        </div>

        {/* Availability */}
        <div>
          <label className="mb-2 block text-sm font-medium text-(--black)">
            Availability
          </label>
          <input
            type="text"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            placeholder="e.g., Weekends, Tuesday evenings"
            className="w-full rounded-md bg-[#FAF7F2] px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-(--secondary)"
          />
        </div>

        {/* Motivation */}
        <div>
          <label className="mb-2 block text-sm font-medium text-(--black)">
            Tell us why you want to volunteer
          </label>
          <textarea
            rows={4}
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            placeholder="Share what motivates you to help..."
            className="w-full rounded-md bg-[#FAF7F2] px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-(--secondary)"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-[#F26B4F] py-3 text-sm font-semibold text-white transition hover:border hover:border-(--primary) hover:bg-(--white) hover:text-(--primary)"
          style={{ fontFamily: "Poppins" }}
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
}
