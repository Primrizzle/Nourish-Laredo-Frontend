import React, { useState, useEffect } from 'react';
import { Building2 } from "lucide-react";

export default function DynamicPartnersGrid() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('${API_BASE_URL}/api/partners/')
      .then((res) => res.json())
      .then((data) => {
        setPartners(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching partners:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-20">Loading Partners...</div>;

  return (
    <div className="w-full bg-[#FAF7F2] py-24">
      <div className="mx-auto max-w-[1199px] px-6 sm:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1F1F] mb-4" style={{ fontFamily: "Poppins" }}>
            Meet Our Partners
          </h2>
          <p className="max-w-2xl mx-auto text-[#1F1F1F]/70" style={{ fontFamily: "Quicksand" }}>
            These incredible local businesses and organizations make our work possible through their generous support and collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start h-full"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF6F4] overflow-hidden">
                {partner.logo ? (
                  <img 
                    src={`${API_BASE_URL}${partner.logo}`} 
                    alt={partner.name} 
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Building2 className="h-6 w-6 text-(--secondary)" />
                )}
              </div>

              <h3 className="text-xl font-bold text-[#1F1F1F] mb-3" style={{ fontFamily: "Poppins" }}>
                {partner.name}
              </h3>

              <p className="text-sm text-[#1F1F1F]/70 mb-6 flex-grow leading-relaxed" style={{ fontFamily: "Quicksand" }}>
                {partner.description}
              </p>

              {partner.website && (
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block
                    rounded-md
                    border
                    border-(--secondary)
                    px-6
                    py-2
                    text-sm
                    font-semibold
                    text-(--secondary)
                    transition
                    hover:bg-(--secondary)
                    hover:text-white
                    hover:border-(--secondary)
                  "
                  style={{ fontFamily: "Quicksand" }}
                >
                  Visit Website
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}