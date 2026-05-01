"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b px-4 bg-base-100">
      <nav className="flex flex-col sm:flex-row justify-between items-center py-4 max-w-7xl mx-auto w-full gap-4">
        
     
        <div className="flex-none">
          <Link href={"/"}>
            <h3 className="font-black text-xl tracking-tight">SlabStudio</h3>
          </Link>
        </div>

     
        <ul className="flex items-center gap-3 md:gap-6 text-xs md:text-sm font-medium">
          <li>
            <Link href={"/"} className="hover:text-primary transition-colors">Home</Link>
          </li>
          <li>
            <Link href={"/profile"} className="hover:text-primary transition-colors">My Profile</Link>
          </li>
          <li>
            <Link href={"/all-tiles"} className="hover:text-primary transition-colors">All Tiles</Link>
          </li>
        
        </ul>

        
        <div className="flex items-center gap-2 md:gap-4">
          <Link href={"/signup"} className="text-xs md:text-sm hover:underline">
            Sign Up
          </Link>
          <Link 
            href={"/signin"} 
            className="btn btn-primary btn-xs md:btn-sm px-4 rounded-md"
          >
            Sign In
          </Link>
        </div>
        
      </nav>
    </div>
  );
};

export default Navbar;