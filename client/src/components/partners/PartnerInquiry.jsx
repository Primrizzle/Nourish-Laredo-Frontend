import React, { useState } from 'react';
import { Send, Building2, User, Mail, Phone, Globe, Briefcase } from 'lucide-react';

export default function PartnerInquiry() {
  const [formData, setFormData] = useState({
    organization_name: "",
    contact_name: "",
    email: "",
    phone: "",
    website: "",
    partnership_type: "sponsorship",
    message: ""
  });
  
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("${API_BASE_URL}/api/partners/inquiry/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
            organization_name: "", contact_name: "", email: "", 
            phone: "", website: "", partnership_type: "sponsorship", message: ""
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="w-full bg-[#FAF7F2] py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
        
        {/* Header Section */}
        <div className="bg-[var(--secondary)] p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: "Poppins" }}>
              Partner With Us
            </h2>
            <p className="text-white/80 mt-2 text-sm sm:text-base" style={{ fontFamily: "Quicksand" }}>
              Let's build a stronger Laredo together.
            </p>
          </div>
          <div className="hidden sm:block">
            <Building2 className="h-12 w-12 text-white/20" />
          </div>
        </div>

        {/* Form Section */}
        <div className="p-8">
          {status === "success" ? (
            <div className="text-center py-12">
              <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Send className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Inquiry Received!</h3>
              <p className="text-gray-600 mt-2">Thank you for your interest. Our team will review your organization's details and reach out shortly.</p>
              <button 
                onClick={() => setStatus("idle")}
                className="mt-6 text-[var(--secondary)] font-semibold hover:underline"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Org Name & Contact Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name *</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input 
                      type="text" 
                      name="organization_name"
                      required
                      value={formData.organization_name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent outline-none"
                      placeholder="Company or Group"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input 
                      type="text" 
                      name="contact_name"
                      required
                      value={formData.contact_name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent outline-none"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent outline-none"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent outline-none"
                      placeholder="(956) 555-0123"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Website & Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Website (Optional)</label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input 
                      type="url" 
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent outline-none"
                      placeholder="https://company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Partnership Interest *</label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <select 
                      name="partnership_type"
                      value={formData.partnership_type}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent outline-none bg-white"
                    >
                      <option value="sponsorship">Financial Sponsorship</option>
                      <option value="event">Event Co-Hosting</option>
                      <option value="volunteering">Corporate Volunteering</option>
                      <option value="in_kind">In-Kind Donation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">How would you like to partner with us?</label>
                <textarea 
                  name="message"
                  required
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent outline-none"
                  placeholder="Tell us a bit about your organization and ideas..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto bg-[var(--secondary)] text-white font-semibold py-3 px-8 rounded-lg hover:bg-opacity-90 transition shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "submitting" ? (
                    "Sending..."
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}