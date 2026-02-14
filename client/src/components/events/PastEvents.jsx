import React, { useState, useEffect } from "react";

export default function PastEvents({ events = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [selectedEvent, setSelectedEvent] = useState(null); // State for the Modal

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!events.length) return null;

  const maxIndex = Math.max(0, events.length - cardsToShow);
  const safeIndex = Math.min(currentIndex, maxIndex);

  const getImageUrl = (path) => {
    if (!path) return null;
    return path.startsWith("http") ? path : `${API_BASE_URL}${path}`;
  };

  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-[1199px] px-6 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-row items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <h2 className="mb-3 text-2xl sm:text-4xl font-semibold text-(--black)" style={{ fontFamily: "Poppins" }}>
              Past Events Highlights
            </h2>
            <p className="text-sm sm:text-base text-(--black)/70" style={{ fontFamily: "Quicksand" }}>
              Click any event to read the full story
            </p>
          </div>

          <div className="flex gap-2">
            <button onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))} className="p-2 sm:p-3 rounded-full border border-gray-200 hover:bg-gray-50 shadow-sm">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button onClick={() => setCurrentIndex(prev => Math.min(maxIndex, prev + 1))} className="p-2 sm:p-3 rounded-full border border-gray-200 hover:bg-gray-50 shadow-sm">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l6 6-6 6"/></svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${safeIndex * (100 / cardsToShow)}%)` }}
          >
            {events.map((event) => {
              const imageUrl = getImageUrl(event.image);
              return (
                <div key={event.id} className="shrink-0 px-3" style={{ width: `${100 / cardsToShow}%` }}>
                  <div 
                    onClick={() => setSelectedEvent(event)}
                    className="group flex flex-col h-full overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-gray-100 min-h-[440px] cursor-pointer hover:shadow-lg hover:border-gray-300"
                  >
                    <div className="relative h-48 shrink-0 overflow-hidden">
                      <img src={imageUrl || "/api/placeholder/400/320"} alt={event.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      {event.external_link && (
                        <div className="absolute left-3 top-3 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">News</div>
                      )}
                      <span className="absolute right-3 top-3 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-(--secondary)">
                        {new Date(event.date).getFullYear()}
                      </span>
                    </div>

                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="mb-3 text-lg font-bold text-(--black) leading-tight line-clamp-2 min-h-[3rem]" style={{ fontFamily: "Poppins" }}>
                        {event.title}
                      </h3>
                      <p className="text-sm text-(--black)/70 line-clamp-4 leading-relaxed mb-4" style={{ fontFamily: "Quicksand" }}>
                        {event.description}
                      </p>
                      <span className="mt-auto text-xs font-bold text-(--secondary) uppercase tracking-wide">Read More +</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- MODAL OVERLAY --- */}
        {selectedEvent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div 
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>

              <img 
                src={getImageUrl(selectedEvent.image)} 
                className="w-full h-64 sm:h-80 object-cover" 
                alt={selectedEvent.title} 
              />
              
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="rounded-full bg-(--secondary)/10 px-3 py-1 text-xs font-bold text-(--secondary)">
                    {new Date(selectedEvent.date).toLocaleDateString(undefined, { dateStyle: 'long' })}
                  </span>
                  {selectedEvent.location && (
                    <span className="text-sm text-gray-500 font-medium">📍 {selectedEvent.location}</span>
                  )}
                </div>

                <h2 className="mb-6 text-2xl sm:text-3xl font-bold text-(--black)" style={{ fontFamily: "Poppins" }}>
                  {selectedEvent.title}
                </h2>

                <p className="text-gray-700 leading-loose whitespace-pre-line mb-8" style={{ fontFamily: "Quicksand" }}>
                  {selectedEvent.description}
                </p>

                {selectedEvent.external_link && (
                  <a 
                    href={selectedEvent.external_link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    View Original Article / Post
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}