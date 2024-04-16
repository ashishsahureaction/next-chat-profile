import React from 'react';
import Image from 'next/image';
import myprofile from '@/assets/myprofile.png';
import { H2 } from '@/app/components/ui/H2';
import { Metadata } from "next";
import Link from "next/link";
import { RxExternalLink } from "react-icons/rx";
import { IoMdArrowForward } from "react-icons/io";


export const metadata: Metadata = {
    title: "My Profile View",
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
                alt="smartdairy"
                src={myprofile}
                className="object-center transform scale-100 hover:scale-105 duration-300 absolute inset-0 h-full w-full object-cover" 
                width={500} height={500}
                loading="lazy"
              /> 
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">My Profile View</h2>

              <p className="mt-4 text-justify">
              Provide a brief introduction about myself, highlighten my key skills and experiences.
              </p>
              <Link href="https://new-gsap-profile.vercel.app/" target="_blank" rel="noreferrer" className="relative flex items-center justify-center w-32 h-[46px] mt-4 rounded
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
          In my profile overview, I bring a diverse blend of experience in software development and project management.
          With a passion for innovation and a commitment to continuous learning, I thrive in dynamic environments. 
          My goal is to drive impactful solutions and contribute meaningfully to the intersection of technology and business.
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
      
    </ul>
  </div>
</section>


        <hr className="border-muted" />

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
       
       
     

      </section>
    </div>
  );
}

export default Page;
