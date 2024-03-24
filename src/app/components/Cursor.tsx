'use client'
import React, { useEffect } from 'react';
import gsap from 'gsap';

const Cursor: React.FC = () => {
  useEffect(() => {
    const cursor: HTMLElement | null = document.querySelector(".cursor");

    if (!cursor) return;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const pos: { x: number; y: number } = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse: { x: number; y: number } = { x: pos.x, y: pos.y };
    const speed: number = 0.1;

    const xSet = gsap.quickSetter(cursor, "x", "px");
    const ySet = gsap.quickSetter(cursor, "y", "px");

    const mouseMoveHandler = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", mouseMoveHandler);

    const animationTick = () => {
      const dt: number = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    };

    const ticker = gsap.ticker.add(animationTick);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      if (ticker) {
        gsap.ticker.remove(ticker);
      }
    };
  }, []);

  return (
    <div className="fixed w-7 h-7 bg-transparent border-2 border-orange-600 rounded-full pointer-events-none cursor"></div>
  );
};

export default Cursor;
