import Link from "next/link";
import openailogo from "@/assets/openai.png";
import nextjslogo from "@/assets/nextjs.svg";
import tailwindlogo from "@/assets/tailwind.png";
import Image from "next/image";
import { FaFacebook, FaInstagramSquare, FaGithub, FaYoutube, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { MdAttachEmail, MdAddIcCall } from "react-icons/md";
import logo from "@/assets/logo.png";




export default function Footer() {
  return (<>


<hr></hr>
    <footer className=" text-center text-surface/75  lg:text-left">
    <footer className="relative ">
  
      

      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
        
        <div className="me-12 hidden lg:block">
          <span>Get connected with me on social networks:</span>
        </div>
        <div className="flex justify-center">
          <a href="https://www.facebook.com/" className="me-6 hover:scale-110">
            <FaFacebook size={16} color="#1877F2" />
          </a>
          <a href="https://www.youtube.com/" className="me-6 hover:scale-110">
            <FaYoutube size={16} color="#FF0000" />
          </a>
          <a href="www.linkedin.com/in/ashish-sahu-3c" className="me-6 hover:scale-110">
            <FaLinkedinIn size={16} color="#0077B5" />
          </a>
          <a href="https://www.instagram.com/" className="me-6 hover:scale-110">
            <FaInstagramSquare size={16} color="purple" />
          </a>
          <a href="https://github.com/ashishsahureaction" className="me-6 hover:scale-110">
            <FaGithub size={16}  />
          </a>
          <a href="https://twitter.com/">
            <FaXTwitter size={16}  />
          </a>
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          <div className="">
            
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <span className="me-3">
                <Image src={logo} alt="TW Elements" height={120} width={120} loading="lazy"/>
              </span>
            </h6> 
            <p className="text-justify">
              Let&apos;s create something amazing together. Join us and embark on a journey of innovation and success.
              Together, we&apos;ll make a difference and leave a lasting impact on the world.
            </p>
          </div>
          <div>

            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start ">Work</h6>
            <p className="mb-4">
              <a  className="hover:underline" href="/card/cencora">Cencora</a>
            </p>
            <p className="mb-4">
              <a  className="hover:underline" href="/card/future">Future Generali</a>
            </p>
            <p className="mb-4">
              <a  className="hover:underline"  href="/card/skylives">Skyylives Info</a>
            </p>
            <p className="mb-4">
              <a   className="hover:underline"  href="/card/hdfc">Hdfc Bank</a>
            </p>
          </div>

          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Useful links</h6>
            <p className="mb-4 hover:underline">
              <a href="/projects">Projects</a>
            </p>
            <p className="mb-4 hover:underline">
              <a href="/ashish_resume.pdf" target="blank" >Download</a>
            </p>
            <p className="mb-4 hover:underline">
              <a href="https://nextjs.org/">NextJs</a>
            </p>
            <p className="mb-4 hover:underline">
              <a href="/">Chat-Bot</a>
            </p>
          </div>

          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Contact</h6>
            <a className="flex items-center justify-center md:justify-start hover:underline" href="https://www.google.com/maps/place/92+King+St+E,+Toronto,+ON+M5C+2V8/@43.6500794,-79.3775401,17z/data=!3m1!4b1!4m6!3m5!1s0x89d4cb3189975b7b:0x11009809827c0681!8m2!3d43.6500755!4d-79.3749652!16s%2Fg%2F11c5kp4drm?entry=ttu">
  <span className="me-3">
    <FaLocationDot size={16} color="blue" />
  </span>
  King Street, Toronto, Canada
</a>

  <a href="mailto:ashishsahu15k@gmail.com" className="flex items-center justify-center md:justify-start mt-4 hover:underline">
  <span className="me-3">
    <MdAttachEmail size={16} />
  </span>
  ashishsahu15k@gmail.com
</a>
            <a href="tel:+14379732998" className="mb-4 flex items-center justify-center md:justify-start mt-4 hover:underline">
              <span className="me-3">
            
                <MdAddIcCall size={16}  />
              </span>
              + 01 437 973 2998
            </a>

            <a href="https://wa.me/+919820824498" className="flex items-center justify-center md:justify-start mt-4 hover:underline">
  <span className="me-3">
      <FaWhatsapp size={16} color="#25D366" />
  </span>
  +91 982 082 4498
</a>
          </div>
        </div>
      </div>

    <hr></hr>  
      <div className="bg-black/5 p-6 text-center">
        
      <footer className="group overflow-hidden bg-gradient-to-tr  ">
        
      <nav className="mx-auto flex max-w-3xl gap-3 p-4 before:duration-700 before:absolute dark before:w-28 before:h-28 
      before:bg-transparent before:blur-none before:border-8 before:opacity-50 before:rounded-full before:-left-4 before:-top-12 
      relative z-10 group-hover:before:top-28 group-hover:before:left-44 group-hover:before:scale-125 group-hover:before:blur">

<div className=" px-4 py-8 sm:px-6 lg:px-8  ">
<svg
    className="absolute bottom-0 w-full h-60 bg-transparent left-0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
  >
    <path
      fill="#ff5520"
      fillOpacity="1"
      d="M0,64L34.3,74.7C68.6,85,137,107,206,106.7C274.3,107,343,85,411,80C480,75,549,85,617,90.7C685.7,96,754,96,823,101.3C891.4,107,960,117,1029,112C1097.1,107,1166,85,1234,96C1302.9,107,1371,149,1406,170.7L1440,192L1440,0L1406,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
    ></path>
  </svg>
    <div className="sm:flex sm:items-center sm:justify-between ">
      <div className="flex justify-center sm:justify-start  ">
    
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
                    loading="lazy"
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
                    loading="lazy"
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
                    loading="lazy"
                  />{" "}
                  Tailwind 
                </a>
              </li>
            </ul>      
      </div>
<Link href="/privacy" className="hover:scale-105 " >
<div className="mx-6 py-10 text-center md:text-left">
  <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
    {/* Your grid items */}
  </div>
  <p className="mt-4 text-center text-sm text-gray-600 lg:mt-0 lg:text-right">
        Privacy &copy; Ashish Sahu {new Date().getFullYear()} 
      </p>
</div>
</Link>
  </div>
  </div>
  </nav>   
</footer>
  </div>
</footer>
</footer>
</>
    
  )}