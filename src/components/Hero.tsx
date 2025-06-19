
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
          {/* Wavy gradient effect using multiple radial gradients */}
          <div 
            className="absolute inset-0 opacity-60"
            style={{
              background: `
                radial-gradient(ellipse 800px 400px at 20% 30%, rgba(59, 130, 246, 0.6) 0%, transparent 50%),
                radial-gradient(ellipse 600px 300px at 80% 70%, rgba(147, 197, 253, 0.5) 0%, transparent 50%),
                radial-gradient(ellipse 400px 200px at 60% 20%, rgba(96, 165, 250, 0.4) 0%, transparent 50%),
                radial-gradient(ellipse 500px 250px at 40% 80%, rgba(59, 130, 246, 0.45) 0%, transparent 50%)
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
          className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
