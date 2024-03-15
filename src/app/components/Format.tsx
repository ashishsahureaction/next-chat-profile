import React from 'react';
import Image from "next/image";
import Angular from "@/assets/Angular.png";
import bootstrap from "@/assets/bootstrap.png";
import css3 from "@/assets/css3.jpg";
import datastax from "@/assets/datastacx.png";
import express from "@/assets/express.png";
import firebase from "@/assets/firebase.png";
import gatsby from "@/assets/gatsby.png";
import github from "@/assets/github.png";
import graphql from "@/assets/graphql.png";
import html from "@/assets/html.png";
import js from "@/assets/js.jpg";
import laravel from "@/assets/laravel.png";
import mangodb from "@/assets/mangodb.png";
import mui from "@/assets/mui.png";
import mysql from "@/assets/mysql.png";
import nextjs from "@/assets/nextjs.png";
import node from "@/assets/node.png";
import openai from "@/assets/openai.png";
import react from "@/assets/react.png";
import redux from "@/assets/redux.png";
import scss from "@/assets/scss.png";
import serverless from "@/assets/serverless.png";
import tailwind from "@/assets/tailwind.png";
import typescript from "@/assets/typescript.png";
import upstash from "@/assets/upstash.png";


const Format: React.FC = () => {
  return (
    <section>
      <div className="py-16">
        <div className="mx-auto px-6 max-w-6xl text-gray-500">
          <div className="text-center">
            <h2 className="text-3xl text-gray-950 dark:text-white font-semibold">Tools Of The Present And Future</h2>
            <p className="mt-6 text-gray-700 dark:text-gray-300">Frontend technologies I prefer using</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Card 1 */}
            <div className="relative group p-8 flex flex-col justify-center items-center shadow-lg inset-shadow-lg rounded-xl ">
                <Image src={nextjs} alt="angular" height={80} width={80} />NextJs
              <div className="relative group p-8 flex flex-col justify-center items-center ">
              <Image src={react} alt="angular" height={80} width={80} />React
              </div>
            </div>
            {/* Card 2 */}  
            <div className="relative group p-8 flex flex-col justify-center items-center shadow-lg inset-shadow-lg rounded-xl ">
            <Image src={Angular} alt="angular" height={80} width={80} />Angular
              <div className="relative group p-8 flex flex-col justify-center items-center ">
              <Image src={js} alt="angular" height={80} width={80} />JavaScript
              </div>
            </div>
            {/* Card 3 */}
            <div className="relative group p-8 flex flex-col justify-center items-center shadow-lg inset-shadow-lg rounded-xl ">
            <Image src={redux} alt="angular" height={80} width={80} />Redux
              <div className="relative group p-8 flex flex-col justify-center items-center ">
              <Image src={typescript} alt="angular" height={80} width={80} />TpeScript
              </div>
            </div>
            {/* Card 4*/}

            <div className="relative group p-8 flex flex-col justify-center items-center shadow-lg inset-shadow-lg rounded-xl ">
            <Image src={mangodb} alt="angular" height={80} width={80} />MangoDb
              <div className="relative group p-8 flex flex-col justify-center items-center ">
              <Image src={node} alt="angular" height={80} width={80} />NodeJs
              </div>
            </div>
            {/* Add more cards here */}
          </div>
        </div>
      </div>


      <div className="py-16">
        <div className="mx-auto px-6 max-w-6xl text-gray-500">
          <div className="text-center">
            <p className="mt-6 text-gray-700 dark:text-gray-300">Other Technologies</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Card 1 */}
            <div className="relative group p-8 flex flex-col justify-center items-center shadow-lg inset-shadow-lg rounded-xl ">
            <Image src={express} alt="angular" height={80} width={80} />Express
              <div className="relative group p-8 flex flex-col justify-center items-center ">
              <Image src={html} alt="angular" height={80} width={80} />HTML
              </div>
            </div>
            {/* Card 2 */}
            <div className="relative group p-8 flex flex-col justify-center items-center shadow-lg inset-shadow-lg rounded-xl ">
            <Image src={css3} alt="angular" height={80} width={80} />CSS3
              <div className="relative group p-8 flex flex-col justify-center items-center ">
              <Image src={bootstrap} alt="angular" height={80} width={80} />BootStrap
              </div>
            </div>
            {/* Card 3 */}
            <div className="relative group p-8 flex flex-col justify-center items-center shadow-lg inset-shadow-lg rounded-xl ">
            <Image src={datastax} alt="angular" height={80} width={80} />DataStax
              <div className="relative group p-8 flex flex-col justify-center items-center ">
              <Image src={firebase} alt="angular" height={80} width={80} />FireBase
              </div>
            </div>

            {/* Add more cards here */}

            <div className="relative group p-8 flex flex-col justify-center items-center shadow-lg inset-shadow-lg rounded-xl ">
            <Image src={gatsby} alt="angular" height={80} width={80} />Gastby
              <div className="relative group p-8 flex flex-col justify-center items-center ">
              <Image src={github} alt="angular" height={80} width={80} />GitHub
              </div>
            </div>

            <div className="relative group p-8 flex flex-col justify-center items-center shadow-lg inset-shadow-lg rounded-xl ">
            <Image src={gatsby} alt="angular" height={80} width={80} />Gastby
              <div className="relative group p-8 flex flex-col justify-center items-center ">
              <Image src={github} alt="angular" height={80} width={80} />GitHub
              </div>
            </div>

            <div className="relative group p-8 flex flex-col justify-center items-center shadow-lg inset-shadow-lg rounded-xl ">
            <Image src={graphql} alt="angular" height={80} width={80} />GraphQL
              <div className="relative group p-8 flex flex-col justify-center items-center ">
              <Image src={laravel} alt="angular" height={80} width={80} />Laravel
              </div>
            </div>

            <div className="relative group p-8 flex flex-col justify-center items-center shadow-lg inset-shadow-lg rounded-xl ">
            <Image src={mui} alt="angular" height={80} width={80} />MUI
              <div className="relative group p-8 flex flex-col justify-center items-center ">
              <Image src={mysql} alt="angular" height={80} width={80} />MySql
              </div>
            </div>

            <div className="relative group p-8 flex flex-col justify-center items-center shadow-lg inset-shadow-lg rounded-xl ">
            <Image src={openai} alt="angular" height={80} width={80} />OpenAi
              <div className="relative group p-8 flex flex-col justify-center items-center ">
              <Image src={scss} alt="angular" height={80} width={80} />SCSS
              </div>
            </div>

            <div className="relative group p-8 flex flex-col justify-center items-center shadow-lg inset-shadow-lg rounded-xl ">
            <Image src={serverless} alt="angular" height={80} width={80} />Serverless
              <div className="relative group p-8 flex flex-col justify-center items-center ">
              <Image src={tailwind} alt="angular" height={80} width={80} />Tailwind 
              </div>
            </div>

            <div className="relative group p-8 flex flex-col justify-center items-center shadow-lg inset-shadow-lg rounded-xl ">
            <Image src={upstash} alt="angular" height={80} width={80} />Upstash
            </div>

        
          </div>
        </div>
      </div>


    </section>
  );
};

export default Format;

