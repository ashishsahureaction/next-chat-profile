
import { H1 } from "../components/ui/H1";
import { H2 } from "../components/ui/H2";
import Menu from '../card/Menu'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media",
  description: "My social media channels and how to work with me.",
};

export default function Page() {
  return (
    <section className="space-y-6 text-justify shadow-lg inset-shadow-lg mx-auto max-w-3xl px-3 py-10 ">
      <H1>Social Media</H1>
      <section className="space-y-3">
      <H2 className="group hover:text-gray-600 transition-colors duration-300">
        <span className="opacity-0 group-hover:opacity-30 ml-1 ">#</span>
        My channels </H2>

      
        <p>
        In today&apos;s interconnected world, social media networking is more crucial than ever! 🌟It&apos;s not just about building connections;
         it&apos;s about nurturing relationships, sharing insights, and staying updated with the latest trends and opportunities in your field. 
         🚀 Harnessing the social networks can open doors to collaborations, mentorship, and endless possibilities. 
        So, let&apos;s connect, learn, and grow together! 💡 #Networking #Community #Growth.
        </p>
        <p>Links to all my social accounts:</p>
        <ul className="list-inside list-disc space-y-1 ">
          <li>
            <a
              href="https://www.youtube.com/" target="blank" rel="me noreferrer noopener"
              className="text-primary hover:underline"
            >
              YouTube
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"target="blank" rel="me noreferrer noopener"
              className="text-primary hover:underline"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/"target="blank" rel="me noreferrer noopener"
              className="text-primary hover:underline"
            >
              TikTok
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/"target="blank" rel="me noreferrer noopener"
              className="text-primary hover:underline"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"target="blank" rel="me noreferrer noopener"
              className="text-primary hover:underline"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ashishsahureaction"target="blank" rel="me noreferrer noopener"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ashishsahu3c/"target="blank" rel="me noreferrer noopener"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/"target="blank" rel="me noreferrer noopener"
              className="text-primary hover:underline"
            >
              Blog
            </a>
          </li>
        </ul>
        <hr className="border-muted" />
      </section>
      <section className="space-y-3 ">
        <H2 className="group hover:text-gray-600 transition-colors duration-300"><span className="opacity-0 group-hover:opacity-30 ml-1 ">#</span>Content</H2><ul className="list-inside list-disc space-y-1">
          <li>
            <a
              href="https://github.com/ashishsahureaction"target="blank" rel="me noreferrer noopener"
              className="text-primary hover:underline"
            >
              Full-stack web development playlist
            </a>{" "}
            - Learn full-stack web development from zero by building
            progressively more advanced projects. We focus on{" "}
            <span className="fon-bold">React.js, Next.js, and Node.js</span>.
            It&apos;s a ton of fun!
          </li>
          <li>
            <a
              href="https://github.com/ashishsahureaction"target="blank" rel="me noreferrer noopener"
              className="text-primary hover:underline"
            >
              Web dev shorts playlist
            </a>{" "}
            - All my web development related Github Shorts Projects in one list.
          </li>
        </ul>
        <hr className="border-muted" />
      </section>
      <section className="space-y-3 ">
        <H2  className="group hover:text-gray-600 transition-colors duration-300"><span className="opacity-0 group-hover:opacity-30 ml-1 ">#</span>Linkedin Network</H2>
        <p>
          I welcome you to{" "}
          <a
            href="https://www.linkedin.com/in/ashishsahu3c/"target="blank" rel="me noreferrer noopener"
            className="text-primary hover:underline"
          >
            join my Linkedin
          </a>{" "}
          where you can chat with me and other developers. We are already more
          than <span className="font-bold">500 members</span> and growing more
          every day!
        </p>
        <p>
          We have discussion forums, job boards, and even a meme channel. You
          can climb a ranking system by posting and helping others. It&apos;s a
          ton of fun!
        </p>
        <hr className="border-muted" />
      </section>
      <section className="space-y-3 ">
        <H2  className="group hover:text-gray-600 transition-colors duration-300"><span className="opacity-0 group-hover:opacity-30 ml-1 ">#</span>Business Inquiries</H2>
        <p>
        Let&apos;s connect and explore possibilities together! Feel free to reach out to me to discuss collaborations, 
        and opportunities, or simply to exchange insights on the latest industry trends., please reach out me via email at{" "}
          <a
            href="https://gmail.com" target="blank" rel="me noreferrer noopener"
            className="text-primary hover:underline"
          >
            ashishsahu15k@gmail.com
          </a>
        </p>
        <p>
        In my professional journey, I&apos;ve had the opportunity to collaborate with several distinguished companies, 
        including{" "}
          <a
            href="https://www.innomar-strategies.com/"target="blank" rel="me noreferrer noopener"
            className="text-primary hover:underline"
          >
            Cencora
          </a>
          ,{" "}
          <a href="https://www.generali.co.uk/" 
          target="blank" rel="me noreferrer noopener"className="text-primary hover:underline">
            Generali Health
          </a>
          ,{" "}
          <a
            href="https://skyylives.com/banking-finance-solutions/" target="blank" rel="me noreferrer noopener"
            className="text-primary hover:underline"
          >
            Skyylives Infotech
          </a>
          ,{" "}
          <a
            href="https://www.hdfcbank.com/" target="blank" rel="me noreferrer noopener"
            className="text-primary hover:underline"
          >
            HDFC Bank
          </a>.{" "}
    
        </p>
        

        <p>If you want to get something done, you come to me — everyone knows that..!!</p>
      </section>
      <div className="flex justify-end " ><Menu/></div>
      
    </section>
  );
} 