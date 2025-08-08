'use client';

import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const scrollToBookCall = () => {
    const bookCallSection = document.getElementById("book-call");
    bookCallSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWork = () => {
    const workSection = document.querySelector(".work-showcase");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#F4F1EB] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/lovable-uploads/PrimaryLogo.png"
              alt="Prime Lab Studios"
              className="h-12 w-auto"
            />
          </div>

          {/* Center Link */}
          <div className="flex-1 flex justify-center">
            <button
              onClick={scrollToWork}
              className="px-6 py-2 rounded-full border border-[#bc9c22]/60 text-[#1C2120] bg-white/60 hover:bg-white transition-all duration-300 font-medium shadow-sm hover:shadow-md backdrop-blur-sm"
            >
              Our Work
            </button>
          </div>

          {/* Book a Call Button */}
          <div className="flex-shrink-0">
            <Button
              onClick={scrollToBookCall}
              className="bg-[#1D3D2F] hover:bg-[#bc9c22] text-[#F4F1EB] hover:text-[#1C2120] border border-[#bc9c22] px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_#bc9c22aa]"
            >
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
