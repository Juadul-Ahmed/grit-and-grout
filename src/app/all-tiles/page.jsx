import TileCard from '@/components/TileCard';
import React from 'react';

const AllTilePage = async () => {
  const res = await fetch("https://69f42960bd2396bf5310a64a.mockapi.io/tiles");
  const tiles = await res.json();
  return (
    <div>
      <h1 className='text-3xl font-bold text-center mt-4 mb-6'>All Tiles</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
        {tiles.map(tile => <TileCard key={tile.id} tile={tile} />)}
      </div>
    </div>
  );
};

export default AllTilePage;