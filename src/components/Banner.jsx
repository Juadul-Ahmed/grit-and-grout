import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div 
      style={{ backgroundImage: `url('https://i.pinimg.com/1200x/8f/96/c9/8f96c9e18f4dc0aaf6f9ab08b2a996ed.jpg')` }}
      className="h-[80vh] md:h-[90vh] w-full md:w-11/12 mx-auto bg-cover bg-no-repeat bg-center flex items-center rounded-none md:rounded-3xl shadow-2xl relative overflow-hidden"
    >
     
      <div className="absolute inset-0 bg-[#27272a]/60 flex items-center px-6 md:px-20">
        
        <div className="max-w-4xl text-white">
        
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter uppercase">
            Excellence in <br />
            <span className="text-[#06b6d4]">Every Grid</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-xl text-zinc-200 font-medium">
            Discover our curated collection of 12 premium porcelain and ceramic tiles, designed for modern architectural foundations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/all-tiles">
          
              <Button 
                size="lg"
                className="bg-[#06b6d4] text-white font-bold px-8 rounded-full shadow-lg hover:bg-[#0891b2] transition-colors w-full sm:w-auto"
              >
                Shop Collection
              </Button>
            </Link>

            <Link href="#">
         
              <Button 
                size="lg"
                variant="bordered" 
                className="text-white border-white hover:bg-white/10 px-8 rounded-full w-full sm:w-auto"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;