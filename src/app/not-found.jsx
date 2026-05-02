import { Button } from "@heroui/react";
import Link from "next/link";
import React from 'react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-blue-800 leading-none">
        404
      </h1>
      
      <div className="w-24 h-1 bg-blue-600 my-6 rounded-full"></div>
      
      <h2 className="text-3xl font-bold mb-3 text-white">Tile Not Found</h2>
      
      <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
        We couldn't find the page or the specific tile you're looking for.
      </p>
      
      <div className="flex gap-4">
       
        <Link href="/all-tiles">
          <Button 
            color="primary" 
            variant="shadow" 
            size="lg"
            className="font-semibold"
          >
            Explore Collection
          </Button>
        </Link>
        
        <Link href="/">
          <Button 
            variant="bordered" 
            size="lg"
            className="text-white border-slate-700"
          >
            Go Home
          </Button>
        </Link>
      </div>

      <p className="mt-12 text-tiny uppercase tracking-widest text-slate-500 font-medium">
        SlabStudio | Premium Tile Collection[cite: 1]
      </p>
    </div>
  );
}