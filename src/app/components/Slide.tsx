'use client'

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';



import one from "@/assets/one.jpg";
import two from '@/assets/two.jpg';
import three from '@/assets/three.jpg';
import four from '@/assets/four.jpg';
import eightfour from '@/assets/eightfour.jpg';
import eightthree from '@/assets/eightthree.jpg';
import sevenone from '@/assets/sevenone.jpg';
import eight from '@/assets/eight.jpg';
import eighttwo from '@/assets/eighttwo.jpg';

interface SlideProps {
  src: any;
  alt: string;
  title: string;
  tech: string;
}

interface HeaderProps {
  image: SlideProps;
}

const Slide: React.FC = () => {
  const images: SlideProps[] = [
    { src: one, alt: 'google', title: 'Google Search Engine Optimization Services', tech: 'NextJs, Redux, FireBase' },
    { src: two, alt: 'blog', title: 'Blog Post Writing Services', tech: 'MangoDB, Redux-Saga, SCSS' },
    { src: three, alt: 'weather', title: 'Weather Update', tech: 'API, Tailwind, MUI' },
    { src: four, alt: 'book', title: 'Book Cover Design & Printing', tech: 'OpenAI, Upstarx, Hook' },
    { src: eightfour, alt: 'profile', title: 'Profile Picture Design', tech: 'AstraData, NoSQL, FireBase' },
    { src: eightthree, alt: 'dairy', title: 'Dairy Food Label Design', tech: 'ChatGPT, React, JavaScript' },
    { src: sevenone, alt: 'movie', title: 'Movie Surfing', tech: 'TypeScript, NodeJs, ExpressJs' },
    { src: eighttwo, alt: 'food', title: 'Food Delivery at Your Place', tech: 'Angular, Bootstarp, FireBase' },
    { src: eight, alt: 'food', title: 'Food Delivery at Your Place', tech: 'Angular, Bootstarp, FireBase' },

  ];

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Header image={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};


const Header: React.FC<HeaderProps> = ({ image }) => {
  return (
    <>
    
    <header>
      <div className="relative overflow-hidden rounded-lg shadow-lg mt-6">
        <Image src={image.src} alt={image.alt} height={700} width={800}  loading="lazy"/>
      
        <div className="absolute inset-0 flex items-center justify-center bg-fixed">
          <div className="text-center text-white">
            <h1 className="mb-6 text-5xl font-bold">{image.title}</h1>
            <h3 className="mb-8 text-3xl font-bold">{image.tech}</h3>
            <button
              type="button"
              className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              Call to action
            </button>
          </div>
        </div>
      </div>
      
    </header>
 

    </>
  );
};

export default Slide;
