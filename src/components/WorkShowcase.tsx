import { Button } from "@/components/ui/button";

export const WorkShowcase = () => {
  // Placeholder video data - replace with actual portfolio
  const videos = [
    { id: 1, title: "Fitness Transformation", views: "2.3M", platform: "TikTok" },
    { id: 2, title: "Product Launch", views: "1.8M", platform: "Instagram" },
    { id: 3, title: "Brand Story", views: "950K", platform: "YouTube Shorts" },
    { id: 4, title: "Tutorial Series", views: "1.2M", platform: "TikTok" },
    { id: 5, title: "Behind the Scenes", views: "780K", platform: "Instagram" },
    { id: 6, title: "Client Testimonial", views: "1.5M", platform: "YouTube Shorts" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Work Speaks for Itself
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From zero to millions of views. Here are some of our recent short-form 
            video editing projects that have gone viral.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="group cursor-pointer">
              <div className="relative aspect-[9/16] bg-gray-900 rounded-lg overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                {/* Video placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-80">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Video info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-semibold mb-1">{video.title}</h3>
                  <div className="flex items-center justify-between text-sm text-white/80">
                    <span>{video.views} views</span>
                    <span>{video.platform}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to see results like these for your content?
          </p>
          <Button 
            onClick={() => {
              const bookCallSection = document.getElementById('book-call');
              bookCallSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Let's Create Your Success Story
          </Button>
        </div>
      </div>
    </section>
  );
};
