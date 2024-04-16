import React from 'react';
import Marquee from "react-fast-marquee";
import { Project } from './interfaces';

interface CardFrontBackProps {
  project: Project;
  isHover: boolean;
}

const CardBack: React.FC<CardFrontBackProps> = ({ project, isHover }) => {
  return (
    <div className={`backface-hidden absolute duration-500 transform transition w-full h-full ${isHover ? 'rotate-y-180' : ''} border-2 rounded-xl border-black overflow-hidden`}>
      <div className='bg-black flex h-1/2'>
        <p className='font-bebas text-white text-xl'>{project.name}</p>
      </div>
      <div className='bg-orange-600 overflow-hidden h-1/2'>
        <Marquee  speed={60} className='py-2'>
          {project.description}
        </Marquee>
      </div>
    </div>
  );
}

export default CardBack;
