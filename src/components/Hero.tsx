
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToBookCall = () => {
    const bookCallSection = document.getElementById('book-call');
    bookCallSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
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
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Transform Your Content Into
          <span className="block text-white/90">Viral Masterpieces</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          We help content creators and brands turn raw footage into scroll-stopping, 
          engagement-driving videos that convert viewers into customers.
        </p>
        
        {/* CTA Button */}
        <Button 
          onClick={scrollToBookCall}
          size="lg"
          className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Get Your Free Strategy Call
        </Button>
        
        <p className="text-white/70 mt-4 text-sm">
          ✓ No obligation • ✓ 15-minute call • ✓ Instant results
        </p>
      </div>
    </section>
  );
};
