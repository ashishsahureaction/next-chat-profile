import React from 'react';
import { BiLogoYelp, BiMapPin, BiLogoJoomla, BiRightArrowAlt, BiGridVertical } from 'react-icons/bi';
import Link from 'next/link';
import Image from 'next/image';
import fut from '@/assets/fut.jpg';

const InfoSection: React.FC<{ icon: JSX.Element; title: string; description: React.ReactNode }> = ({ icon, title, description }) => (
  <div className="md:flex md:items-start md:-mx-4">
    <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
      {icon}
    </span>
    <div className="mt-4 md:mx-4 md:mt-0 left-0">
      <h1 className="text-xl font-semibold  capitalize dark:text-white text-left">{title}</h1>
      <p className="mt-3 text-gray-500 dark:text-gray-300 text-justify">{description}</p>
    </div>
  </div>
);

const Future: React.FC = () => {
  return (
    <section className=" shadow-lg inset-shadow-lg">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center">
          <div className="w-full space-y-12 lg:w-1/2">
            <div>
              <h1 className="text-2xl font-semibold capitalize lg:text-3xl">Genrali Global Health <br /> Senior Front-End Developer</h1>
              <div className="mt-2">
                <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
              </div>
            </div>

            <InfoSection
              icon={<BiLogoYelp className="w-6 h-6" />}
              title="Start Date and End Date"
              description="July 2016 - Mar 2019"
            />
            <InfoSection
              icon={<BiMapPin className="w-6 h-6" />}
              title="Teck-Stack"
              description="NextJs, ReactJs, JavaScript, NodeJs, Redux, ExpressJs, Tailwind, Jasmine, Typescript, StoryBook, SASS, HTML5."
            />
            <InfoSection
              icon={<BiLogoJoomla className="w-6 h-6" />}
              title="Roles and Responsibilities"
              description={
                <>
                  ● Content management system (CMS) is built for internal users to use, edit, and customize information as per their needs.<br />
                  ● Developed and configured the Core System Integration Services, resulting in improvement in data retrieval speed.<br />
                  ●	Created modular, scalable, well-tested, and optimized React Component Library.
                </>
              }
            />
          </div>

          <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
            <Image className="w-[28rem] h-[28rem] object-contain xl:w-[34rem] xl:h-[34rem] rounded-full" 
            src={fut} width={755} height={755} alt="" loading="lazy"/>
          </div>
        </div>

        <Link href="https://www.cencora.com/" target="_blank" rel="noreferrer" className="relative flex items-center justify-center w-32 h-[46px] mt-4 rounded px-10 py-3 border border-gray-800 text-sm font-medium hover:scale-95 bg-orange-600 shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]">
          <span className="relative z-10">Explore</span>
          <span className="ml-1"><BiRightArrowAlt size={18} /></span>
        </Link>

        <hr className="my-12 border-gray-200 dark:border-gray-700" />

        <div className="grid grid-cols-1 gap-19 md:grid-cols-4 lg:grid-cols-4">
  <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
    <BiGridVertical />Supply chain and logistics
  </div>
  <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
    <BiGridVertical />Wholesale and specialty distribution
  </div>
  <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
    <BiGridVertical />Patient support and services
  </div>
  <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
    <BiGridVertical />Business analytics and technology
  </div>
        </div>
      </div>
    </section>
  );
};

export default Future;
