'use client';

export const BookCallSection = () => {
  return (
    <section id="book-call" className="py-28 bg-[#1D3D2F] text-[#F4F1EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Ready to <span className="text-[#bc9c22]">Transform Your Content?</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#F4F1EB]/80 max-w-3xl mx-auto font-light">
            Book your free 30-minute strategy call and let’s explore how to make your videos go viral — consistently.
          </p>
        </div>

        {/* Calendly Embed */}
        <div className="max-w-3xl mx-auto" data-aos="zoom-in" data-aos-delay="200">
          <div className="bg-[#1C2120] rounded-2xl border border-[#bc9c22]/30 shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-[#bc9c22] rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-[#F4F1EB] transition-colors duration-300">
                <svg className="w-8 h-8 text-[#1C2120]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#F4F1EB] mb-4">
                Schedule Your Free Strategy Call
              </h3>
              <p className="text-[#F4F1EB]/80 font-light">
                Pick a time that works for you. We’ll discuss your goals and how to elevate your content with precision.
              </p>
            </div>

            {/* Calendly iframe */}
            <div className="w-full rounded-lg overflow-hidden border border-[#bc9c22]/20">
              <iframe
                src="https://calendly.com/office-primelabstudios/30min?embed=true&hide_gdpr_banner=1"
                width="100%"
                height="700"
                frameBorder="0"
                scrolling="no"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="400">
          <div className="flex flex-wrap justify-center items-center gap-6 text-[#F4F1EB]/80 font-light">
            {["Free consultation", "No obligation", "Instant results"].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-2 hover:text-[#bc9c22] transition-colors duration-300">
                <svg className="w-5 h-5 text-[#bc9c22]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
