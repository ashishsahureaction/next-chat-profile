import React from 'react';
import { AiFillAlert, AiOutlineGoogle } from "react-icons/ai";
import { SiOpenai, SiMicrosoft, SiNvidia } from "react-icons/si";
import Image from 'next/image';
import Link from 'next/link';
import Sweet from './Sweet'
declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      // Extending React's HTMLAttributes to include a custom attribute
      fdprocessedid?: string;
    }
  }

interface Article {
  imageUrl: string;
  title: string;
  date: string;
  description: string;
  hreff:string;
}

interface ArticleCardProps {
  imageUrl: string;
  title: string;
  date: string;
  description: string;
  hreff:string;
}

const articles: Article[] = [
    {
      hreff:"/blog/render",
      imageUrl: "/images/eightfive.jpg",
      title: "From Render to Reality",
      date: "June 01, 2020",
      description: "While a component's re-render in React, does not directly translate to a full update of the real DOM. React's efficiency comes from its ability to only update what's necessary in the DOM..."
    },
    {
      hreff:"/blog/update",
      imageUrl: "/images/eightfive.jpg",
        title: "React 19 Unveiled",
        date: "March 05, 2024",
        description: "Exploring the New Frontier   Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri..."
      },
      {
        hreff:"/blog/vllm",
        imageUrl: "/images/eightfive.jpg",
        title: "Visual Language Models",
        date: "February 15, 2021",
        description: "The art of making computers think like humans, Where science fiction meets reality ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri..."
      },
      {
        hreff:"/blog/render",
      imageUrl: "/images/eightfive.jpg",
        title: "Re-Render in React",
        date: "February 15, 2021",
        description: "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri..."
      },
      {
        hreff:"/blog/render",
        imageUrl: "/images/eightfive.jpg",
        title: "Re-Render in React",
        date: "February 15, 2021",
        description: "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri."
      },
  
    {
      hreff:"/blog/render",
      imageUrl: "/images/eightfive.jpg",
      title: "Majdoori in life",
      date: "January 22, 2021",
      description: "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri."
    },

  ];

const ArticleCard: React.FC<ArticleCardProps> = ({ imageUrl, title, date, hreff, description }) => (
    <Link rel="noopener noreferrer" href={hreff} className="max-w-sm mx-auto rounded-md group hover:no-underline ">
      <div className='relative lg:w-[350px] w-full overflow-clip'>
    <Image alt='image picture' width={300} height={300}  className="object-cover w-full h-44 rounded-md group-hover:scale-125 duration-300 " src={imageUrl} />
     </div>
    <div className="p-2 space-y-2">
      <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
      <span className="text-xs text-gray-400 dark:text-gray-600">{date}</span>
      <p className='text-justify'>{description}</p>
    </div>
  </Link>
);

const Page: React.FC = () => {
    return (
        <div className="space-y-12 ">
      
        <section>
            <div className="container flex flex-col items-center px-4 py-8 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
                <h1 className="text-4xl font-bold leading-none sm:text-5xl">Journey into the Un
                    <span className="text-orange-600">known Exploring Uncharted</span>Territories of Possibility
                </h1>
                <p className="px-4  mt-8 mb-2 text-lg">Where Every Re-render Tells a Story of Virtual Brilliance!</p>
                <p className="px-8 text-lg">More than Meets the Eye, The Secret Sauce Behind Lightning Fast UI Updates!</p>
            </div>
        </section>
     
        <section>
          <div className="container max-w-6xl p-6 space-y-6 sm:space-y-12 ">
            {/* Map through the articles to display each one */}
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, index) => (
                <ArticleCard key={index} {...article} />
              ))}
            </div>
            <div className="flex justify-center">
              <button className="text-white mt-4 bg-orange-600 hover:bg-blue-600 hover:scale-95 duration-300 font-semibold rounded-md text-sm px-4 py-2.5
               w-1/6 focus:outline-none focus:shadow-outline">Load more posts...</button>
            </div>
          </div>
        </section>
              
        <section>
            <div className="container px-6 py-12 mx-auto">
                <div className="grid items-center gap-4 xl:grid-cols-5">
                    <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                        <h2 className="text-4xl font-bold">Inspiration awaits around every corner</h2>
                        <p className="text-gray-400 dark:text-gray-600">Embark on a coding odyssey where every function call is a step closer to innovation, and every debugging session unveils the path to mastery in the digital realm!.</p>
                    </div>
                    <div className="p-6 xl:col-span-3 text-justify">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="grid content-center gap-4">
                                <div className="p-6 rounded shadow-md hover:scale-95 duration-300">
                                    <p>The shift with AI is as big as they come and that&apos;s why it&apos;s so important that we make AI helpful for everyone. With generative AI, we’re taking the next step.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <Image src="/images/col.jpg" alt="" width={300} height={300} className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500 dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Sunder Pichai</p>
                                            <p className="text-sm text-gray-400 dark:text-gray-600">CEO of Google and Alphabet</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 rounded shadow-md hover:scale-95 duration-300">
                                    <p>Our mission is to ensure that artificial general intelligence—AI systems that are generally smarter than humans—benefits all of humanity and to be widely and fairly shared.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <Image src="/images/col1.jpg"  alt="project picture" width={300} height={300} className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500 dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Sam Altman</p>
                                            <p className="text-sm text-gray-400 dark:text-gray-600">CEO of Open AI</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid content-center gap-4">
                                <div className="p-6 rounded shadow-md hover:scale-95 duration-300">
                                    <p>My hope is that Hit Refresh will start important conversations and spark new ideas, and that others will share their own hit refresh moments.Technologies will come and go, so you need to be able to both ask and answer the question: What do you do as a company, why do you exist?</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <Image src="/images/col2.jpg"  alt=""  width={300} height={300} className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500 dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Satya Nadella</p>
                                            <p className="text-sm text-gray-400 dark:text-gray-600">CEO of Microsoft</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 rounded shadow-md hover:scale-95 duration-300">
                                    <p>Brilliant Minds. Breakthrough Discoveries. Without intellectual honesty, you can&apos;t have a culture that&apos;s willing to tolerate failure because people cling too much to an idea that likely will be bad or isn&apos;t working and they feel like their reputation is tied up in it. They can&apos;t admit failure.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <Image src="/images/col3.jpg"  alt="" width={300} height={300} className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500 dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Jensen Huang</p>
                                            <p className="text-sm text-gray-400 dark:text-gray-600">CEO of Nvidia</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </section>
        
        <section className="py-6 rounded-md">
                <div className="container flex flex-col justify-center max-w-3xl p-4 px-6 mx-auto space-y-8 xl:max-w-5xl md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
                    <div className="flex flex-col space-y-4 text-center lg:text-left">
                        <h1 className="text-5xl font-bold leading-none">Stay in the loop</h1>
                        <p>Doloribus consectetur quasi ipsa quo neque culpa blanditiis ducimus recusandae a veritatis optio cumque, in harum ad nam!</p>
                    </div>
                    <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
                    <div className="flex flex-row">
                        
                        <Sweet/>
                    </div>
                    </div>
                </div>
            </section>
    
            
    </div>
    
      )
    }
    
    export default Page;
    
    