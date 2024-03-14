'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import ThemeToggle from "./ThemeToggle";
import AIChatButton from "./AIChatButton";
import ToggleButton from "./ToggleButton";

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
      <span className={`absolute bottom-0 left-0 w-full h-0.5   bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 transition duration-300 ease-in origin-left ${isActive ? 'scale-x-100' : ''}`} />
    </a>
  </Link>
  );
};

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 bg-gray-200  py-0 dark:bg-gray-950 ">
      <div className="mx-auto flex max-w-3xl flex-wrap justify-between gap-3 px-3 py-4">
        <nav className="space-x-4 font-medium">
          <NavLink href="/" text="Home" isActive={pathname === '/'} />
          <NavLink href="/about" text="About" isActive={pathname === '/about'} />
          <NavLink href="/social" text="Social" isActive={pathname === '/social'} />
          <NavLink href="/contact" text="Contact" isActive={pathname === '/contact'} />
        </nav>
        <div className="flex items-center gap-4">
          <AIChatButton />
          <div className="hover:text-orange-600 hover:scale-95"><ThemeToggle/></div>
        </div>
      </div>
      <div className="hidden md:block">
        <ToggleButton />
      </div>
    </header>
  );
};

export default Navbar;
