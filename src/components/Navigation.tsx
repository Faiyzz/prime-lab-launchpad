
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const scrollToBookCall = () => {
    const bookCallSection = document.getElementById('book-call');
    bookCallSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWork = () => {
    const workSection = document.querySelector('.work-showcase');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-transparent backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/1df3cf2e-be3d-4edd-a4cb-91e43ef80aa3.png" 
              alt="Prime Lab Studios" 
              className="h-14 w-auto"
            />
          </div>
          
          {/* Our Work link in the middle with glassy effect */}
          <div className="flex-1 flex justify-center">
            <button 
              onClick={scrollToWork}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-gray-800 hover:text-blue-600 font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              Our Work
            </button>
          </div>
          
          {/* Book a Call Button on the right */}
          <div className="flex-shrink-0">
            <Button 
              onClick={scrollToBookCall}
              className="bg-gradient-to-r from-blue-600 to-[#1F2937] hover:from-blue-700 hover:to-[#374151] text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
