'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const WorkShowcase = () => {
  const videos = [
    { id: 1, title: "Edited (1)", vimeoId: "1094681115", vimeoHash: "47ccfbb801" },
    { id: 2, title: "Edited", vimeoId: "1094681159", vimeoHash: "5339667ec5" },
    { id: 3, title: "1", vimeoId: "1094681279", vimeoHash: "268c7965db" },
    { id: 4, title: "Video 4", vimeoId: "1094681304", vimeoHash: "e168374d98" },
    { id: 5, title: "Edited (3)", vimeoId: "1094681208", vimeoHash: "537843f16a" },
  ];

  const scrollToBookCall = () => {
    const bookCallSection = document.getElementById('book-call');
    bookCallSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
    id="work"
    className="relative py-28 bg-[#F4F1EB] text-[#1C2120] overflow-hidden">
      {/* Optional gold glow accents */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-[#bc9c22] opacity-10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[0%] right-[10%] w-[350px] h-[350px] bg-[#bc9c22] opacity-10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
           Our Work <span className="font-bold italic">Speaks for Itself</span>

          </h2>
          <p className="text-lg sm:text-xl text-[#1C2120]/80 max-w-3xl mx-auto font-light">
            From zero to millions of views. Here’s our recent short-form editing work that went viral.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-[260px] sm:w-[280px] group transition-transform transform hover:scale-[1.04]"
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-xl border border-[#bc9c22]/20 shadow-[0_10px_30px_rgba(0,0,0,0.15)] group-hover:shadow-[0_12px_40px_rgba(188,156,34,0.25)] transition-all duration-300">
                <iframe
                  src={`https://player.vimeo.com/video/${video.vimeoId}?h=${video.vimeoHash}&title=0&byline=0&portrait=0&badge=0&autopause=0`}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={video.title}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  frameBorder="0"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-[#1C2120]/80 mb-6 text-lg font-light">
            Ready to see results like these for your content?
          </p>
          <Button
            onClick={scrollToBookCall}
            size="lg"
            className="bg-[#1D3D2F] hover:bg-[#bc9c22] text-[#F4F1EB] hover:text-[#1C2120] border border-[#bc9c22] px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_#bc9c22aa]"
          >
            Let’s Create Your Success Story
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
