import Image from "next/image";
import React from "react";
import TileCard from "./TileCard";

const FeaturedTiles = async () => {
  const res = await fetch("https://69f42960bd2396bf5310a64a.mockapi.io/tiles");
  const tiles = await res.json();
  const topTiles = tiles.slice(0,4)
  return (
   <div>
    <h1 className="text-3xl font-bold text-center mb-8">Featured Tiles</h1>
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
      {
        topTiles.map(tile => <TileCard key={tile.id} tile={tile} />)
      }
    </div>
   </div>
  );
};

export default FeaturedTiles;
