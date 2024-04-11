import { H1 } from "../components/ui/H1";
import { Metadata } from "next";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { GiCow } from "react-icons/gi";
import { SiGoogledatastudio, SiInstagram  } from "react-icons/si";
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
    <section className="space-y-6 text-justify mx-auto max-w-3xl px-3 py-10 ">
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
      
      <section className="space-y-3 shadow-lg inset-shadow-lg ">
  <div className="max-w-screen-xl sm:px-6 sm:py-12 lg:px-8 lg:py-16 flex justify-center shadow-lg inset-shadow-lg">
    <div className="mt-2 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3 ">

    <Link href="/projects/insta" > 
 
 <div className="flex items-start gap-1 text-center justify-center hover:scale-95 shadow-lg inset-shadow-lg">
 <SiInstagram   size={40} color="#833AB4" className="text-6xl  " />
   <div>
     <h2 className="text-md font-bold">Instagram Clone</h2>

     <p className="mt-1 text-sm  ">
     Capture and Share the World&apos;s Moments
     </p>
   </div>
 </div>
 </Link>
      
    <Link href="/projects/dairy" > 
 
      <div className="flex items-start gap-1 text-center justify-center hover:scale-95 shadow-lg inset-shadow-lg">
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
      <div className="flex items-start gap-1 text-center justify-center  hover:scale-95 shadow-lg inset-shadow-lg">
      
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
      <div className="flex items-start gap-1 text-center justify-center  hover:scale-95 shadow-lg inset-shadow-lg">
      <ImBook size={35} color="red" className="text-6xl  " />
        <div>
          <h2 className="text-md font-bold">Books-AI.co</h2>

          <p className="mt-1 text-sm  ">
          An AI book recommendation app
          </p>
        </div>
      </div>
      </Link>

      <Link href="/projects/weather" > 
      <div className="flex items-start gap-1 text-center justify-center  hover:scale-95 shadow-lg inset-shadow-lg">
      <TiWeatherPartlySunny size={35} color="blue" className="text-6xl  " />
        <div>
          <h2 className="text-md font-bold">WeatherApp.co</h2>

          <p className="mt-1 text-sm  ">
          Weather forecast app
          </p>
        </div>
      </div>
      </Link>

    <Link href={"/projects/food"} > 
      <div className="flex items-start gap-1 text-center justify-center hover:scale-95 shadow-lg inset-shadow-lg">

      <MdOutlineFastfood size={35} color="green" className="text-6xl  " />
        <div>
          <h2 className="text-md font-bold">FoodDelivery.co</h2>

          <p className="mt-1 text-sm  ">
          Food delivery at your place
          </p>
        </div>
      </div>
      </Link>

      <Link href={"/projects/google"} > 
      <div className="flex items-start gap-1 text-center justify-center  hover:scale-95 shadow-lg inset-shadow-lg ">
      <FcGoogle size={35} color="orange" className="text-6xl " />
      
        <div>
          <h2 className="text-md font-bold">GoogleClone.co</h2>

          <p className="mt-1 text-sm  ">
          Google Search Engine app
          </p>
        </div>
      </div>
      </Link>

      <Link href={"/projects/myprofile"} > 
      <div className="flex items-start gap-1 text-center justify-center hover:scale-95 shadow-lg inset-shadow-lg">
      <SiGoogledatastudio size={37} color="pink" className="text-6xl  " />
        <div>
          <h2 className="text-md font-bold">Profileme.co</h2>

          <p className="mt-1 text-sm  ">
          Animated Profile for any person
          </p>
        </div>
      </div>
      </Link>

      <Link href={"projects/blog"} > 
      <div className="flex items-start gap-1 text-center justify-center hover:scale-95 shadow-lg inset-shadow-lg">
      
      <AiOutlineAlipay  size={40} color="purple" className="text-6xl  " />
        <div>
          <h2 className="text-md font-bold">Mern Blog App</h2>

          <p className="mt-1 text-sm  ">
          Share your story with the world.
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