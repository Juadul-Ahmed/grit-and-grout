"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b border-zinc-200 dark:border-zinc-800 px-4 bg-[#fafafa] dark:bg-[#0f172a] sticky top-0 z-50">
      <nav className="flex flex-col sm:flex-row justify-between items-center py-4 max-w-7xl mx-auto w-full gap-4">
        

        <div className="flex-none">
          <Link href={"/"}>
            <h3 className="font-black text-2xl tracking-tighter text-[#27272a] dark:text-white uppercase">
              Slab<span className="text-[#06b6d4]">Studio</span>
            </h3>
          </Link>
        </div>

        <ul className="flex items-center gap-4 md:gap-8 text-xs md:text-sm font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
          <li>
            <Link href={"/"} className="hover:text-[#06b6d4] transition-colors">
              Home
            </Link>
          </li>
         
          <li>
            <Link href={"/all-tiles"} className="hover:text-[#06b6d4] transition-colors">
              All Tiles
            </Link>
          </li>
           <li>
            <Link href={"/profile"} className="hover:text-[#06b6d4] transition-colors">
              My Profile
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-3 md:gap-5">
          <Link 
            href={"/signup"} 
            className="text-xs md:text-sm font-bold text-zinc-600 dark:text-zinc-400 hover:text-[#27272a] dark:hover:text-white transition-colors"
          >
            SIGN UP
          </Link>
          <Link 
            href={"/signin"} 
            className="bg-[#27272a] dark:bg-[#06b6d4] text-white text-xs md:text-sm font-bold px-5 py-2 rounded-md hover:bg-[#06b6d4] dark:hover:bg-cyan-400 transition-all shadow-md hover:shadow-cyan-500/20"
          >
            SIGN IN
          </Link>
        </div>
        
      </nav>
    </div>
  );
};

export default Navbar;