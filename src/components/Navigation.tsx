
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
    <nav className="sticky top-0 z-50" style={{
      background: `
        radial-gradient(circle 600px at 15% 25%, rgba(59, 130, 246, 0.7) 0%, rgba(147, 197, 253, 0.4) 30%, transparent 70%),
        radial-gradient(circle 500px at 85% 75%, rgba(147, 197, 253, 0.6) 0%, rgba(96, 165, 250, 0.3) 40%, transparent 80%),
        radial-gradient(circle 400px at 65% 15%, rgba(96, 165, 250, 0.5) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 90%),
        radial-gradient(circle 700px at 35% 85%, rgba(59, 130, 246, 0.6) 0%, rgba(147, 197, 253, 0.3) 35%, transparent 75%),
        radial-gradient(circle 300px at 90% 20%, rgba(147, 197, 253, 0.4) 0%, transparent 60%),
        radial-gradient(circle 450px at 10% 70%, rgba(96, 165, 250, 0.5) 0%, transparent 65%),
        white
      `
    }}>
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
