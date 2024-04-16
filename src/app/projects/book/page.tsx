import React from 'react';
import Image from 'next/image';
import book from '@/assets/book.png';
import { H2 } from '@/app/components/ui/H2';
import { Metadata } from "next";
import Link from "next/link";
import { RxExternalLink } from "react-icons/rx";
import { IoMdArrowForward } from "react-icons/io";


export const metadata: Metadata = {
    title: "Book App",
    description: "Learn more about Ashish Sahu and his work.",
};

const Page = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 shadow-lg inset-shadow-lg">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 shadow-lg inset-shadow-lg">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full shadow-lg inset-shadow-lg">
              <Image
                alt="book app"
                src={book}
                className="object-center transform scale-100 hover:scale-105 duration-300 absolute inset-0 h-full w-full object-cover" 
                width={500} height={500}
                loading="lazy"
              /> 
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Book AI App</h2>

              <p className="mt-4 text-justify">
              The book app facilitates users in discovering, purchasing, and reading a wide range of books across various genres and topics.
              </p>
              <Link href="https://books-ai.app" target="_blank" rel="noreferrer" className="relative flex items-center justify-center w-32 h-[46px] mt-4 rounded
               px-10 py-3 border border-gray-800 text-sm font-medium hover:scale-95 bg-orange-600  shadow-2xl transition-all 
               duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear
                hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]">
  <span className="relative z-10">Explore</span>

  
  <span className="ml-1"><IoMdArrowForward  size={18}  /></span>
</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6 text-justify mx-auto max-w-3xl px-3 py-10">
        <section className="space-y-3">
          <H2 className="group hover:text-gray-600 transition-colors duration-300">
            <span className="opacity-0 group-hover:opacity-30 ml-1">#</span>Overview
          </H2>
          <p>
          The book app is a platform designed to provide users with access to a vast library of books, ranging from fiction to non-fiction,
           academic to recreational. It offers features such as personalized recommendations, user reviews, book previews, and easy 
           purchasing options. Additionally, users can track their reading progress, create custom reading lists, and interact 
           with fellow book enthusiasts through community forums and discussions.
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
        <span>Open AI</span> 
        <span className="text-pink-600 ml-2">: API</span>
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
          The book app enhances book discovery, tracking, and community engagement, simplifying reading experiences and fostering a vibrant community.
           I also noticed there were limited articles
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
            <li>Serach Point: Users can serach vast range of collections of books.</li>
            <li>Customized Landing Page: Custom recommendations appears.</li>
            <li className="flex items-center"> Open Sourced: This template is publicly available for use. You can check the              
                <Link href={"https://github.com/ashishsahureaction"}target="_blank" className=' text-primary hover:underline'>GitHub repository</Link>.<RxExternalLink className="ml-2" /></li>
          </ul></section>
          

        <section className="space-y-3">
          <H2 className="group hover:text-gray-600 transition-colors duration-300">
            <span className="opacity-0 group-hover:opacity-30 ml-1">#</span>Challenges and Learning
          </H2>
          <p ><Link href={"https://chat.openai.com/"}target="_blank" className=' text-primary hover:underline'>OpenAI</Link> was my first experience using a static site generator that supports markdown syntax so it was a fresh experience for me and I learned quite a lot.
          </p>
        </section>
       
       
     

      </section>
    </div>
  );
}

export default Page;
