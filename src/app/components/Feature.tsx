import four from "@/assets/four.jpg";
import Image from 'next/image';


const Feature = () => {
  return (
    // Use h-screen to make the section take the full viewport height
    <section className="h-screen">
      <div className="container mx-auto text-center lg:text-left xl:px-32 h-full mb-10">
        <div className="grid items-center lg:grid-cols-2 h-full">
          <div>
            <div className="relative z-[1] block rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,.07),0_10px_20px_-2px_rgba(0,0,0,.04)] backdrop-blur-[30px] dark:shadow-black/20 md:px-12">
              <h2 className="mb-8 text-3xl font-bold">Deliver The Delightness Dazzle</h2>
              <p className="mb-8 pb-2 text-neutral-500 dark:text-neutral-300 lg:pb-0 text-justify">
                Crafting intuitive interfaces, collaborating effectively, and ensuring impeccable performance,
                ultimately captivating users with every interaction.
              </p>

              <p className="mb-0 text-neutral-500 dark:text-neutral-300 text-justify">
                Begins with the innovation of intuitive user interfaces and 
                seamless experiences, where every interaction leaves a lasting impression of satisfaction. Collaborative efforts among teams ensure that diverse perspectives merge harmoniously, leading to the
            creation of robust and elegant solutions. As the project scales, meticulous attention to detail becomes paramount, 
            ensuring that every feature sparkles with efficiency and reliability. The ultimate goal is to not just meet but exceed
             expectations, dazzling users with innovative functionalities and flawless performance. In this pursuit, the software
              development process transcends mere utility, becoming a medium through which delight is consistently delivered to 
              users, captivating them with each interaction.
              </p>
            </div>
          </div>

          <div>
            <Image
              src={four} // Update the path according to your directory structure
              alt="image"
              width={400}
              height={600}
              className="w-full h-full object-cover rounded-lg shadow-lg dark:shadow-black/20"
              loading="lazy"
            />
          </div>
        </div>
      </div>  
    </section>
  );
};

export default Feature;
