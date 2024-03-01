
import { H1 } from "../components/ui/H1";
import { H2 } from "../components/ui/H2";
import { Metadata } from "next";
import ContactPage from "../components/ContactPage";
import Cube from "../components/Cube";




export const metadata: Metadata = {
  title: "Contact Me",
  description: "Feel free to contact me",
};

export default function Page() {

  return (
    <section className="space-y-6">

      <H1>contact me</H1>
      <section className="space-y-3">
        <p>
        I am interested in lucrative opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don&apos;t  hesitate to contact me using below form either.
        </p>
        <hr className="border-muted" />
        <ContactPage/>        
      </section>      
        <hr className="border-muted" />   
        <p>
        Wish to see what a transparent real-time recruitment process looks like?</p> 

        <section className="space-y-3">
          <Cube/>
        </section>
    </section>

    
  );
}