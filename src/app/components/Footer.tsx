import Link from "next/link";
import openailogo from "@/assets/openai.png";
import nextjslogo from "@/assets/nextjs.svg";
import tailwindlogo from "@/assets/tailwind.png";
import Image from "next/image";



export default function Footer() {
  return (
    <footer className="group overflow-hidden bg-gradient-to-tr">
      <nav className="mx-auto flex max-w-3xl gap-3 p-4 before:duration-700 before:absolute dark before:w-28 before:h-28 
      before:bg-transparent before:blur-none before:border-8 before:opacity-50 before:rounded-full before:-left-4 before:-top-12 
      relative z-10 group-hover:before:top-28 group-hover:before:left-44 group-hover:before:scale-125 group-hover:before:blur">

</nav>
     
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 ">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex justify-center sm:justify-start">
    
      <ul className="  mt-4  flex items-center gap-x-2 text-sm md:mt-0 text-justify dark:bg-primary-dark rounded-md p-1">Built with:
              <li>
                <a
                  href="https://openai.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex items-center gap-x-2 hover:underline text-sm"
                >
                 
                  <Image className="dark:bg-white bg-primary"
                    src={openailogo}
                    width={15}
                    height={15}
                    alt="open ai logo"
                  />{" "}
                  OpenAi
                </a>
              </li>
              <li>
                <a
                  href="https://nextjs.org"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex items-center gap-x-2 hover:underline text-sm"
                >
                  <Image
                    src={nextjslogo}
                    width={20}
                    height={20}
                    alt="nextjs logo"
                  />{" "}
                  Next.js
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindcss.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex items-center gap-x-2 hover:underline text-sm"
                >
                  <Image
                    src={tailwindlogo}
                    width={20}
                    height={20}
                    alt="tailwind logo"
                  />{" "}
                  Tailwind 
                </a>
              </li>
            </ul>

        
      
          
      </div>
<Link href="/privacy" className="hover:scale-105 " >
<p className="mt-4 text-center text-sm text-gray-600 lg:mt-0 lg:text-right">
        Privacy &copy; Ashish Sahu {new Date().getFullYear()} 
      </p>
</Link>
      
    </div>
  </div>

</footer>
  )}