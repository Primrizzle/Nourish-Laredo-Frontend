import React, { useState, useEffect } from 'react';
import { Building2 } from "lucide-react";

const API_BASE_URL = "https://web-production-d5735.up.railway.app";

export default function DynamicPartnersGrid() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/partners/`)
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
          {partners.map((partner) => {
            let logoUrl = "";
            
            if (partner.logo) {
              const logoStr = String(partner.logo).trim();
              
              // LOG TO PROVE THE CODE IS NEW:
              console.warn("DEBUG - Partner:", partner.name, "Logo string:", logoStr);

              // If it's an S3 link, we return it immediately and EXIT the logic
              if (logoStr.includes("amazonaws.com") || logoStr.startsWith("http")) {
                // Fix the missing colon if it exists
                logoUrl = logoStr.replace("https//", "https://").replace("http//", "http://");
              } else {
                // ONLY prepend if it's a local relative path
                const baseUrl = API_BASE_URL.endsWith("/") ? API_BASE_URL : `${API_BASE_URL}/`;
                const cleanPath = logoStr.startsWith("/") ? logoStr.substring(1) : logoStr;
                logoUrl = `${baseUrl}${cleanPath}`;
              }
            }

            return (
              <div key={partner.id} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start h-full">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF6F4] overflow-hidden">
                  {logoUrl ? (
                    <img 
                      src={logoUrl} 
                      alt={partner.name} 
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                  ) : null}
                  <Building2 className="h-6 w-6 text-[#1F1F1F]/50" style={{ display: logoUrl ? 'none' : 'block' }} />
                </div>

                <h3 className="text-xl font-bold text-[#1F1F1F] mb-3" style={{ fontFamily: "Poppins" }}>{partner.name}</h3>
                <p className="text-sm text-[#1F1F1F]/70 mb-6 flex-grow" style={{ fontFamily: "Quicksand" }}>{partner.description}</p>

                {partner.website && (
                  <a href={partner.website} target="_blank" rel="noopener noreferrer" className="inline-block rounded-md border border-[#00A38D] px-6 py-2 text-sm font-semibold text-[#00A38D] transition hover:bg-[#00A38D] hover:text-white">
                    Visit Website
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}