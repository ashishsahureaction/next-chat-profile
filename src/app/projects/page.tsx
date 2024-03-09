import { H1 } from "../components/ui/H1";
import { H2 } from "../components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { GiCow } from "react-icons/gi";
import { SiGoogledatastudio } from "react-icons/si";
import { ImBook } from "react-icons/im";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { PiVideoFill } from "react-icons/pi";
import { MdOutlineFastfood } from "react-icons/md";
import { AiOutlineAlipay } from "react-icons/ai";




export const metadata: Metadata = {
  title: "Projects",
  description: "Learn more about Ashish Sahu and his work.",
};

export default function Page() {
 

  return (
    <div>
    <section className="space-y-6 text-justify">
      <H1>Projects</H1>
      <section className="space-y-3">
        <p>
          I&apos;ve worked on tons of little projects over the years but these
          are the ones that I&apos;m most proud of. Many of them are
          open-source, so if you see something that piques your interest, check
          out the code and contribute if you have ideas on how it can be
          improved.
        </p>
      </section>
      <hr className="border-muted" />
      
      <section className="space-y-3">
  <div className="max-w-screen-xl sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="mt-2 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
      
    <Link href="/projects/dairy" > 
 
      <div className="flex items-start gap-1 text-center justify-center hover:scale-95">
      <GiCow  size={40} color="gold" className="text-6xl  " />
        <div>
          <h2 className="text-md font-bold">Smart Dairi.co</h2>

          <p className="mt-1 text-sm  ">
          An AI powered journaling app
          </p>
        </div>
      </div>
      </Link>


      <Link href="/projects/movie" > 
      <div className="flex items-start gap-1 text-center justify-center  hover:scale-95">
      
      <PiVideoFill size={40} color="skyblue" className="text-6xl" />
        <div>
          <h2 className="text-md font-bold">IMDB.co</h2>

          <p className="mt-1 text-sm  ">
          IMDB Movie search and rating app
          </p>
        </div>
      </div>
      </Link>


      <Link href="/projects/book" > 
      <div className="flex items-start gap-1 text-center justify-center  hover:scale-95">
      <ImBook size={40} color="red" className="text-6xl  " />
        <div>
          <h2 className="text-md font-bold">Books-AI.co</h2>

          <p className="mt-1 text-sm  ">
          An AI book recommendation app
          </p>
        </div>
      </div>
      </Link>

      <Link href="/projects/weather" > 
      <div className="flex items-start gap-1 text-center justify-center  hover:scale-95">
      <TiWeatherPartlySunny size={40} color="blue" className="text-6xl  " />
        <div>
          <h2 className="text-md font-bold">WeatherApp.co</h2>

          <p className="mt-1 text-sm  ">
          Weather forecast app
          </p>
        </div>
      </div>
      </Link>

    <Link href={"/projects/food"} > 
      <div className="flex items-start gap-1 text-center justify-center hover:scale-95">

      <MdOutlineFastfood size={40} color="green" className="text-6xl  " />
        <div>
          <h2 className="text-md font-bold">FoodDelivery.co</h2>

          <p className="mt-1 text-sm  ">
          Food delivery at your place
          </p>
        </div>
      </div>
      </Link>

      <Link href={"/projects/google"} > 
      <div className="flex items-start gap-1 text-center justify-center  hover:scale-95">
      <FcGoogle size={40} color="orange" className="text-6xl " />
      
        <div>
          <h2 className="text-md font-bold">GoogleClone.co</h2>

          <p className="mt-1 text-sm  ">
          Google Search Engine app
          </p>
        </div>
      </div>
      </Link>

      <Link href={"/projects/myprofile"} > 
      <div className="flex items-start gap-1 text-center justify-center hover:scale-95">
      <SiGoogledatastudio size={37} color="pink" className="text-6xl  " />
        <div>
          <h2 className="text-md font-bold">Profileme.co</h2>

          <p className="mt-1 text-sm  ">
          Animated Profile for any person
          </p>
        </div>
      </div>
      </Link>

      <Link href={"https://smartdiary.co"} > 
      <div className="flex items-start gap-1 text-center justify-center hover:scale-95">
      
      <AiOutlineAlipay  size={40} color="purple" className="text-6xl  " />
        <div>
          <h2 className="text-md font-bold">Smart Dairi.co</h2>

          <p className="mt-1 text-sm  ">
          An AI powered journaling app
          </p>
        </div>
      </div>
      </Link>

    </div>
  </div>
</section>
    </section>



      <hr className="border-muted" />
    
      </div>   
  );
}