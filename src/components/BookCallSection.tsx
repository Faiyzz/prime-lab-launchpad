
export const BookCallSection = () => {
  return (
    <section id="book-call" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Content?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Book a free 30-minute strategy call to discuss your video editing needs 
            and discover how we can help you create viral content.
          </p>
        </div>
        
        {/* Calendly iframe embed */}
        <div className="max-w-2xl mx-auto" data-aos="zoom-in" data-aos-delay="200">
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-blue-700 transition-colors duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Schedule Your Free Strategy Call
              </h3>
              <p className="text-gray-600 mb-6">
                Choose a time that works best for you. We'll discuss your goals, 
                current challenges, and how we can help you succeed.
              </p>
            </div>
            
            {/* Calendly iframe */}
            <div className="w-full">
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
        
        {/* Trust indicators */}
        <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="400">
          <div className="flex flex-wrap justify-center items-center space-x-8 text-gray-500">
            <div className="flex items-center space-x-2 hover:text-green-600 transition-colors duration-300">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Free consultation</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-green-600 transition-colors duration-300">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>No obligation</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-green-600 transition-colors duration-300">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Instant results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
