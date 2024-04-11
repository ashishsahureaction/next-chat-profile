'use client'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link'

import Head from 'next/head';

interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

const Testimonials = () => {
  useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
	  
		const sections = gsap.utils.toArray('.website-section') as HTMLElement[];
		sections.forEach(section => {
		  const elems = section.querySelectorAll('.js-content-opacity');
		 
		  gsap.set(elems, { y: 50, opacity: 0 });
		  
		  ScrollTrigger.create({
			trigger: section,
			start: 'top 60%',
			onEnter: () => gsap.to(elems, {
			  y: 0,
			  opacity: 1,
			  duration: 1,
			  stagger: 0.2,
			  delay: 0.3,
			  ease: 'power3.out',
			  overwrite: 'auto'
			}),
			onLeaveBack: () => gsap.to(elems, {
			  y: 50,
			  opacity: 0,
			  duration: 1,
			  stagger: 0.2,
			  delay: 0.3,
			  ease: 'power3.out',
			  overwrite: 'auto'
			})
		  });
		})
	
		
	  }, []); 
	

  
  const testimonials: Testimonial[] = [
    {
      quote: 'Incredibly impressed with the level of service, its exceeded all expectations and delivered on every promise.',
      author: 'Jeffrey Cohen',
      company: 'Cencora Inc.',
    },
    {
      quote: 'From start to finish, the experience with was seamless and helped us achieve our goals in record time.',
      author: 'Michael Brown',
      company: 'Cencora Inc.',
    },
    {
      quote: 'Working with you was an absolute pleasure. Team went above and beyond to deliver exceptional results.',
      author: 'Sarah Thompson',
      company: 'Genrali Global',
    },
  ];

  return (
    <>
      
      <section className='website-section'>
      <div className="flex flex-col items-start justify-center min-h-screen py-2 px-10 rounded-3xl ml-24 js-content-opacity">
        <div className=" mt-0">
          <h1 className="text-4xl font-bold">It&apos;s all about a</h1>
          <h1 className="text-4xl font-bold mr-20"> dialogue</h1>
          
          <p className="mt-8">A few words from   mentors. See</p>
          <p className=" mr-10">mentors stories for more.</p>
        </div>

        <div className="mt-10  ml-80 grid grid-cols-1 md:grid-cols-3 gap-3 max-w-6xl w-50 h-60 mr-20 js-content-opacity">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center border-2 p-6 shadow-lg rounded-3xl dark:bg-gray-900 js-content-opacity">
              <p className=" text-lg text-justify">{testimonial.quote}</p>
              <span className="mt-8  font-semibold ml-auto text-orange-600"><i>{testimonial.author},</i></span>
              <span className=" ml-auto">{testimonial.company}</span>
            </div>
          ))}
        </div>
      </div>
      </section>
    </>
  );
};

export default Testimonials;




