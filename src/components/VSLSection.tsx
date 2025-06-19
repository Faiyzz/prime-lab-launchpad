
export const VSLSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            See How We Transform Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch this short video to discover how we've helped creators and brands 
            increase their engagement by 300% and grow their following exponentially.
          </p>
        </div>
        
        {/* Video placeholder - replace with actual VSL */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl bg-gray-900">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-lg">Video Sales Letter</p>
                <p className="text-sm text-gray-400">Click to play</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
