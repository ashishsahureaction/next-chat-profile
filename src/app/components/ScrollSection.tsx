'use client'

import React, { useRef, useEffect } from "react";
import { gsap, Power0 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Feature from "./Feature";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null); // Specify HTMLDivElement type for sectionRef
  const triggerRef = useRef<HTMLDivElement>(null); // Specify HTMLDivElement type for triggerRef

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const triggerElement = triggerRef.current;

    if (sectionElement && triggerElement) {
      const pin = gsap.fromTo(
        sectionElement,
        {
          x: 0,
        },
        {
          x: "-100vw",
          ease: Power0.easeNone, // Specify easing function
          duration: 1,
          scrollTrigger: {
            trigger: triggerElement,
            start: "top top",
            end: "100 top",
            scrub: 4,
            pin: true,
          },
        }
      );

      return () => {
        pin.kill();
      };
    }
  }, []);

  return (
    <section className="scroll-section-outer ">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <Feature />
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;


