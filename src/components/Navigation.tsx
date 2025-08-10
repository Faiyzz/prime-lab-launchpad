'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  const scrollToBookCall = () => {
    document.getElementById("book-call")?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const scrollToWork = () => {
    const el = document.querySelector(".work-showcase") || document.getElementById("work");
    el?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        bg-transparent
      "
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        {/* Glass bar */}
        <div
          className="
            mt-3
            h-14 sm:h-16
            flex items-center justify-between
            rounded-2xl
            px-3 sm:px-4
            backdrop-blur-xl
            bg-white/10
            supports-[backdrop-filter]:bg-white/10
            border border-white/20
            shadow-[0_8px_24px_rgba(0,0,0,0.08)]
          "
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="shrink-0 inline-flex items-center gap-2 focus:outline-none"
            aria-label="Go to top"
          >
            <img
              src="/lovable-uploads/PrimaryLogo.png"
              alt="Prime Lab Studios"
              className="h-9 sm:h-10 w-auto"
            />
          </button>

          {/* Center link (hidden on small) */}
          <div className="hidden md:flex flex-1 justify-center">
            <button
              onClick={scrollToWork}
              className="
                px-6 py-2 rounded-full
                border border-[#bc9c22]/60
                text-[#1C2120]
                bg-white/60 hover:bg-white/80
                transition-all duration-300
                font-medium shadow-sm hover:shadow-md
                backdrop-blur-sm
              "
            >
              Our Work
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              onClick={scrollToBookCall}
              className="
                bg-[#1D3D2F] hover:bg-[#bc9c22]
                text-[#F4F1EB] hover:text-[#1C2120]
                border border-[#bc9c22]
                px-6 py-2 rounded-full font-semibold
                transition-all duration-300
                shadow-lg hover:shadow-[0_0_20px_#bc9c22aa]
              "
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="
                rounded-full p-2
                bg-white/10 hover:bg-white/20
                border border-white/20
                focus:outline-none
                transition
              "
            >
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-5 bg-[#1C2120] transition ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
                <span className={`block h-0.5 w-5 bg-[#1C2120] transition ${open ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-5 bg-[#1C2120] transition ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile dropdown (glass, subtle) */}
        <div
          className={`
            md:hidden overflow-hidden
            transition-[max-height,opacity] duration-300 ease-out
            ${open ? 'max-h-52 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div
            className="
              mx-1 mt-2 rounded-2xl
              backdrop-blur-xl bg-white/10
              supports-[backdrop-filter]:bg-white/10
              border border-white/20
              shadow-[0_8px_24px_rgba(0,0,0,0.08)]
              p-3
            "
          >
            <button
              onClick={scrollToWork}
              className="
                w-full text-left
                px-4 py-3 rounded-xl
                bg-white/60 hover:bg-white/80
                border border-[#bc9c22]/50
                text-[#1C2120] font-medium
                transition
              "
            >
              Our Work
            </button>

            <Button
              onClick={scrollToBookCall}
              className="
                w-full mt-2
                bg-[#1D3D2F] hover:bg-[#bc9c22]
                text-[#F4F1EB] hover:text-[#1C2120]
                border border-[#bc9c22]
                rounded-xl font-semibold
                transition shadow-lg hover:shadow-[0_0_16px_#bc9c22aa]
              "
            >
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
