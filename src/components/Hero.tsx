
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToBookCall = () => {
    const bookCallSection = document.getElementById('book-call');
    bookCallSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* White background with wavy blue gradient */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0">
          {/* Enhanced circular gradient effects */}
          <div 
            className="absolute inset-0 opacity-70"
            style={{
              background: `
                radial-gradient(circle 600px at 15% 25%, rgba(59, 130, 246, 0.7) 0%, rgba(147, 197, 253, 0.4) 30%, transparent 70%),
                radial-gradient(circle 500px at 85% 75%, rgba(147, 197, 253, 0.6) 0%, rgba(96, 165, 250, 0.3) 40%, transparent 80%),
                radial-gradient(circle 400px at 65% 15%, rgba(96, 165, 250, 0.5) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 90%),
                radial-gradient(circle 700px at 35% 85%, rgba(59, 130, 246, 0.6) 0%, rgba(147, 197, 253, 0.3) 35%, transparent 75%),
                radial-gradient(circle 300px at 90% 20%, rgba(147, 197, 253, 0.4) 0%, transparent 60%),
                radial-gradient(circle 450px at 10% 70%, rgba(96, 165, 250, 0.5) 0%, transparent 65%)
              `
            }}
          ></div>
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59,130,246,0.3) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/lovable-uploads/1df3cf2e-be3d-4edd-a4cb-91e43ef80aa3.png" 
            alt="Prime Lab Studios" 
            className="h-16 w-auto mx-auto mb-6"
          />
        </div>
        
        {/* Powerful headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
          Transform Your Content Into
          <span className="block text-blue-600">Viral Masterpieces</span>
        </h1>
        
        {/* CTA Button */}
        <Button 
          onClick={scrollToBookCall}
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-[#1F2937] text-white hover:from-blue-700 hover:to-[#374151] px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Get Your Free Strategy Call
        </Button>
        
        <p className="text-gray-600 mt-4 text-sm">
          ✓ No obligation • ✓ 15-minute call • ✓ Instant results
        </p>
      </div>
    </section>
  );
};
