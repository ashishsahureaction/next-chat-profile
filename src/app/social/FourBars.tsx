'use client'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";
const Component: React.FC = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        const animateFrom = (elem: HTMLElement, direction?: number) => {
          direction = direction ?? 1;
          const x = elem.classList.contains('gs_reveal_fromLeft') ? -100 : elem.classList.contains('gs_reveal_fromRight') ? 100 : 0;
          const y = direction * 100;
          
          elem.style.transform = `translate(${x}px, ${y}px)`;
          elem.style.opacity = '0';
          gsap.fromTo(elem, { x, y, autoAlpha: 0 }, {
            duration: 1.25,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: 'expo',
            overwrite: 'auto',
            scrollTrigger: {
              trigger: elem,
              start: 'top bottom-=100',
              toggleActions: 'play none none reverse',
            },
          });
        };
    
        const hide = (elem: HTMLElement) => {
          gsap.set(elem, { autoAlpha: 0 });
        };
    
        gsap.utils.toArray<HTMLElement>(".gs_reveal").forEach(function(elem) {
          hide(elem); 
     // Hide element initially
    
          ScrollTrigger.create({
            trigger: elem,
            start: 'top center+=100',
            onEnter: () => animateFrom(elem, 1),
            onEnterBack: () => animateFrom(elem, -1),
            onLeave: () => hide(elem) // Ensure the element is hidden when scrolled out of view
          });
        });
      }, []); 
    
    
  return (<>
 <hr></hr>

      <section className="w-full py-12 md:py-24 lg:py-32 gs_reveal ml-36">
        <div className="container grid gap-12 px-4 md:px-6 gs_reveal">
          <div className=" gs_reveal mx-auto grid max-w-5xl divide-y divide-border rounded-lg border border-gray-200 md:grid-cols-2 md:divide-x md:divide-y-0 dark:border-gray-800">
            <div className="grid gap-1 p-8 md:p-10 gs_reveal gs_reveal_fromLeft">
              <h3 className="text-2xl font-bold">Connect. Elevate.</h3>
              <p className="text-gray-500 dark:text-gray-400">
              Connecting passion with purpose, Building professional networks, fostering growth. Connect with industry leaders, share insights, and advance your career journey on LinkedIn today.
              </p>
            </div>
            <div className="p-4 md:p-0 gs_reveal gs_reveal_fromRight">
              <Image
                alt="Employee Management"
                className="mx-auto rounded-b-xl overflow-hidden object-cover aspect-[3/2] sm:aspect-[16/9] md:aspect-none md:rounded-xl lg:aspect-[16/9]"
                height={400}
                src="/images/linkdin.jpg"
                width={600}
              />
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl divide-y divide-border rounded-lg border border-gray-200 md:grid-cols-2 md:divide-x md:divide-y-0 dark:border-gray-800">
            <div className="p-4 md:p-0 gs_reveal gs_reveal_fromLeft">
              <Image
                alt="Payroll Processing"
                className="mx-auto rounded-t-xl overflow-hidden object-cover aspect-[3/2] sm:aspect-[16/9] md:aspect-none md:rounded-xl lg:aspect-[16/9]"
                height={400}
                src="/images/insta.jpg"
                width={600}
              />
            </div>
            <div className="grid gap-1 p-8 md:p-10 gs_reveal gs_reveal_fromRight">
              <h3 className="text-2xl font-bold">Scroll Inspire</h3>
              <p className="text-gray-500 dark:text-gray-400">
              Navigating life&apos;s twists and turns, I&apos;m here to share the little moments that make each day extraordinary. Join me on this adventure of discovery and joy! 
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl divide-y divide-border rounded-lg border  border-gray-200 md:grid-cols-2 md:divide-x md:divide-y-0 dark:border-gray-800">
            <div className="grid gap-1 p-8 md:p-10 gs_reveal gs_reveal_fromLeft">
              <h3 className="text-2xl font-bold">Subscribe for More!</h3>
              <p className="text-gray-500 dark:text-gray-400">
              Unleashing creativity, one video at a time. Subscribe now for inspiration, entertainment, and endless adventures.Hit subscribe for weekly uploads and let the adventure begin.
              </p>
            </div>
            <div className="p-4 md:p-0 gs_reveal gs_reveal_fromRight">
              <Image
                alt="Time Tracking"
                className="mx-auto rounded-t-xl overflow-hidden object-cover aspect-[3/2] sm:aspect-[16/9] md:aspect-none md:rounded-xl lg:aspect-[16/9]"
                height={400}
                src="/images/you.jpg"
                width={600}
              />
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl divide-y divide-border rounded-lg border border-gray-200 md:grid-cols-2 md:divide-x md:divide-y-0 dark:border-gray-800">
            <div className="p-4 md:p-0 gs_reveal gs_reveal_fromLeft">
              <Image
                alt="Reports & Analytics"
                className="mx-auto rounded-t-xl overflow-hidden object-cover aspect-[3/2] sm:aspect-[16/9] md:aspect-none md:rounded-xl lg:aspect-[16/9]"
                height={400}
                src="/images/tiktok.jpg"
                width={600}
              />
            </div>
            <div className="grid gap-1 p-8 md:p-10 gs_reveal gs_reveal_fromRight">
              <h3 className="text-2xl font-bold">Creative Connection</h3>
              <p className="text-gray-500 dark:text-gray-400">
              Explore trends, showcase talent, and connect with a global audience. Unleash creativity on TikTok! Join a vibrant community, share moments, and discover trends. Start creating and connecting in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>
      </>
  );
};

export default Component;
