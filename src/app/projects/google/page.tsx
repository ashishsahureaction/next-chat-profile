import React from 'react';
import Image from 'next/image';
import google from '@/assets/google.png';
import { H2 } from '@/app/components/ui/H2';
import { Metadata } from "next";
import Link from "next/link";
import { RxExternalLink } from "react-icons/rx";


export const metadata: Metadata = {
    title: "Google",
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
                src={google}
                className="object-center transform scale-100 hover:scale-105 duration-75 absolute inset-0 h-full w-full object-cover" 
                width={500} height={500}
              /> 
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Google</h2>

              <p className="mt-4 text-justify">
                
Google Search Engine revolutionized information retrieval by providing users with a fast, efficient,
 and comprehensive way to find relevant content on the internet.
              </p>

              <Link
                href="https://google-next-clone-eight.vercel.app/" target="_blank"
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
          Through its sophisticated algorithms and vast index of web pages, Google enables users to quickly locate 
          information on virtually any topic. With features like autocomplete, predictive search, and personalized results,
           Google Search Engine continues to be the go-to tool for billions of users worldwide, shaping how we access and interact 
           with online information
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
        <span>Google Search</span> 
        <span className="text-pink-600 ml-2">: Api</span>
      </li>
      <li className="text-green-600 flex items-center">
        <RxExternalLink className="mr-2" />
        <span>Heroku app</span> 
        <span className="text-pink-600 ml-2">: Random Word</span>
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
              <Link href={"https://www.freecodecamp.org/"} target="_blank" className=' text-primary hover:underline'>How to Build a Modern Documentation Site with OpenAI.</Link> 
              <RxExternalLink className="ml-2" /> </span>
          </p>

  </section>

        <section className="space-y-3">
          <H2 className="group hover:text-gray-600 transition-colors duration-300">
            <span className="opacity-0 group-hover:opacity-30 ml-1">#</span>Features and Functionality
          </H2>
          <ul className='list-disc' >
            <li>Preffered Location access with speech command.</li>
            <li>Customized Landing Page: Custom styles added using HTML and CSS.</li>
            <li className="flex items-center">Open Sourced: This template is publicly available for use. You can check the 
                
                <Link href={"https://github.com/ashishsahureaction"} target="_blank" className=' text-primary hover:underline'>GitHub repository</Link>.<RxExternalLink className="ml-2" /></li>
          </ul></section>

        <section className="space-y-3">
          <H2 className="group hover:text-gray-600 transition-colors duration-300">
            <span className="opacity-0 group-hover:opacity-30 ml-1">#</span>Challenges and Learning
          </H2>
          <p ><Link href={"https://www.google.com/"} target="_blank" className=' text-primary hover:underline'>Google Api</Link> was my first experience using a static site generator that supports markdown syntax so it was a fresh experience for me and I learned quite a lot.
          </p>
        </section>
       
       
     

      </section>
    </div>
  );
}

export default Page;
