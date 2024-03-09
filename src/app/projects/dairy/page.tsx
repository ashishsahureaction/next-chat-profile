import React from 'react';
import Image from 'next/image';
import smartdairy from '@/assets/smartdairy.png';
import { H2 } from '@/app/components/ui/H2';
import { Metadata } from "next";
import Link from "next/link";
import { RxExternalLink } from "react-icons/rx";


export const metadata: Metadata = {
    title: "Smart Dairy",
    description: "Learn more about Ashish Sahu and his work.",
};

const Page = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                alt="smartdairy"
                src={smartdairy}
                className="object-center transform scale-100 hover:scale-105 duration-75 absolute inset-0 h-full w-full object-cover" 
                width={500} height={500}
              /> 
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Smart Dairy</h2>

              <p className="mt-4 text-justify">
                Smart Diary is your personal AI assistant, coach, mentor, therapist, and friend. Chat with the AI assistant about your past entries. 
                Get summaries, tips for improvement, or just some encouraging words.
              </p>

              <Link
                href="https://www.smartdiary.co/ "  target="_blank" rel="noreferrer"
                className="mt-4 inline-block rounded px-10 py-3 text-sm font-medium transition hover:border"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6 text-justify">
        <section className="space-y-3">
          <H2 className="group hover:text-gray-600 transition-colors duration-300">
            <span className="opacity-0 group-hover:opacity-30 ml-1">#</span>Overview
          </H2>
          <p>
            Smart Dairy is an innovative dairy web application that revamps and automates the way dairy products are sold.
            This platform is designed for user-friendliness and efficiency. Users, whether seasoned dairy users or employees, can enjoy a seamless and enjoyable experience on the platform.
            As the lead frontend developer, I built and managed the UI interface of Smart Dairy.
          </p>
        </section>

        <hr className="border-muted" />

        <section className="space-y-3">
  <H2 className="group hover:text-gray-600 transition-colors duration-300">
    <span className="opacity-0 group-hover:opacity-30 ml-1">#</span>Stack/Technologies
  </H2>
  <div className="container mx-auto p-4 text-justify">
    <ul className="list-disc">
      <li className="text-green-600 flex items-center">
        <RxExternalLink className="mr-2" />
        <span>Next.js</span> 
        <span className="text-pink-600 ml-2">: UI Framework</span>
      </li>
      <li className="text-green-600 flex items-center">
        <RxExternalLink className="mr-2" />
        <span>Tailwind CSS</span> 
        <span className="text-pink-600 ml-2">: A utility-first CSS framework</span>
      </li>
      <li className="text-green-600 flex items-center">
        <RxExternalLink className="mr-2" />
        <span>Vercel</span> 
        <span className="text-pink-600 ml-2">: Hosting and Deployment</span>
      </li>
      <li className="text-green-600 flex items-center">
        <RxExternalLink className="mr-2" />
        <span>Google Maps</span> 
        <span className="text-pink-600 ml-2">: Location and Markers</span>
      </li>
      <li className="text-green-600 flex items-center">
        <RxExternalLink className="mr-2" />
        <span>Node.js</span> 
        <span className="text-pink-600 ml-2">: Backend</span>
      </li>
      <li className="text-green-600 flex items-center">
        <RxExternalLink className="mr-2" />
        <span>MongoDB</span> 
        <span className="text-pink-600 ml-2">: Database</span>
      </li>
      <li className="text-green-600 flex items-center">
        <RxExternalLink className="mr-2" />
        <span>Datastax</span> 
        <span className="text-pink-600 ml-2">: Vector Database</span>
      </li>
      <li className="text-green-600 flex items-center">
        <RxExternalLink className="mr-2" />
        <span>Langchain</span> 
        <span className="text-pink-600 ml-2">: Large Language Model</span>
      </li>
    </ul>
  </div>
</section>


        <hr className="border-muted" />

        <section className="space-y-4 text-justify">
          <H2 className="group hover:text-gray-600 transition-colors duration-300">
            <span className="opacity-0 group-hover:opacity-30 ml-1">#</span>Problem Statement
          </H2>
          <p>
            I wasn&apos;t really thinking about any problem in particular when I built Smart Dairy. This was just a template I thought would help
            developers build their documentation sites quickly without having to code it from scratch. I also noticed there were limited articles
            on how to use the OpenAI API so I read an article that is published on freeCodeCamp:   <span className="flex items-center">
              <Link href={"https://www.freecodecamp.org/"}  target="_blank" className=' text-primary hover:underline'>How to Build a Modern Documentation Site with OpenAI.</Link> 
              <RxExternalLink className="ml-2" /> </span>
          </p>

  </section>

        <section className="space-y-3">
          <H2 className="group hover:text-gray-600 transition-colors duration-300">
            <span className="opacity-0 group-hover:opacity-30 ml-1">#</span>Features and Functionality
          </H2>
          <ul className='list-disc' >
            <li>Theme Switcher: Users can toggle their preferred color theme mode.</li>
            <li>Customized Landing Page: Custom styles added using HTML and CSS.</li>
            <li className="flex items-center">Open Sourced: This template is publicly available for use. You can check the 
                
                <Link href={"https://github.com/ashishsahureaction"} target="_blank" className=' text-primary hover:underline'>GitHub repository</Link>.<RxExternalLink className="ml-2" /></li>
          </ul></section>

        <section className="space-y-3">
          <H2 className="group hover:text-gray-600 transition-colors duration-300">
            <span className="opacity-0 group-hover:opacity-30 ml-1">#</span>Challenges and Learning
          </H2>
          <p ><Link href={"https://chat.openai.com/"} className=' text-primary hover:underline'>OpenAI</Link> was my first experience using a static site generator that supports markdown syntax so it was a fresh experience for me and I learned quite a lot.
          </p>
        </section>
       
       
     

      </section>
    </div>
  );
}

export default Page;
