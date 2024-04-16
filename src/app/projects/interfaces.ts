import { ElementType } from 'react';

export interface Project {
  id: string;
  color: string;
  name: string;
  description: string;
  label: string;
  image?: string; // Optional field for image URLs.
}