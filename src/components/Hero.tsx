'use client';

import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";

export const Hero = () => {
  const scrollToBookCall = () => {
    const bookCallSection = document.getElementById("book-call");
    bookCallSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#F4F1EB] text-[#1C2120]">
      <Navigation />

      {/* Optional soft gold glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#bc9c22] opacity-10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#1D3D2F] opacity-5 blur-2xl rounded-full" />
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center text-center px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto">
        <div className="w-full">
          {/* Logo */}
          <div className="mb-8" data-aos="zoom-in" data-aos-delay="100">
            <img
              src="/lovable-uploads/4aa3e042-f885-4dcf-9625-c30b42562339.png"
              alt="Prime Lab Studios"
              className="h-24 sm:h-28 lg:h-32 w-auto mx-auto mb-6 hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Transform Your Content Into{" "}
            <span className="block text-[#bc9c22]" data-aos="fade-up" data-aos-delay="400">
              Viral Masterpieces
            </span>
          </h1>

          {/* CTA */}
          <div data-aos="fade-up" data-aos-delay="600">
            <Button
              onClick={scrollToBookCall}
              size="lg"
              className="bg-[#1D3D2F] hover:bg-[#bc9c22] text-[#F4F1EB] hover:text-[#1C2120] px-8 py-4 text-lg font-semibold rounded-full transition-transform duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              Get Your Free Strategy Call
            </Button>
          </div>

          {/* Subtext */}
          <p className="mt-4 text-sm text-[#5c5c5c]" data-aos="fade-up" data-aos-delay="800">
            <span className="text-[#bc9c22]">✓</span> No obligation &nbsp;•&nbsp;
            <span className="text-[#bc9c22]">✓</span> 15-minute call &nbsp;•&nbsp;
            <span className="text-[#bc9c22]">✓</span> Instant results
          </p>
        </div>
      </div>
    </section>
  );
};
