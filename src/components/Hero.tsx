'use client';

import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";

export const Hero = () => {
  const scrollToBookCall = () => {
    document.getElementById("book-call")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="
        relative min-h-svh w-full flex flex-col overflow-hidden
        bg-[#F4F1EB] text-[#1C2120]
      "
    >
      <Navigation />

      

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center text-center">
        <div className="w-full max-w-[92ch] mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
          {/* Logo */}
          <div className="mb-6 sm:mb-8" data-aos="zoom-in" data-aos-delay="100">
            <img
              src="/lovable-uploads/PrimaryIcon.png"
              alt="Prime Lab Studios"
              className="h-16 xs:h-20 sm:h-24 lg:h-28 w-auto mx-auto transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Headline */}
          <h1
            className="px-1 text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight leading-[1.1] mb-4 sm:mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Transform Your Content Into{" "}
            <span className="block text-[#bc9c22]" data-aos="fade-up" data-aos-delay="400">
              Viral Masterpieces
            </span>
          </h1>

          {/* CTA */}
          <div className="px-1" data-aos="fade-up" data-aos-delay="600">
            <Button
              onClick={scrollToBookCall}
              size="lg"
              className="
                h-12 sm:h-14 px-6 sm:px-8
                bg-[#1D3D2F] hover:bg-[#bc9c22]
                text-[#F4F1EB] hover:text-[#bfdbd6]
                text-base sm:text-lg font-semibold
                rounded-full transition-transform duration-300
                hover:scale-[1.03] shadow-lg hover:shadow-2xl
              "
            >
              Get Your Free Strategy Call
            </Button>
          </div>

          {/* Subtext */}
          <p
            className="mt-3 sm:mt-4 text-xs sm:text-sm text-[#5c5c5c] px-2"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <span className="text-[#bc9c22]">✓</span> No obligation &nbsp;•&nbsp;
            <span className="text-[#bc9c22]">✓</span> 15-minute call &nbsp;•&nbsp;
            <span className="text-[#bc9c22]">✓</span> Instant results
          </p>
        </div>
      </div>
    </section>
  );
};
