
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
        
        {/* Vimeo Video Embed */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
            <div style={{padding: '56.25% 0 0 0', position: 'relative'}}>
              <iframe 
                src="https://player.vimeo.com/video/1101846008?h=2063ad3ca7&badge=0&autopause=0&player_id=0&app_id=58479%2Fembed"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                title="Prime Lab Studios Video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
