import me from "@/assets/me.jpg";
import { H1 } from "./components/ui/H1";
import { H2 } from "./components/ui/H2";
import { Bot } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Name from "./components/Name";
import Popup from "./components/popup/Popup";
import Slide from "./components/Slide";
import Format from "./components/Format";
import Quicker from "./components/Quicker"
import Greeting from "./components/Greeting";
import String from "./components/String";
import LatestArticle from "./components/LatestArticle";
import ScrollSection from "./components/ScrollSection";
import Welcome from "./Welcome";
import BackToTopButton from "./components/BackToTopButton";
import Expe from "./components/Expe";
// import { TbAlphabetCyrillic } from "react-icons/tb";




export const metadata: Metadata = {
  title: "Ashish Sahu - My Smart Portfolio",
};

export default function Home() {

  const currentTime = new Date();
  return (
    <>
    <div className="flex flex-col items-center justify-start sm:my-8 sm:py-1 mx-auto max-w-3xl px-3 py-10 " >

    <div className="flex items-end justify-end fixed top-14 left-0 mb-16 mr-4 z-10">
        <div>
            <Welcome/>
          
        </div>
      </div>
      {/* <div className="flex items-end justify-end fixed bottom-0 left-0 mb-4 mr-4 z-10">
        <div>
          <a title="CheckIn" href="#" target="_blank" className="block bg-indigo-950 w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
          < TbAlphabetCyrillic size={60} color="orange"/>
          </a>
        </div>
      </div> */}
      
    <section className="space-y-16 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat px-1 py-8 " >
      
      <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="space-y-3">
        <H1 className="text-center sm:text-start">Hi, <span><Greeting time={currentTime}/></span> </H1>
          <H2 className="text-center sm:text-start">I&apos;m Ashish 👋</H2>
          <Name/>
          <p className="text-center sm:text-start ">
            I&apos;m a self-driven full-stack developer seeking opportunities in an established 
            IT firm to work on cutting-edge projects with the latest technologies.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={me}
            alt="A photo of me"
            height={300}
            width={300}
            className="aspect-square rounded-full border-2 object-cover shadow-md dark:border-foreground"
          />
        </div>
      </section>
      </section>
      <section className="space-y-3 text-center ">
       
      
        <H2>Ask the chatbot anything about me</H2>
        <p>
          Click the little <Bot size={30} className="inline pb-1 animate-pulse text-orange-600 shadow-lg inset-shadow-lg" /> icon in the top bar
          to activate the AI chat. You can and ask the chatbot any question about me
          and it will find the relevant info on this website. The bot can even
          provide links to pages you&apos;re looking for and it boasts both draggable and adjustable functionality.
        </p>
        <Popup/>
      </section>

    </div>
     
      <String/>
      <section className="space-y-3 text-center">
       <ScrollSection/>
   </section>

   <String/>
      <section className="space-y-3 text-center ">
    <Expe/>      
      </section>
  
   <String/>
      <section className="space-y-3 text-center ">
    
       <Quicker/>
       <BackToTopButton/>
       
       
      </section>

      <String/>
      <section className="space-y-3 text-center ">
           <Format/>
      </section>
      
      <String/>

      <section className="space-y-3 text-center ">
           <LatestArticle/>
           
           
      </section>

      <String/>

      
      <section className="space-y-3 text-center mx-auto max-w-3xl px-3 py-10  ">
        <H1>Successful Projects I&apos;m Proud Of</H1>
              <div>
        <p className=" text-gray-700 dark:text-gray-300">No better way to get experience than real-life projects</p>
        </div>
       <Slide/>
       
      </section>

      
     
</>

  );
}

