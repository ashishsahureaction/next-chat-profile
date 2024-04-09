'use client'

import { useRef, useEffect } from "react";

interface GreetingProps {}

const String: React.FC<GreetingProps> = () => {
  const path = useRef<SVGPathElement>(null);
  let progress: number = 0;
  let x: number = 0.5;
  let time: number = Math.PI / 2;
  let reqId: number | null = null;

  useEffect(() => {
    setPath(progress);
  }, [ ]  );

  const setPath = (progress: number) => {
    const width: number = window.innerWidth * 1;
    path.current?.setAttributeNS(
      null,
      "d",
      `M0 250 Q${width * x} ${250 + progress}, ${width} 250`
    );
  };

  const lerp = (x: number, y: number, a: number): number => x * (1 - a) + y * a;

  const manageMouseEnter = () => {
    if (reqId) {
      cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  const manageMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { movementY, clientX } = e;
    const pathBound = path.current?.getBoundingClientRect();
    if (pathBound) {
      x = (clientX - pathBound.left) / pathBound.width;
      progress += movementY;
      setPath(progress);
    }
  };

  const manageMouseLeave = () => {
    animateOut();
  };

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time += 0.2;
    setPath(newProgress);
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };

  return (
    <div className="flex flex-col items-end w-full">
      <div className="relative w-full h-px mb-5">
        <div
          onMouseEnter={manageMouseEnter}
          onMouseMove={manageMouseMove}
          onMouseLeave={manageMouseLeave}
          className="relative z-10 h-10 w-full top-[-40px]"
        ></div>
        <svg className="absolute w-full h-[500px] top-[-250px]">
          <path
            ref={path}
            className="stroke-current stroke-[1px] fill-none"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default String;
