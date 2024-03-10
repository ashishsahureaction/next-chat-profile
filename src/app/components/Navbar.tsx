import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AIChatButton from "./AIChatButton";
import ToggleButton from "./ToggleButton";




export default function Navbar() {
  return (
    <header className="sticky top-0 bg-background">
      <div className="mx-auto flex max-w-3xl flex-wrap justify-between gap-3 px-3 py-4">
        <nav className="space-x-4 font-medium" >
          <Link href="/" className="hover:text-gray-400 hover:underline">Home</Link>
          <Link href="/about"  className="hover:text-gray-400 hover:underline ">About</Link>
          <Link href="/social" className="hover:text-gray-400 hover:underline">Social</Link>
          <Link href="/contact" className="hover:text-gray-400 hover:underline">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
         
          <AIChatButton/>
          
          <div className="hover:text-gray-400"><ThemeToggle/></div>
          
          
        </div>
      </div>
      <div className="hidden md:block">
      <ToggleButton />
      </div>
  
    </header>
    
  );
}