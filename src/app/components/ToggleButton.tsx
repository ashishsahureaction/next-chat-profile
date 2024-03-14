'use client'
import { LuAlignJustify } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { FaDownload } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaSuitcase } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import React, { useState } from 'react';


const ToggleButton: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);


  const handleToggle = () => {
    setIsToggled(prevState => !prevState);
  };

  return (
    <div>
<button
      className={`fixed top-4 left-5 z-50 dark px-5 py-2 hover:text-orange-600   ${isToggled ? 'dark' : 'light'}`}
      onClick={handleToggle}
    >
      {isToggled ?  <RxCross1 size={25}/> : <LuAlignJustify size={25} />  }
    </button>

    <nav className={`fixed top-4 left-0 h-full w-28 dark   ${isToggled ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex justify-center items-center p-20">
        
      
      <ul className="p-4" >
        <li><a href="/" className="block py-5 w-20 hover:scale- hover:text-orange-600 " title= "Home" ><IoHome size={20}/></a></li>
        <li><a href="/ashish_resume.pdf" className="block py-5 w-20 hover:scale-90 hover:text-orange-600 "  target='_blank' title= "Download"><FaDownload /></a></li>
        <li><a href="/projects" className="block py-5 w-20 hover:scale-90  hover:text-orange-600  " title= "Project"><FaSuitcase /></a></li>
        <li><a href="#" className="block py-5 w-20 hover:scale-90 hover:text-orange-600 " title= "Call Me"><FaPhoneAlt /></a></li>
      </ul>
      </div>
    </nav>
    </div>
    

    
  );
};

export default ToggleButton;
