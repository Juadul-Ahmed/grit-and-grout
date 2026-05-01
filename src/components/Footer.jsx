import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-zinc-200 dark:border-zinc-800">
    
      <div className="absolute inset-0 -z-10 bg-[#fafafa] dark:bg-[#0f172a]" />

     
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-tr 
        from-cyan-500/5 via-transparent to-zinc-500/5 
        dark:from-cyan-500/10 dark:to-zinc-500/10 blur-3xl"
      />

    
      <div className="max-w-7xl mx-auto px-6 py-16">
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          
       
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-black tracking-tighter text-[#27272a] dark:text-white uppercase">
              Slab<span className="text-[#06b6d4]">Studio</span>
            </h2>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-sm">
              Defining the foundation of modern design with premium porcelain and architectural surfaces. Excellence in every grid.
            </p>
          
            <div className="flex gap-5 text-zinc-500 dark:text-zinc-400">
              <Link href="#" className="hover:text-[#06b6d4] transition-colors"><FaTwitter size={20} /></Link>
              <Link href="#" className="hover:text-[#06b6d4] transition-colors"><FaGithub size={20} /></Link>
              <Link href="#" className="hover:text-[#06b6d4] transition-colors"><FaLinkedin size={20} /></Link>
            </div>
          </div>

          
          <div>
            <h3 className="text-sm font-bold text-[#27272a] dark:text-white uppercase tracking-widest mb-6">
              Product
            </h3>
            <ul className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="/all-tiles" className="hover:text-[#06b6d4] transition">Collection</Link></li>
              <li><Link href="#" className="hover:text-[#06b6d4] transition">Pricing</Link></li>
              <li><Link href="#" className="hover:text-[#06b6d4] transition">Virtual Showroom</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#27272a] dark:text-white uppercase tracking-widest mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#06b6d4]" />
                <span>info@slabstudio.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-[#06b6d4]" />
                <span>+8617713836074</span>
              </li>
              <li className="text-xs leading-tight">
                Floor 13, Tianfu Twin Tower<br />
                Chengdu, China
              </li>
            </ul>
          </div>

  
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-[#27272a] dark:text-white uppercase tracking-widest">
              Join the Studio
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Ready to start your project?
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md 
              bg-[#27272a] text-white dark:bg-[#06b6d4] dark:text-white
              text-sm font-bold transition-all duration-200 
              hover:bg-[#06b6d4] dark:hover:bg-cyan-400 hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium text-zinc-500 dark:text-zinc-500">
          <p>© {new Date().getFullYear()} SlabStudio. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="#" className="hover:text-[#06b6d4] transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#06b6d4] transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;