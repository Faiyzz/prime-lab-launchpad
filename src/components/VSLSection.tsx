'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const VSLSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => setIsPlaying(true);

  return (
    <section className="relative py-24 bg-[#1D3D2F] text-[#F4F1EB] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-[20%] w-[500px] h-[500px] bg-[#bc9c22] opacity-10 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 right-[15%] w-[400px] h-[400px] bg-[#bc9c22] opacity-10 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight">
            See How We Transform Content
          </h2>
          <p className="text-lg sm:text-xl text-[#F4F1EB]/80 max-w-3xl mx-auto font-light">
            Watch how creators and brands scaled up <span className="text-[#6ff5ff]">300%+</span> in engagement
            — and how you can too.
          </p>
        </motion.div>

        {/* Video or Thumbnail */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto shadow-2xl rounded-xl overflow-hidden"
        >
          <div className="relative aspect-video rounded-xl overflow-hidden group border border-[#bc9c22]/20">
            {!isPlaying ? (
              <div
                className="relative w-full h-full cursor-pointer"
                onClick={handlePlayClick}
              >
                <img
                  src="/lovable-uploads/062d938c-d03e-45d9-821b-645c85d1a115.png"
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#F4F1EB]/90 backdrop-blur-md flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 border-4 border-[#bc9c22] shadow-lg hover:shadow-xl">
                    <svg
                      className="w-8 h-8 text-[#1C2120] ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe
                  src="https://player.vimeo.com/video/1101846008?h=2063ad3ca7&badge=0&autopause=0&player_id=0&app_id=58479%2Fembed&autoplay=1"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                  title="Prime Lab Studios Video"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
