import { Button, ButtonGroup, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInfoCircle, FaArrowRight } from "react-icons/fa";

const TileCard = ({ tile }) => {
  return (

     
     <Card className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-3 hover:shadow-lg transition-shadow duration-300">
      <div className="relative group">
        <Image
          className="w-full aspect-square overflow-hidden rounded-lg object-cover"
          src={tile.image}
          height={400}
          width={400} 
          alt={tile.title} 
        />
  
        <Chip 
          size="sm" 
          variant="flat"
          className="absolute top-2 right-2 bg-zinc-900/80 text-white backdrop-blur-md border-none text-[10px] font-bold uppercase"
        >
          {tile.material}
        </Chip>
      </div>

      <div className="py-4 flex flex-col gap-1">
        <div className="flex justify-between items-start">
          <h3 className="text-[#06b6d4] font-black uppercase text-lg ">
            {tile.title}
          </h3>
        </div>
        
  
        <p className="text-zinc-500 text-xs line-clamp-1 mb-2">
          {tile.description}
        </p>

        <div className="flex items-center gap-4 text-zinc-400 text-[10px] font-bold uppercase">
          <div className="flex items-center gap-1.5">
            <FaInfoCircle className="text-[#06b6d4]" />
            {tile.dimensions}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300"></span>
            {tile.category}
          </div>
        </div>
      </div>


      <Link href={`/all-tiles/${tile.id}`} className="w-full">
        <Button 
          variant="solid" 
          className="w-full bg-[#27272a] hover:bg-[#06b6d4] text-white font-bold uppercase tracking-widest text-[10px] py-6"
          endContent={<FaArrowRight size={10} />}
        >
          View Details
        </Button>
      </Link>
      
    </Card>
   
 
  
  
    
  );
};

export default TileCard;