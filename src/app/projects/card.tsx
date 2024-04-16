'use client'

import React, { useState } from 'react';
import CardBack from './card-back';
import CardFront from './card-front';
import { Project } from './interfaces';
interface CardProps {
    project: Project;
  }

  const Card: React.FC<CardProps> = ({ project }) => {
  const [isHover, setIsHover] = useState(false);
  const onToggle = () => setIsHover(prev => !prev);

  return (
    <div onMouseEnter={onToggle} onMouseLeave={onToggle} className='group shrink-0 h-[450px] perspective-800 sm:h-full group relative flex justify-center items-center'>
      <CardFront project={project} isHover={isHover} />
      <CardBack project={project} isHover={isHover} />
    </div>
  );
}

export default Card;
