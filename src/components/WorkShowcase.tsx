
import { Button } from "@/components/ui/button";

export const WorkShowcase = () => {
  // Real video data with Vimeo embeds
  const videos = [
    { 
      id: 1, 
      title: "Edited (1)", 
      vimeoId: "1094681115",
      vimeoHash: "47ccfbb801"
    },
    { 
      id: 2, 
      title: "Edited", 
      vimeoId: "1094681159",
      vimeoHash: "5339667ec5"
    },
    { 
      id: 3, 
      title: "1", 
      vimeoId: "1094681279",
      vimeoHash: "268c7965db"
    },
    { 
      id: 4, 
      title: "Video 4", 
      vimeoId: "1094681304",
      vimeoHash: "e168374d98"
    },
    { 
      id: 5, 
      title: "Edited (3)", 
      vimeoId: "1094681208",
      vimeoHash: "537843f16a"
    },
  ];

  return (
    <section className="py-20 bg-white work-showcase">
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
        
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {videos.map((video) => (
            <div key={video.id} className="group cursor-pointer w-full sm:w-80 md:w-72 lg:w-80">
              <div className="relative aspect-[9/16] bg-gray-900 rounded-lg overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                {/* Vimeo video embed */}
                <div className="absolute inset-0">
                  <iframe 
                    src={`https://player.vimeo.com/video/${video.vimeoId}?h=${video.vimeoHash}&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} 
                    title={video.title}
                  />
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
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-[#1F2937] hover:from-blue-700 hover:to-[#374151] text-white px-12 py-4 text-xl font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Let's Create Your Success Story
          </Button>
        </div>
      </div>
    </section>
  );
};
