'use client'
import Image from "next/image";
import React, {useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import all images
import Angular from "@/assets/Angular.png";
import bootstrap from "@/assets/bootstrap.png";
import css3 from "@/assets/css3.jpg";
import datastax from "@/assets/datastacx.png";
import express from "@/assets/express.png";
import firebase from "@/assets/firebase.png";
import gatsby from "@/assets/gatsby.png";
import github from "@/assets/github.png";
import graphql from "@/assets/graphql.png";
import html from "@/assets/html.png";
import js from "@/assets/js.jpg";
import laravel from "@/assets/laravel.png";
import mangodb from "@/assets/mangodb.png";
import mui from "@/assets/mui.png";
import mysql from "@/assets/mysql.png";
import nextjs from "@/assets/nextjs.png";
import node from "@/assets/node.png";
import openai from "@/assets/openai.png";
import reactIcon from "@/assets/react.png";
import redux from "@/assets/redux.png";
import scss from "@/assets/scss.png";
import serverless from "@/assets/serverless.png";
import tailwind from "@/assets/tailwind.png";
import typescript from "@/assets/typescript.png";
import upstash from "@/assets/upstash.png";



interface Tool {
  src: any;
  alt: string;
}

interface Pool {
  src: any;
  alt: string;
}

const tools: Tool[] = [
  { src: nextjs, alt: "Next.js" },
  { src: reactIcon, alt: "React" },
  { src: Angular, alt: "Angular" },
  { src: redux, alt: "Redux" },
  { src: js, alt: "JavaScript" },
  { src: css3, alt: "CSS3" },
  { src: html, alt: "HTML" },
  { src: node, alt: "Node.js" },
  { src: firebase, alt: "Firebase" },
  { src: mangodb, alt: "MongoDB" },
  { src: tailwind, alt: "Tailwind CSS" },
  { src: typescript, alt: "TypeScript" },

];

const pools: Pool[] = [
  { src: bootstrap, alt: "Bootstrap" },
  { src: mui, alt: "MUI" },
  { src: mysql, alt: "MySQL" },
  { src: openai, alt: "OpenAI" },
  { src: scss, alt: "SCSS" },
  { src: datastax, alt: "DataStax" },
  { src: express, alt: "Express" },
  { src: gatsby, alt: "Gatsby" },
  { src: graphql, alt: "GraphQL" },
  { src: laravel, alt: "Laravel" },
  { src: serverless, alt: "Serverless" },
  { src: upstash, alt: "Upstash" },


];


const Format: React.FC = () => {
  

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".skewElem", {transformOrigin: "right center", force3D: true});

  }, []);



  return (
    <section>
      <div className="py-16">
        <div className="mx-auto px-6 max-w-6xl text-gray-500">
          <div className="text-center">
            <h2 className="text-6xl text-gray-950 dark:text-white font-semibold">Tools Of The Present And Future</h2>
            <p className="mt-6 text-gray-700 dark:text-gray-300">Frontend and Other technologies I prefer using</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 skewElem">
            {/* Render each tool */}
            {tools.map((tool, index) => (
              <div key={index} className="relative group p-8 flex flex-col justify-center items-center shadow-lg inset-shadow-lg rounded-xl">
                <Image src={tool.src} alt={tool.alt} height={60} width={60} loading="lazy"/>
                <span>{tool.alt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      
        <div className="mx-auto px-6 max-w-6xl text-gray-500">
          <div className="text-center">
            <p className="mt-1 text-gray-700 dark:text-gray-300">Other technologies</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 skewElem">
            {/* Render each tool */}
            {pools.map((pool, index) => (
              <div key={index} className="relative group p-8 flex flex-col justify-center items-center shadow-lg inset-shadow-lg rounded-xl">
                <Image src={pool.src} alt={pool.alt} height={60} width={60} loading="lazy"/>
                <span>{pool.alt}</span>
              </div>
            ))}
          </div>
        </div>
   

    </section>
  );
};

export default Format;
