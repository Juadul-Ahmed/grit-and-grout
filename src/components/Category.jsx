import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Category = async ({ selectedCategory }) => {
  const res = await fetch("https://69f42960bd2396bf5310a64a.mockapi.io/tiles");
  const tiles = await res.json();

 
  const uniqueCategories = [
    ...new Set(tiles.map((tile) => tile.category))
  ];

  return (
    <div className='mb-8 space-x-3 flex flex-wrap justify-center items-center gap-y-2'>
      <Link href="/all-tiles">
        <Button 
          size='sm' 
          variant={!selectedCategory ? 'solid' : 'bordered'}
          color={!selectedCategory ? 'primary' : 'default'}
        >
          All
        </Button>
      </Link>

      {uniqueCategories.map((cat) => (
        <Link key={cat} href={`/all-tiles?category=${cat}`}>
          <Button 
            size='sm' 
            variant={selectedCategory === cat ? 'solid' : 'bordered'}
            color={selectedCategory === cat ? 'primary' : 'default'}
          >
            {cat}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Category;