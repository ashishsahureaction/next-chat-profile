"use client"
import gsap from "gsap";
import { useState } from "react";
import Link from 'next/link';
import { MdOutlineWhatsapp, MdWifiCalling3, MdTextsms } from "react-icons/md";
import { GiTireIronCross } from "react-icons/gi";

const Welcome: React.FC = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    const timeline = gsap.timeline();

    const closeMenu = () => {
        const context = gsap.context(() => {
            gsap.to(".menu_logo", {
                bottom: "-32px",
                stagger: 0.05,
                ease: "power4.inOut"
            });
            timeline.to(".menu_item", {
                top: "-100vh",
                stagger: 0.05,
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
                    display: 'none'
                });
            setToggleMenu(false);
        });
    };

    const openMenu = () => {
        const context = gsap.context(() => {
            gsap.to(".main_menu", {
                display: "flex",
            });
            gsap.to(".menu_logo", {
                delay: 0.75,
                bottom: 0,
                stagger: 0.05,
                duration: 1,
                ease: "power4.inOut"
            });
            timeline.to(".overlay", {
                height: "50%",
                duration: 0.4,
                ease: "power2.inOut",
            })
                .to(".overlay", {
                    height: "100vh",
                    width: "100vw",
                    ease: "power2.inOut"
                })
                .to(".menu_item", {
                    top: 0,
                    stagger: 0.05,
                });
        });
        setToggleMenu(true);
    };

    return (
        <header>
            <div className="flex justify-between w-full fixed z-20">
                <div className="h-fit font-bebas overflow-hidden pl-base pt-base flex gap-[2px] text-xl text-white ">
                    <span className="menu_logo -bottom-32 relative duration-300 font-sans"> Ashish Kumar Sahu</span>
                </div>

                <div>
                    <button onClick={() => openMenu()}
                        className={`text-indigo-900 font-bebas absolute z-10 text-xl duration-500 top-0 p-base 
                        ${toggleMenu === false ? "right-0" : "-right-96"} `}><MdOutlineWhatsapp size={40} color="#25D366" /> </button>

                    <button onClick={() => closeMenu()}
                        className={`text-indigo-900 font-bebas absolute z-10 text-xl duration-500 top-0 p-base 
                        ${toggleMenu === true ? "right-0" : "-right-96"} `}><GiTireIronCross size={40} /></button>
                </div>
            </div>

            <div className="main_menu absolute h-screen w-screen flex justify-center items-center">
                <div className="overlay absolute bg-orange-600 w-1/2 h-0">
                    <div className="absolute text-[4vw] bottom-20 left-0 overflow-hidden w-full">
                        <div className="flex-col flex w-full justify-center items-center">
                            <Link href="https://wa.me/+14379732998" className="flex items-center justify-center md:justify-start mt-4 hover:underline">
                                <span className="menu_item relative px-base pt-2 duration-150 -top-96 leading-none hover:bg-black hover:text-gray-600 flex items-center justify-center">
                                    <MdOutlineWhatsapp size={70} color="#25D366" />
                                    <span>Chat With Me</span>
                                </span>
                            </Link>

                            <Link href="sms:+14379732998" className="flex items-center justify-center md:justify-start mt-4 hover:underline">
                                <span className="menu_item relative px-base pt-2 duration-150 -top-96 leading-none hover:bg-black hover:text-gray-600 flex items-center justify-center">
                                    <MdTextsms size={70} />
                                    <span>SMS Me</span>
                                </span>
                            </Link>

                            <Link href="tel:+14379732998" className="flex items-center justify-center md:justify-start mt-4 hover:underline">
                                <span className="menu_item relative px-base pt-2 duration-150 -top-96 leading-none hover:bg-black hover:text-gray-600 flex items-center justify-center">
                                    <MdWifiCalling3 size={70} color="#25D366" />
                                    <span>Call Me</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Welcome;
