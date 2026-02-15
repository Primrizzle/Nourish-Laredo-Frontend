import React, { useState, useEffect } from 'react';
import { Building2 } from "lucide-react";

// V2 - Added a version flag to the URL to try and bypass cache
const API_BASE_URL = "https://web-production-d5735.up.railway.app";

export default function DynamicPartnersGrid() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Adding a timestamp to the API call to ensure we get fresh data
    fetch(`${API_BASE_URL}/api/partners/?v=${Date.now()}`)
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
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1F1F] mb-4">Meet Our Partners</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => {
            let finalUrl = "";
            
            if (partner.logo) {
              const rawPath = String(partner.logo).trim();
              
              // FORCE LOG: If you don't see this in your console, the update failed
              console.log("V2 - LOGO CHECK:", partner.name, rawPath);

              // If the path contains 'amazonaws' or starts with 'http', treat as S3
              if (rawPath.includes("amazonaws.com") || rawPath.includes("http")) {
                // Manually fix the missing colon if it's broken in the DB
                finalUrl = rawPath.replace("https//", "https://").replace("http//", "http://");
                
                // If it still doesn't have http at the very front, add it
                if (!finalUrl.startsWith("http")) {
                  finalUrl = "https://" + finalUrl.replace("//", "");
                }
              } else {
                // Standard Railway path
                const base = API_BASE_URL.endsWith("/") ? API_BASE_URL : `${API_BASE_URL}/`;
                const path = rawPath.startsWith("/") ? rawPath.substring(1) : rawPath;
                finalUrl = `${base}${path}`;
              }
            }

            return (
              <div key={partner.id} className="bg-white rounded-xl p-8 shadow-sm h-full flex flex-col">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF6F4] overflow-hidden">
                  {finalUrl ? (
                    <img 
                      src={finalUrl} 
                      alt={partner.name} 
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                  ) : null}
                  <Building2 className="h-6 w-6 text-[#1F1F1F]/50" style={{ display: finalUrl ? 'none' : 'block' }} />
                </div>
                <h3 className="text-xl font-bold mb-3">{partner.name}</h3>
                <p className="text-sm text-[#1F1F1F]/70">{partner.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}