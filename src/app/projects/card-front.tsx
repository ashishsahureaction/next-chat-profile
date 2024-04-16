import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from './interfaces';

interface CardFrontBackProps {
  project: Project;
  isHover: boolean;
}
const CardFront: React.FC<CardFrontBackProps> = ({ project, isHover }) => {
  return (
    <div className={`bg-white transform-style-3d border-2 rounded-xl overflow-hidden border-black backface-visible duration-500 transition w-full h-full absolute ${isHover ? 'rotate-y-180' : ''}`}>
      <div className='bg-orange-600 overflow-hidden h-3/4'>
        <div className='relative w-full h-full rotate-30'>
        <Link href={`/projects/${project.id}`} key={project.id}>
          
         
          <Image
            src={"/images/threeone.jpg" || " "} 
            alt={project.name || "Project Image"}
            layout='fill'
            className='w-full h-full object-cover'
          />
           </Link>
        </div>
      </div>
      <div className='bg-black flex flex-col justify-between p-4 h-1/4'>
        <p className='font-bebas text-white text-xl'>{project.name}</p>
      </div>
    </div>
  );
}

export default CardFront;
