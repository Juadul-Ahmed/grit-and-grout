import React from 'react';
import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaRulerCombined, FaLayerGroup, FaBoxOpen } from "react-icons/fa";

const TileDetailsPage = async ({params}) => {
  const {id} = await params;
  const res = await fetch("https://69f42960bd2396bf5310a64a.mockapi.io/tiles");
  const tiles = await res.json();
  const tile = tiles.find(t => t.id == id)
 
  
  return (
    <div>
      <div className="max-w-7xl mx-auto p-6 lg:py-12">
    
      <Link href="/all-tiles" className="inline-block mb-8">
        <Button 
          variant="light" 
          className="font-bold uppercase t text-xs text-zinc-500 hover:text-[#06b6d4]"
        >
        <FaArrowLeft />
          Back to Collections
        </Button>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white dark:bg-zinc-950 rounded-2xl shadow-xl overflow-hidden border border-zinc-100 dark:border-zinc-800">
        
        
        <div className="relative w-full h-[500px] lg:h-[700px] bg-zinc-50 dark:bg-zinc-900">
          <Image
            src={tile.image} 
            alt={tile.title}
            fill 
            className="object-cover" 
            unoptimized
            priority 
          />
       
          <div className="absolute bottom-6 left-6">
             <Chip className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md font-bold uppercase text-[10px] tracking-widest px-4 py-2 h-auto shadow-lg">
               {tile.category}
             </Chip>
          </div>
        </div>

       
        <div className="p-8 lg:p-12 flex flex-col justify-center bg-white dark:bg-zinc-600">
          <div className="mb-6">
            <span className="text-[#06b6d4] font-black uppercase  text-xs">
              {tile.material} Collection
            </span>
            <h1 className="text-5xl font-black text-zinc-900 dark:text-white mt-2 uppercase tracking-tighter">
              {tile.title}
            </h1>
          </div>

          <div className="space-y-8">
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-lg italic">
              {tile.description}
            </p>

           
            <div className="grid grid-cols-2 gap-6 border-t border-b border-zinc-100 dark:border-zinc-800 py-8">
              <div className="flex flex-col gap-1">
                <span className="flex items-center gap-2 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
                  <FaRulerCombined className="text-[#06b6d4]" /> Dimensions
                </span>
                <span className="text-zinc-800 dark:text-zinc-200 font-bold">{tile.dimensions}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="flex items-center gap-2 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
                  <FaLayerGroup className="text-[#06b6d4]" /> Material
                </span>
                <span className="text-zinc-800 dark:text-zinc-200 font-bold">{tile.material}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="flex items-center gap-2 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
                  <FaBoxOpen className="text-[#06b6d4]" /> Stock Reference
                </span>
                <span className="text-zinc-800 dark:text-zinc-200 font-bold uppercase text-xs tracking-tighter">
                  ID: {tile.id}
                </span>
              </div>
            </div>

           
            <div className="flex flex-col gap-4">
              <h2 className=" text-2xl text-center bg-[#27272a] text-white py-5 rounded-xl font-black uppercase  shadow-lg shadow-zinc-200 dark:shadow-none">
               $ {tile.price}
              </h2>
              <p className="text-center text-[10px] text-zinc-400 uppercase font-medium">
                Professional Trade Program Available for Architects & Designers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TileDetailsPage;