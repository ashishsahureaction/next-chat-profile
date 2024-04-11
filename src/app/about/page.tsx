import bjj from "@/assets/bjj.jpg";
import tag from "@/assets/tag.jpg";
import tag1 from "@/assets/tag1.jpg";
import tag2 from "@/assets/tag2.jpg";
import tag3 from "@/assets/tag3.jpg";
import { H1 } from "../components/ui/H1";
import { H2 } from "../components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BackToTopButton from "../components/BackToTopButton";
import Gallery from './Gallery'


export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Ashish Sahu and his work.",
};

export default function Page() {
  
  return (
    <section className="space-y-6 text-justify  mx-auto max-w-3xl px-3 py-10 ">
    
      <H1>About Me</H1>
      <section className="space-y-3 shadow-lg inset-shadow-lg" >
        <H2 className="group hover:text-gray-600 transition-colors duration-300" ><span className="opacity-0 group-hover:opacity-30 ml-1 ">#</span>Who am I?</H2>
        <p >
        My name is Ashish Sahu, and I&apos;m a full-stack software developer based in Canada. With over 8+ years of experience in 
        web development, I specialize as a highly motivated front-end developer. I&apos;m currently seeking opportunities within 
        established IT companies where I can leverage my skills and expertise to work on cutting-edge technologies and tackle diverse 
        and challenging projects. Throughout my career, I&apos;ve consistently delivered high-quality work and have showcased numerous 
        projects on my {" "}
          <Link
            href="https://github.com/ashishsahureaction" target="blank"
            className="text-primary hover:underline"
          >
            GitHub profile
          </Link>
          . 
        </p>
        <p>
        I strongly believe in continuous learning and improving myself, so I try my best to learn in any situation possible, unfavorable or not. I&apos;m inherently confident and possess a natural curiosity, constantly refining my skills one design problem at a time. 
          Over time, I&apos;ve cultivated my abilities to create visually engaging content, demonstrating a commitment to continuous improvement

        </p>
        <p> I&apos;m passionate about building cool apps and websites and super Desi when it comes to Cricket and Bollywood. 
          I love to read and travel.</p>
      </section>
      <hr className="border-orange-600 dark:border-primary" />

      <article className="rounded-xl p-4 ring  sm:p-6 lg:p-8">
  <div className="flex items-start sm:gap-8">
    
    <div >
      <p className="mt-1 text-sm  ">
     &ldquo;If you ever spot me in the wild, don&apos;t hesitate to say hello! Let&apos;s grab a drink and geek-out over the latest advancements
      in front-end development or discuss our favorite programming language&ldquo;⚡
      </p>

    </div>
  </div>
</article>
<hr className="border-orange-600 dark:border-primary" />

      <section className="space-y-3  ">
        <H2 className="group hover:text-gray-600 transition-colors duration-300 ">
          <span className="opacity-0 group-hover:opacity-30 ml-1 ">#</span>Skills</H2>
        <p>
          I&apos;m a full-stack web developer specializing in{" "}
          <strong>Nextjs</strong>, <strong>React</strong>,  <strong>Angular</strong>, <strong>Redux</strong>, and{" "}
          <strong>Node.js</strong>.
        </p>
        <p>
        Throughout my career, I have had the privilege of working on diverse projects and collaborating with
        talented teams across various industries. From conceptualization to execution, 
        I thrive in dynamic environments where innovation meets practical application.
        </p>
        <p>
        I also excel in utilizing Redux, RxJS, Express.js, MongoDB, Firebase, and RESTful APIs to build scalable solutions.
        Experience with WordPress, StoryBook, and AppWritter streamlines content management and development workflows, while tools 
        such as Google Analytics, Jira, Git, Docker, Azure, and AWS bolster project management and deployment processes. 
        </p>
      </section>
      <hr className="border" />

      <section className="space-y-3 ">
  <H2 className="group hover:text-gray-600 transition-colors duration-300">
    <span className="opacity-0 group-hover:opacity-30 ml-1">#</span>Soft-Skills
  </H2>
  <p>Certain skills I&apos;ve picked along the way that deserve mentioning:</p>
  <ul className="list-disc pl-5">
    <li className="mb-3">
      <strong>Attention to detail:</strong> I take pleasure in creating designs and UIs with careful precision, emphasizing quality over quantity.
    </li>
    <li className="mb-3">
      <strong>Open-source/Collaboration:</strong> I founded a community on GitHub called Communitypro that helps newbie developers learn how to contribute to open-source projects and collaborate in building together. Currently, we are over 400 people strong with room for growth.
    </li>
    <li>
      <strong>Ability to work with little supervision:</strong> I understand people are busy and would love to get things done timely, so I do my best in delivering assignments and projects with little supervision, sparing you the need to closely manage/oversee my work.
    </li>
  </ul>
</section>
      <hr className="border" />

      <section className="space-y-3 ">
  <H2 className="group hover:text-gray-600 transition-colors duration-300">
    <span className="opacity-0 group-hover:opacity-30 ml-1">#</span>Side-Projects
  </H2>
  <p>
    In my free time, I like to work on side projects to keep my skills sharp and try out new tech. Here is a list of my current projects:
  </p>
  <ul className="list-inside list-disc space-y-1 shadow-lg inset-shadow-lg">
  <li>
      <a
        href="https://intsagram-nextjs-clone-eynq.vercel.app/"
        target="_blank" rel="noopener noreferrer"
        className="text-primary hover:underline  "
      >
        Instagram Clone
      </a>{" "}
      - Capture and Share the World&apos;s Moments
    </li>
    <li>
      <a
        href="https://smartdiary.co"
        target="_blank" rel="noopener noreferrer"
        className="text-primary hover:underline  "
      >
        SmartDiary.co
      </a>{" "}
      - An AI-powered journaling app
    </li>
    <li>
      <a
        href="https://imdb-nextjs-d2u1xvude-ashish-sahus-projects.vercel.app/"
        target="_blank" rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        IMDB.co
      </a>{" "}
      - IMDB Movie search and rating app
    </li>
    <li>
      <Link
        href="https://books-ai.app"
        target="_blank" rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        Books-AI.app
      </Link>{" "}
      - An AI book recommendation app
    </li>
    <li>
      <a
        href="https://preeminent-torte-d4200e.netlify.app/"
        target="_blank" rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        WeatherApp.co
      </a>{" "}
      - An Automated-weather forecast app
    </li>
    <li>
      <a
        href="https://foodtoorderapp.netlify.app/"
        target="_blank" rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        FoodDelivery.co
      </a>{" "}
      - Food outlet search and deliver food at your location.
    </li>
    <li>
      <a
        href="https://google-next-clone-e3497vcw0-ashish-sahus-projects.vercel.app/"
        target="_blank" rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        GoogleClone.co
      </a>{" "}
      - Google Search Engine on voice command, text, images.
    </li>
    <li>
      <a
        href="https://dynamic-axolotl-fde4ab.netlify.app/"
        target="_blank" rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        Profileme.co
      </a>{" "}
      - Animated Profile
    </li>
    <li>
      <a
        href="https://mern-next-blog-x6of.vercel.app/"
        target="_blank" rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        Mern-Blog App
      </a>{" "}
      - Share to the World
    </li>
  </ul>
</section>

      <hr className="border " />

      <section className="space-y-3 ">
        <H2 className="group hover:text-gray-600 transition-colors duration-300">
          <span className="opacity-0 group-hover:opacity-30 ml-1 ">#</span>Hobbies</H2>
        <p>
          Besides programming, I love doing sports. I lift weights and do
          Whitewater River Rafting and Tubing. I also enjoy reading books and going out
          sometimes. I think having hobbies other than coding is important for
          mental health.
        </p>
        <p >
          I&apos;m also very much into self-improvement, nutrition, and positive
          psychology.
        </p>

        <div className="group relative">
  <Image 
    src={bjj}
    alt="whitewater river rafting group photo"
    className="rounded-md shadow-lg inset-shadow-lg"
    loading="lazy"
  />
  <div className="absolute inset-0 bg-orange-600/60 opacity-0 rounded-md group-hover:opacity-100 flex justify-center items-center transition-opacity duration-1000">
    <div className="max-w-sm px-2 py-1 space-y-1">
      <div className="space-y-2 text-white font-bold md:tracking-tight md:text-3xl">
        Embark on an Epic River Rafting & Tubing Journey in Rishikesh..!
      </div>
      <div>
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
          <a href="#" className="px-3 py-1 rounded-sm hover:underline bg-white text-gray-900" role="button">Rishikesh</a>
          <a href="#" className="px-3 py-1 rounded-sm hover:underline bg-white text-gray-900" role="button">RiverRafting</a>
          <a href="#" className="px-3 py-1 rounded-sm hover:underline bg-white text-gray-900" role="button">Tubing</a>
        </div>
        <h4 className="text-lg text-white font-semibold">Make a Splash</h4>
        <ul className="ml-4 space-y-1 list-disc">
          <li>
            <a href="#" className="hover:underline text-white">Ride the Rapids, Feel the Rush !</a>
          </li>
          <li>
            <a href="#" className="hover:underline text-white">From Calm Waters to Thrilling Rapids !</a>
          </li>
          <li>
            <a href="#" className="hover:underline text-white">Where Every Wave Beckons an Adventure !</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

      <div className="relative shadow-lg inset-shadow-lg ">
      <div className="sticky top-0 flex flex-col items-center justify-center h-screen  ">
    <Image
      src={tag}
      alt="whitewater river rafting group photo"
      className="rounded-md"
      loading="lazy"
    />
  </div>
  <div className="sticky top-0 flex flex-col items-center justify-center h-screen">
    <Image
      src={tag1}
      alt="whitewater river rafting group photo"
      className="rounded-md"
      loading="lazy"
    />
  </div>
  <div className="sticky top-0 flex flex-col items-center justify-center h-screen">
    <Image
      src={tag2}
      alt="whitewater river rafting group photo"
      className="rounded-md"
      loading="lazy"
    />
  </div>
  <div className="sticky flex flex-col items-center justify-center h-screen">
  
    <Image
      src={tag3} 
      alt="whitewater river rafting group photo"
      className="rounded-md" loading="lazy"
    />
  </div>

        </div> 

      <section className="space-y-3  ">
  <H2 className="group hover:text-gray-600 transition-colors duration-300">
    <span className="opacity-0 group-hover:opacity-30 ml-1">#</span>Gallery
  </H2>
          <div className="flex flex-wrap ">

         <Gallery/>
          
        </div>      
        

      </section>

      <hr className="border" />

      <section className="space-y-3 ">
        <H2 className="group hover:text-gray-600 transition-colors duration-300">
          <span className="opacity-0 group-hover:opacity-30 ml-1 ">#</span>Looking Ahead</H2>
        <p>
        As I embark on the next chapter of my career journey, I&apos;m excited about the prospect of leveraging my skills and experience 
        to make a positive impact. Whether it&apos;s driving digital transformation initiatives, spearheading new projects, or collaborating 
        with like-minded professionals, I&apos;m eager to explore opportunities that align with my passion for excellence and innovation.
        </p>
        <BackToTopButton/>
        
      </section>
      </section>
    </section>
    
  );
}



