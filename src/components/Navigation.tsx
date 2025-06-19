
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const scrollToBookCall = () => {
    const bookCallSection = document.getElementById('book-call');
    bookCallSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo in the middle */}
          <div className="flex-1"></div>
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/1df3cf2e-be3d-4edd-a4cb-91e43ef80aa3.png" 
              alt="Prime Lab Studios" 
              className="h-10 w-auto"
            />
          </div>
          
          {/* Book a Call Button */}
          <div className="flex-1 flex justify-end">
            <Button 
              onClick={scrollToBookCall}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
