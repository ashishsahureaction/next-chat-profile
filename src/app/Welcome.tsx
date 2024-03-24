'use client'
import React, { useState } from "react";
import gsap from "gsap";
import Link from "next/link";

const Welcome: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const timeline = gsap.timeline();

  const closeMenu = () => {
    gsap.to(".menu_logo", {
      bottom: "-32px",
      stagger: 0.05,
      ease: "power4.inOut"
    });
    timeline
      .to(".menu_item", {
        top: "-100vh",
        stagger: 0.05
      })
      .to(".overlay", {
        width: "50vw",
        height: "50vh",
        duration: 0.3,
        ease: "power2.inOut"
      })
      .to(".overlay", {
        height: "0",
        duration: 0.3,
        ease: "power2.inOut"
      })
      .to(".main_menu", {
        display: "none"
      });

    setToggleMenu(false);
  };

  const openMenu = () => {
    gsap.to(".main_menu", {
      display: "flex"
    });
    gsap.to(".menu_logo", {
      delay: 0.75,
      bottom: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power4.inOut"
    });

    timeline
      .to(".overlay", {
        height: "50%",
        duration: 0.4,
        ease: "power2.inOut"
      })
      .to(".overlay", {
        height: "100vh",
        width: "100vw",
        ease: "power2.inOut"
      })
      .to(".menu_item", {
        top: 0,
        stagger: 0.05
      });

    setToggleMenu(true);
  };

  return (
    <header>
      <div className="flex justify-between w-full fixed z-20">
        <div className="h-fit font-bebas overflow-hidden pl-base pt-base flex gap-[2px] text-xl text-white ">
          <span className="menu_logo -bottom-32 relative duration-300 font-sans">
            {" "}
            Ashish Kumar Sahu
          </span>
        </div>

        <div>
          <button
            onClick={openMenu}
            className={`text-indigo-900 font-bebas absolute z-10 text-xl duration-500  p-base 
              ${toggleMenu === false ? "right-0" : "-right-96"} `}
          >
            Menu
          </button>

          <button
            onClick={closeMenu}
            className={`text-indigo-900 font-bebas absolute z-10 text-xl duration-500 top-0 p-base 
              ${toggleMenu === true ? "right-0" : "-right-96"} `}
          >
            Close
          </button>
        </div>
      </div>

      <div className="main_menu absolute h-screen w-screen flex justify-center items-center ">
        <div className="overlay absolute bg-orange-600 w-1/2 h-0">
          <div className="absolute font-bebas text-[9vw] bottom-0 left-0 overflow-hidden w-full  ">
            <div className="flex-col flex w-full">
              
              <p className="overflow-hidden flex-col flex w-full text-center ">
              
                  <span className="menu_item relative px-base pt-2 duration-150 -top-96 leading-none hover:bg-black hover:text-gray-600 w-full">
                    Home
                  </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Welcome;
