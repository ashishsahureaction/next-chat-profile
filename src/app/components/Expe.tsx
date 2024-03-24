import React from 'react';
import Image from 'next/image'; 
import eightfour from "@/assets/eightfour.jpg";
import { BiRightArrowAlt } from 'react-icons/bi';
import Link from 'next/link'


const Expe: React.FC = () => {
  return (
 
  
   
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
     
      <div className="w-full items-center mx-auto max-w-screen-lg">
        <div className="group grid w-full grid-cols-2">
          <div>
            <div className="pr-12 text-justify">
              <p className="peer mb-6">
                A maestro of the digital canvas, crafts immersive user experiences with his mastery of Full-Stack Development. With an agile mindset and a flair for innovation, he transforms code into symphonies of efficiency and elegance, leaving an indelible mark on every project he touches.
              </p>
              <p className="mb-6">
                A veteran Full-Stack Developer, brings 8+ years of expertise in web app development. Proficient in ReactJS, Angular, and Agile, he delivers innovative solutions that exceed expectations.
              </p>
              <h3 className="mb-4 font-semibold text-xl">Professional Experience</h3>
              <ul role="list" className="marker:text-sky-400 list-disc pl-5 space-y-3">
                <li className='hover:underline hover:text-primary'>
                  <Link href='card/cencora' passHref legacyBehavior>
                    <a>Cencora</a>
                  </Link>
                </li>
                <li className='hover:underline hover:text-primary'>
                  <Link href='card/genrali' passHref legacyBehavior>
                    <a>Genrali Global Health</a>
                  </Link>
                </li>
                <li className='hover:underline hover:text-primary'>
                  <Link href='card/skylives' passHref legacyBehavior>
                    <a>Skyylives Infotech</a>
                  </Link>
                </li>
                <li className='hover:underline hover:text-primary'>
                  <Link href='card/hdfc' passHref legacyBehavior>
                    <a>Etc.</a>
                  </Link>
                </li>
               
              </ul>
            </div>
          </div>
          <div className="pl-16 relative flex items-end shadow-lg flex-col before:block before:absolute before:h-1/6 before:w-4 before:bg-blue-500 before:bottom-0 before:left-0 before:rounded-lg  before:transition-all group-hover:before:bg-orange-600 overflow-hidden">
            <div className="absolute top-0 left-0 bg-blue-500 w-4/6 px-12 py-14 flex flex-col justify-center rounded-xl group-hover:bg-sky-600 transition-all ">
              <span className="block mb-10 font-bold group-hover:text-orange-300">HERE WE ARE</span>
              <h2 className="font-bold text-3xl shadow-lg">
                8+ years in web development, and delivers innovative solutions.
              </h2>
            </div>
            <a className="font-bold text-sm flex mt-2 mb-8 items-center gap-2" href="#">
              <span className='hover:underline hover:scale-95'>MORE ABOUT US</span>
              <BiRightArrowAlt />
            </a>
            <div className="rounded-xl overflow-hidden">
              <Image src={eightfour} alt="" width={600} height={600} />
            </div>
           
          </div>
        </div>
      </div>
    </div>

   
  
  );
};

export default Expe;
