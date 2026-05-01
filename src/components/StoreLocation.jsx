import React from 'react';
import { Button, Card, Chip } from "@heroui/react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaGlobeAsia, FaExternalLinkAlt } from "react-icons/fa";

const StoreLocation = () => {
  const locations = [
    {
      city: "Shanghai Studio",
      address: "District 5, West Bund Art Center",
      phone: "+86 21 5555 0123",
      hours: "09:00 - 18:00",
      status: "Open Now",
    },
    {
      city: "Guangzhou Hub",
      address: "Tianhe District, Ceramic Plaza",
      phone: "+86 20 8888 4567",
      hours: "10:00 - 19:00",
      status: "Showroom Only",
    }
  ];

  return (
    <section className="bg-zinc-50 dark:bg-zinc-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[#06b6d4] font-black uppercase tracking-[0.3em] text-xs">Global Presence</span>
            <h2 className="text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mt-2">
              Our <span className="text-[#06b6d4]">Studios</span>
            </h2>
          </div>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
  
          {locations.map((loc, index) => (
            <Card key={index} className="p-8 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-[#06b6d4]/10 rounded-xl">
                  <FaMapMarkerAlt className="text-[#06b6d4] text-2xl" />
                </div>
                <Chip size="sm" variant="flat" className="bg-zinc-100 dark:bg-zinc-800 text-zinc-500 font-bold uppercase text-[10px]">
                  {loc.status}
                </Chip>
              </div>

              <h3 className="text-2xl font-black text-zinc-800 dark:text-white uppercase mb-4 tracking-tight">
                {loc.city}
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 text-zinc-500 dark:text-zinc-400">
                  <FaGlobeAsia className="mt-1 text-[#06b6d4]" />
                  <span className="text-sm">{loc.address}</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400">
                  <FaPhoneAlt className="text-[#06b6d4]" />
                  <span className="text-sm">{loc.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400">
                  <FaClock className="text-[#06b6d4]" />
                  <span className="text-sm">{loc.hours}</span>
                </div>
              </div>

              <Button 
                endContent={<FaExternalLinkAlt size={12}/>}
                className="w-full bg-[#27272a] text-white font-bold uppercase tracking-widest text-[10px] py-6"
              >
                Get Directions
              </Button>
            </Card>
          ))}

          <div className="bg-[#27272a] rounded-2xl p-8 flex flex-col justify-between text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 leading-none">
                Can't visit <br />in person?
              </h3>
              <p className="text-zinc-400 text-sm mb-6">
                Schedule a virtual walkthrough with our design consultants via WeChat or Zoom.
              </p>
              <Button className="bg-[#06b6d4] text-white font-black uppercase tracking-widest text-[10px] px-8">
                Book Virtual Tour
              </Button>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-10">
                <FaMapMarkerAlt size={200} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StoreLocation;