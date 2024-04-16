import React from 'react';
import Card from './card';
import { Project } from './interfaces';

interface CardListProps {
  projects: Project[];
}

const CardList: React.FC<CardListProps> = ({ projects }) => {
  return (
    <div className='h-full grid gap-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
      {projects.map(project => <Card key={project.id} project={project} />)}
    </div>
  );
}

export default CardList;