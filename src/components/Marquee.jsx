import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeSection = () => {
  return (
    <div className='mx-auto bg-[#27272a] dark:bg-[#06b6d4] py-3 overflow-hidden shadow-lg mt-8 mb-6 w-11/12'>
      <Marquee 
        gradient={false} 
        speed={50} 
        pauseOnHover={true}
      >
        <div className="flex items-center gap-12 text-white font-bold uppercase tracking-widest text-sm md:text-base">
  
          <span className="flex items-center gap-3">
            <span className="text-[#06b6d4] dark:text-[#27272a]">●</span> 
            New Arrivals: <span className="text-zinc-300">Arctic Slate Porcelain</span>
          </span>

      
          <span className="flex items-center gap-3">
            <span className="text-[#06b6d4] dark:text-[#27272a]">●</span> 
            Weekly Feature: <span className="text-zinc-300">Modern Geometric Patterns</span>
          </span>

    
          <span className="flex items-center gap-3">
            <span className="text-[#06b6d4] dark:text-[#27272a]">●</span> 
            Join the Community: <span className="text-zinc-300">#SlabStudioDesign</span>
          </span>

        
          <span className="flex items-center gap-3 mr-12">
            <span className="text-[#06b6d4] dark:text-[#27272a]">●</span> 
            Limited Edition: <span className="text-zinc-300">Basalt Bespoke Series</span>
          </span>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeSection;