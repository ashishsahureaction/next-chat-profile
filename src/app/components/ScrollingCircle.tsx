'use client'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ScrollingCircle: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const circle = circleRef.current;
      const newSize = 0;
      gsap.to(circle, { duration: 0.5, width: newSize, height: newSize });
    };

    // Initially set the circle size
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen pointer-events-none ">
      <div ref={circleRef} className="w-screen h-screen rounded-full bg-orange-600 flex items-center justify-center pointer-events-auto">
       
      </div>
    </div>
  );
};

export default ScrollingCircle;


