"use client"

import Image from 'next/image';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SiYourtraveldottv, SiSmartthings, SiGoogleearthengine } from 'react-icons/si';
import sevenone from "@/assets/sevenone.jpg";
import three from "@/assets/three.jpg";
import one from "@/assets/one.jpg";


const LatestArticle: React.FC = () => {
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

  return (
    <div className="container my-16 mx-auto md:px-6 text-justify gs_reveal">
      <section className="mb-16 ">
        <h2 className="mb-16 text-center text-2xl font-bold gs_reveal">Some Projects</h2>

        <div className="mb-8 flex flex-wrap">
          <div className="mb-6 w-full lg:mb-0 lg:w-4/12 lg:pr-6 ml-32 gs_reveal">
            <div className="ripple relative overflow-hidden rounded-lg hover:scale-105 bg-cover bg-[50%] 
            bg-no-repeat shadow-lg gs_reveal gs_reveal_fromLeft">
              <Image src={sevenone} className="w-full" alt="Louvre" height={700} width={800} loading="lazy"/>
              <a href="/projects/google">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-6/12 lg:pl-6 mb-6 gs_reveal_fromRight">
            <h3 className="mb-4 text-2xl font-bold gs_reveal">Google Clone !</h3>
            <div className="mb-4 flex items-center text-sm font-medium text-danger dark:text-danger-500 gs_reveal">
              <SiYourtraveldottv size={16} color='blue' />
              Search
            </div>
            <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400 gs_reveal">
              Deployed <u>14.12.2023</u> by <a href="#!">Google Api</a>
            </p>
            <p className="mb-6 text-neutral-500 dark:text-neutral-300 gs_reveal">
              One of the most noticeable impacts of technology on society is its role in facilitating communication and connectivity. Technology has revolutionized society, facilitating communication, innovation, and efficiency. It connects people globally, transforms industries, and improves access to education and healthcare.
            </p>
            <p className="text-neutral-500 dark:text-neutral-300 gs_reveal">
              Technology has profoundly shaped society, revolutionizing communication, industry, and access to information. While it offers numerous benefits, such as connectivity and efficiency, it also presents challenges like job displacement, privacy concerns, and environmental impact.
            </p>
          </div>
        </div>

        <div className="mb-16 flex flex-wrap lg:flex-row-reverse">
        <div className="mb-6 w-full lg:mb-0 lg:w-4/12 lg:pr-6 ml-16  mr-24 gs_reveal_fromLeft">
            <div className="ripple relative overflow-hidden rounded-lg bg-cover gs_reveal gs_reveal_fromRight  hover:scale-105 bg-[50%] bg-no-repeat shadow-lg">
              <Image src={one} className="w-full" alt="Louvre" height={700} width={800} objectFit="contain" loading="lazy" />
              <a href="/projects/blog">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-6/12 ml-16          lg:pr-6 gs_reveal_fromRight">
            <h3 className="mb-4 text-2xl font-bold gs_reveal">Mern-Blog Exhibition !</h3>
            <div className="mb-4 flex items-center text-sm font-medium text-primary dark:text-primary-400 gs_reveal">
              <SiSmartthings size={16} color='green' />
              Sharing
            </div>
            <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400 gs_reveal">
              Deployed <u>12.03.2024</u> by <a href="#!">Mern</a>
            </p>
            <p className="mb-6 text-neutral-500 dark:text-neutral-300 gs_reveal">
              Blogs, once considered personal online diaries, have evolved into powerful platforms that shape opinions, influence markets, and connect communities in the digital age. As blogging gained popularity, it began to transcend personal narratives and take on a more prominent role in shaping public discourse.
            </p>
            <p className="text-neutral-500 dark:text-neutral-300 gs_reveal"> 
              The evolution of blogging reflects the broader transformation of media and communication in the digital age. As we look to the future, the spirit of blogging openness, authenticity, and inclusivity will continue to drive meaningful discourse and drive positive change in society.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap">
        <div className="mb-6 w-full lg:mb-0 lg:w-4/12 lg:pr-6 ml-32 gs_reveal_fromLeft">
            <div className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%]  gs_reveal gs_reveal_fromLeft hover:scale-105 bg-no-repeat shadow-lg dark:shadow-black/20" data-te-ripple-init data-te-ripple-color="light">
              <Image src={three} className="w-full" alt="Louvre" height={700} width={800} objectFit="contain" loading="lazy"/>
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-6/12 lg:pl-6 gs_reveal_fromRight">
            <h3 className="mb-4 text-2xl font-bold gs_reveal">Smart Dairy</h3>
            <div className="mb-4 flex items-center text-sm font-medium text-yellow-600 gs_reveal">
              <SiGoogleearthengine size={16} color='red' />
              Business
            </div>
            <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400 gs_reveal">
              Deployed <u>10.06.2023</u> by <a href="#!">LLM</a>
            </p>
            <p className="mb-6 text-neutral-500 dark:text-neutral-300 gs_reveal">
              Dairy farming plays a vital role in global agriculture, providing essential nutrients and livelihoods for millions of people worldwide. However, the industry faces numerous challenges, including environmental sustainability, animal welfare, and economic viability.
            </p>
            <p className="text-neutral-500 dark:text-neutral-300 gs_reveal">
              Dairy farmers are embracing modern technologies and sustainable practices to improve efficiency, reduce environmental impact, and ensure the welfare of their animals. This project explores innovative solutions for modernizing dairy farming while promoting sustainability and resilience in the face of evolving challenges.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatestArticle;



