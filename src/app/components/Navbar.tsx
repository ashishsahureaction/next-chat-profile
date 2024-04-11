'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import ThemeToggle from "./ThemeToggle";
import AIChatButton from "./AIChatButton";
import ToggleButton from "./ToggleButton";
import { useEffect } from 'react';
import { gsap } from 'gsap';




interface NavLinkProps {
  href: string;
  text: string;
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, text, isActive }) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <a className={`relative inline-block ${isActive ? 'text-orange-600 font-bold' : 'text-gray-500'}`}>
        {text}
        <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 transition duration-300 ease-in origin-left ${isActive ? 'scale-x-100' : ''}`} />
      </a>
    </Link>
  );
};

const Navbar: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        // If the user scrolls down, blur the content above the navbar
        if (scrollPosition > 0) {
          gsap.to('.blur-content', { duration: 0.5, css: { filter: 'blur(5px)' } });
        } else {
          gsap.to('.blur-content', { duration: 0.5, css: { filter: 'blur(0px)' } });
        }
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar sticky top-0 light: bg-transparent light: bg-gray-100 dark:bg-transparent backdrop-blur-10 z-50">
      <div className="container mx-auto px-4">
        <header className="sticky top-0 bg-transparent backdrop-blur-10">
          <div className="mx-auto flex max-w-3xl flex-wrap justify-between gap-3 px-3 py-4 blur-content">
            <nav className="space-x-12 font-medium">
              <NavLink href="/" text="Home" isActive={pathname === '/'} />
              <NavLink href="/about" text="About" isActive={pathname === '/about'} />
              <NavLink href="/social" text="Social" isActive={pathname === '/social'} />
              <NavLink href="/blog" text="Blog" isActive={pathname === '/blog'} />
              <NavLink href="/contact" text="Contact" isActive={pathname === '/contact'} />
             
              

            </nav>
            <div className="flex items-center gap-10">
              <AIChatButton />
              <ThemeToggle />
              
            </div>
          </div>
          <div className="hidden md:block">
            <ToggleButton />
          </div>
        
        
       
        </header>
      </div>
    </nav>
  );
};

export default Navbar;


