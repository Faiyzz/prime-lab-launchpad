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

      {/* Multi-spot blobs in same dark color palette */}
     <div
  aria-hidden
  className="absolute inset-0 z-0 pointer-events-none blur-3xl will-change-transform"
  style={{
    background: `
      radial-gradient(44rem 44rem at 20% 30%, rgba(110,231,183,0.22), transparent 60%),
      radial-gradient(40rem 40rem at 80% 25%, rgba(52,211,153,0.18), transparent 62%),
      radial-gradient(36rem 36rem at 50% 75%, rgba(16,185,129,0.15), transparent 64%)
    `,
  }}
/>


      {/* Vignette for depth */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(120% 120% at 50% 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.07) 100%)",
        }}
      />

      {/* Full-screen glass pane */}
      <div
        aria-hidden
        className="
          absolute inset-0 z-0 pointer-events-none
          bg-white/10
          backdrop-blur-2xl backdrop-saturate-150 backdrop-contrast-125
          ring-1 ring-white/25
          shadow-[0_20px_60px_rgba(0,0,0,0.12)]
        "
      >
        {/* Inner highlight + shadow */}
        <div className="absolute inset-0 pointer-events-none
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-18px_38px_rgba(0,0,0,0.18)]" />

        {/* Reflection streak */}
        <div
          className="absolute -top-10 -left-6 h-[140%] w-1/2 pointer-events-none mix-blend-screen blur-xl"
          style={{
            background:
              "linear-gradient(115deg, rgba(255,255,255,0.40) 0%, rgba(255,255,255,0.18) 22%, rgba(255,255,255,0.06) 38%, rgba(255,255,255,0) 58%)",
          }}
        />

        {/* Fine texture */}
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.45) 0px, rgba(255,255,255,0.45) 1px, transparent 1px, transparent 2px)",
          }}
        />
      </div>

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
