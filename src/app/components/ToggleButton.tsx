"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { BurgerBoughie } from "react-burger-icons";

const ToggleButton: React.FC = () => {
  const [isToggled, setIsToggled ] = useState(false);

  const handleToggle = () => {
    const liElements = document.querySelectorAll('.menu_item');
    liElements.forEach((item) => item.classList.toggle('active'));
    setIsToggled((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    setIsToggled(false);
  };

  return (
    <div className="rounded-3xl overflow-y-scroll no-scrollbar">
  
  <button className="fixed top-3 left-5 z-50 px-5 py-2 hover: text-orange-600"
        onClick={() => setIsToggled(!isToggled)}
        style={{
          width: "40px",
          height: "40px",
          display: "grid",
          placeItems: "center",
          
        }}>
  <BurgerBoughie isClosed={isToggled} className="w-6 h-6 hover: text-orange-600" />
</button>
      <nav
        className={`fixed right-0 h-full w-full ${
          isToggled ? 'dark translate-x-0 transition-all duration-500' : '-translate-x-full transition-all duration-500'
        }`}
      >
        <div className="flex justify-center items-center p-20">
          <div className={`${isToggled ? 'w-3/4' : 'hidden'} sm:w-3/4 w-full h-full absolute right-0`}>
            <ul>
              <li className="menu_item bg-gray-200 z-30 absolute rounded-lg right-0 top-0 border-b-2 border-l-2 border-zinc-400 group
               hover:bg-orange-600 duration-500 font-bebas text-[6vw] sm:text-[3vw] h-2/4 w-2/4 dark:text-zinc-600 dark:hover:text-black" >
                <Link href="/" passHref legacyBehavior>
                  <a onClick={handleLinkClick} className="h-full leading-none group-hover:text-white duration-300 flex justify-start pl-5 pb-5 items-end">
                    Home
                  </a>
                </Link>
              </li>
              <li className="menu_item bg-gray-200 z-20 rounded-lg absolute right-0 top-0 border-b-2 border-l-2 border-zinc-400 group
               hover:bg-orange-600 duration-500 font-bebas text-[6vw] sm:text-[3vw] h-3/4 w-3/4 dark:text-zinc-600 
                dark:hover:text-black" >
                <Link href="/ashish_resume.pdf"  passHref legacyBehavior>
                  <a onClick={handleLinkClick} target='blank' className="h-full leading-none group-hover:text-white duration-300 flex justify-start pl-5 pb-5 items-end">
                    Resume
                  </a>
                </Link>
              </li>
              <li className="menu_item bg-gray-200 rounded-lg z-10 absolute right-0 top-0 border-b-2 border-l-2 border-zinc-400 group
               hover:bg-orange-600 duration-500 font-bebas text-[6vw] sm:text-[3vw] h-full w-full dark:text-zinc-600 dark:hover:text-black">
                <Link href="/projects" passHref legacyBehavior>
                  <a onClick={handleLinkClick} className="h-full leading-none group-hover:text-white duration-300 flex justify-start pl-5 pb-5 items-end">
                    Projects
                  </a>
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ToggleButton;


