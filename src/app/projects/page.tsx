import { H1 } from "../components/ui/H1";
import { Metadata } from "next";
import CardList from './CardList'




interface Project {
  id: string;
  color: string;
  name: string;
  description: string;
  label: string;
  image?: string; // Optional if you don't always have images.
}

export const metadata: Metadata = {
  title: "Projects",
  description: "Learn more about Ashish Sahu and his work.",
};


export default function Page() {
  return (
    <>

      <section className="space-y-6 text-justify mx-auto max-w-3xl px-3 py-10">
        <H1>Projects</H1>
        <section className="space-y-3">
          <p>I&apos;ve worked on tons of little projects over the years but these are the ones that I&apos;m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas on how it can be improved.</p>
        </section>
        <hr className="border-muted" />

        <main className="no-scrollbar "> 
   <div className="h-screen min-h-screen">
   
   <CardList projects={projects} />
  </div>
  </main>

       
        <hr className="border-muted" />
      </section>
    </>
  );
}

const projects = [
  { id: 'insta',  color: '#833AB4', name: 'Instagram Clone', description: "Capture and Share the World's Moments", label: "Instagram Clone Link" },
  { id: 'dairy',  color: 'gold', name: 'Smart Dairi.co', description: 'An AI powered journaling app', label: "Smart Dairi.co Link" },
  { id: 'movie',  color: 'skyblue', name: 'IMDB.co', description: 'IMDB Movie search and rating app', label: "IMDB.co Link" },
  { id: 'book',  color: 'red', name: 'Books-AI.co', description: 'An AI book recommendation app', label: "Books-AI.co Link" },
  { id: 'weather',  color: 'blue', name: 'WeatherApp.co', description: 'Weather forecast app', label: "WeatherApp.co Link" },
  { id: 'food',  color: 'green', name: 'FoodDelivery.co', description: 'Food delivery at your place', label: "FoodDelivery.co Link" },
  { id: 'google',  color: 'orange', name: 'GoogleClone.co', description: 'Google Search Engine app', label: "GoogleClone.co Link" },
  { id: 'myprofile', color: 'pink', name: 'Profileme.co', description: 'Animated Profile for any person', label: "Profileme.co Link" },
  { id: 'blog', color: 'purple', name: 'Mern Blog App', description: 'Share your story with the world.', label: "Mern Blog App Link" }
];
