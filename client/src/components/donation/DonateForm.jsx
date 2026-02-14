import { useState, useEffect, useRef  } from "react";
import { Heart } from "lucide-react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { API_BASE_URL } from "../../config";


export default function DonationForm() {
  const [frequency, setFrequency] = useState("one-time");
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const presetAmounts = [10, 25, 50, 100];

        const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      amount: customAmount ? Number(customAmount) * 100 : amount * 100,
      name: formData.name || null,
      email: formData.email || null,
      message: formData.message || null,
      anonymous: !formData.name && !formData.email,
    };

    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/donations/checkout/`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const data = await res.json();
    window.location.href = data.url;
  };





  const firstInputRef = useRef(null);

  useEffect(() => {
    if (window.location.hash === "#donate-form") {
      firstInputRef.current?.focus();
    }
  }, []);

  return (
    <section className="w-full bg-(--white) py-24 px-6">
      <div
        id="donate-form" 
        className="mx-auto max-w-lg rounded-xl border border-(--secondary) bg-white p-8 shadow-sm">

        {/* Header */}
        <div className="mb-8 text-center">
          <h2
            className="text-2xl font-semibold text-(--black)"
            style={{ fontFamily: "Poppins" }}
          >
            Make Your Donation
          </h2>
          <p
            className="mt-2 text-sm text-(--black)/70"
            style={{ fontFamily: "Quicksand" }}
          >
            Choose an amount and frequency that works for you
          </p>
        </div>

        {/* Frequency Toggle */}
        <div className="mb-6 flex items-center justify-center gap-4 rounded-md bg-[#F8F6F2] p-2 text-sm"
             style={{ fontFamily: "Poppins"}}>
          <button
            type="button"
            onClick={() => setFrequency("one-time")}
            className={`flex-1 rounded-md py-2 font-semibold ${
              frequency === "one-time"
                ? "bg-white shadow text-(--black)"
                : "text-(--black)/60"
            }`}
          >
            One-Time
          </button>

          <button
            type="button"
            onClick={() => setFrequency("monthly")}
            className={`flex-1 rounded-md py-2 font-semibold ${
              frequency === "monthly"
                ? "bg-white shadow text-(--black)"
                : "text-(--black)/60"
            }`}
          >
            Monthly
          </button>
        </div>

        {/* Amount Selection */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-(--black)">
            Select Amount
          </label>

          <div className="grid grid-cols-4 gap-3"
                style={{ fontFamily: "Quicksand"}}>
            {presetAmounts.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => {
                  setAmount(value);
                  setCustomAmount("");
                }}
                className={`rounded-md border border-(--black)/20 py-2 font-semibold ${
                  amount === value && !customAmount
                    ? "bg-(--secondary) text-white"
                    : "bg-white text-(--black)"
                }`}
              >
                ${value}
              </button>
            ))}
          </div>
        </div>

        {/* Custom Amount */}
        <div className="mb-6">
          <input
            ref={firstInputRef}
            type="number"
            placeholder="$ Enter custom amount"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}   
            className="w-full rounded-md border border-gray-200 bg-[#FAF7F2] px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-(--secondary)"
          />
        </div>

        {/* Name + Email */}
        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Full Name *"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="rounded-md border border-gray-200 bg-[#FAF7F2] px-4 py-2 text-sm"
            required
          />

          <input
            type="email"
            placeholder="Email *"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="rounded-md border border-gray-200 bg-[#FAF7F2] px-4 py-2 text-sm"
            required
          />
        </div>

        {/* Optional Message */}
        <textarea
          placeholder="Share why you're supporting Nourish Laredo (optional)"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          rows={3}
          className="mb-6 w-full rounded-md border border-gray-200 bg-[#FAF7F2] px-4 py-2 text-sm"
        />
        
        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-[#E55D42] py-3 text-sm font-semibold text-white hover:opacity-90"
        >
          <Heart className="h-4 w-4" />
          Donate Securely
        </button>
        
        {/* Footer Note */}
        <p
          className="mt-4 text-center text-xs text-(--black)/60"
          style={{ fontFamily: "Quicksand" }}
        >
          🔒 Your donation is secure and tax-deductible
        </p>
      </div>
    </section>
  );
}
