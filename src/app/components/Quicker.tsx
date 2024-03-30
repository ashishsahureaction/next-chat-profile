'use client'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoLogoBuffer, IoLogoFlickr, IoLogoCodepen , IoLogoDribbble , IoLogoEuro, IoLogoIonic  } from "react-icons/io";


const Quicker: React.FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const sections = gsap.utils.toArray('.website-section') as HTMLElement[];
    sections.forEach(section => {
      const elems = section.querySelectorAll('.js-content-opacity');
      // Set things up
      gsap.set(elems, { y: 50, opacity: 0 });
      
      ScrollTrigger.create({
        trigger: section,
        start: 'top 60%',
        onEnter: () => gsap.to(elems, {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          delay: 0.3,
          ease: 'power3.out',
          overwrite: 'auto'
        }),
        onLeaveBack: () => gsap.to(elems, {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          delay: 0.3,
          ease: 'power3.out',
          overwrite: 'auto'
        })
      });
    })

    
  }, []); 



  return (<> 
    <section className='website-section'>

     
      <div className="py-16 ">
        <div className="mx-auto px-6 max-w-6xl text-gray-500 ">
          <div className="text-center">
            <h2 className="text-3xl text-gray-950 dark:text-white font-semibold">Front-End Development</h2>
            <p className="mt-6 text-gray-700 dark:text-gray-300">Customer satisfaction comes first, and in order to do that I decided to pickup skills and principles to provide quality service</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">

            {/* Card 1 */}
            <div className="relative group p-8 bg-white border border-gray-200 flex flex-col dark:bg-slate-200 justify-center 
            items-center  shadow-lg inset-shadow-lg rounded-xl js-content-opacity hover:scale-105">
              <div className="border border-green-500/10 flex relative rounded-lg dark:bg-gray-900 dark:border-white/15 
              before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-green-100
               dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow
                dark:before:shadow-gray-950">
                <IoLogoFlickr color='blue' size={40}/>
              </div>
              <div className="mt-6 pb-6 text-center  ">Continous Support
                <p className="text-gray-700 dark:text-gray-900">Optimize web software for competitiveness, ensuring swift 
                updates and regular feature releases through efficient DevOps practices.</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="relative group p-8 bg-white border border-gray-200 flex flex-col dark:bg-slate-200 justify-center items-center shadow-lg 
            inset-shadow-lg rounded-xl js-content-opacity hover:scale-105">
              <div className="border border-green-500/10 flex relative rounded-lg dark:bg-gray-900 dark:border-white/15 
              before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-green-100
               dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow
                dark:before:shadow-gray-950">
                <IoLogoCodepen color='blue' size={40}/>
              </div>
              <div className="mt-6 pb-6 text-center  ">Frontend design/dev
                <p className="text-gray-700 dark:text-gray-900">Analyze user needs, design UIs, to build web apps that meet 
                those needs effectively.</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="relative group p-8 bg-white border border-gray-200 flex flex-col dark:bg-slate-200 
            justify-center items-center shadow-lg inset-shadow-lg rounded-xl js-content-opacity hover:scale-105">
              <div className="border border-green-500/10 flex relative rounded-lg dark:bg-gray-900 dark:border-white/15 
              before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-green-100
               dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow
                dark:before:shadow-gray-950">
                <IoLogoBuffer color='blue' size={40}/>
              </div>
              <div className="mt-6 pb-6 text-center  ">Feedback Collaboration
                <p className="text-gray-700 dark:text-gray-900">Incorporating user feedback into development processes for continuous improvement and enhanced user experience.</p>
              </div>
            </div>
            {/* Add more cards here */}
          </div>
        </div>
      </div>
      
<section className='two'>
<div className="py-16 js-content-opacity">
        <div className="mx-auto px-6 max-w-6xl text-gray-500">
          <div className="text-center">
            <h2 className="text-3xl text-gray-950 dark:text-white font-semibold">Back-End Development</h2>
            <p className="mt-6 text-gray-700 dark:text-gray-300">You are Safe And in Good Hands and Rest assured, safety and security are our top priorities</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* Card 1 */}
            <div className="relative group p-8 bg-white border border-gray-200 flex flex-col dark:bg-slate-200 justify-center 
            items-center  shadow-lg inset-shadow-lg rounded-xl js-content-opacity hover:scale-105">
              <div className="border border-green-500/10 flex relative rounded-lg dark:bg-gray-900 dark:border-white/15 
              before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-green-100
               dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow
                dark:before:shadow-gray-950 ">
                <IoLogoDribbble color='blue' size={40}/>
              </div>
              <div className="mt-6 pb-6 text-center  ">System Integration
                <p className="text-gray-700 dark:text-gray-900">Streamlining the interaction between different software systems to optimize efficiency, data flow, and functionality across the organization.</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="relative group p-8 bg-white border border-gray-200 flex flex-col dark:bg-slate-200 justify-center 
            items-center shadow-lg inset-shadow-lg  rounded-xl js-content-opacity hover:scale-105">
              <div className="border border-green-500/10 flex relative rounded-lg dark:bg-gray-900 dark:border-white/15 
              before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-green-100
               dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow
                dark:before:shadow-gray-950">
                <IoLogoEuro color='blue' size={40}/>
              </div>
              <div className="mt-6 pb-6 text-center  ">Infrastructure Support
                <p className="text-gray-700 dark:text-gray-900">Ensuring smooth operation and reliability of infrastructure through essential technical assistance and maintenance.</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="relative group p-8 bg-white border border-gray-200 flex flex-col  dark:bg-slate-200 justify-center 
            items-center shadow-lg inset-shadow-lg rounded-xl js-content-opacity hover:scale-105">
              <div className="border border-green-500/10 flex relative rounded-lg dark:bg-gray-900 dark:border-white/15 
              before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-green-100
               dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow
                dark:before:shadow-gray-950">
                <IoLogoIonic color='blue' size={40}/>
              </div>
              <div className="mt-6 pb-6 text-center  ">Architecture Design
                <p className="text-gray-700 dark:text-gray-900">
Designing detailed software/system blueprints for scalability, performance, security, and business alignment.</p>
              </div>
            </div>
            {/* Add more cards here */}
          </div>
        </div>
      </div>


</section>

      

    </section>

    </>
  );
};

export default Quicker;


