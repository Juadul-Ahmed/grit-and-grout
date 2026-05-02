import Category from '@/components/Category';
import TileCard from '@/components/TileCard';
import React from 'react';

const AllTilePage = async ({ searchParams }) => {

  const { category } = await searchParams;
  
  const res = await fetch("https://69f42960bd2396bf5310a64a.mockapi.io/tiles", {
    cache: 'no-store'
  });
  const tiles = await res.json();

  
  const filteredTiles = category 
    ? tiles.filter(t => t.category.toLowerCase() === category.toLowerCase()) 
    : tiles;

  return (
    <div className="max-w-7xl mx-auto px-6">
      <h1 className='text-3xl font-bold text-center mt-8 mb-6'>
        {category ? `${category} Tiles` : 'All Tiles'}
      </h1>
      
  
      <Category selectedCategory={category} />

      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-8 mb-12'>
        {filteredTiles.length > 0 ? (
          filteredTiles.map(tile => <TileCard key={tile.id} tile={tile} />)
        ) : (
          <p className="text-center col-span-full py-10 text-gray-500">
            No tiles found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllTilePage;