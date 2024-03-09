import React from "react";
import hdf from "@/assets/hdf.jpg";
import Link from "next/link";
import Image from "next/image";
import { IoArrowBack } from "react-icons/io5";


const Hdfc = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="w-[300px] rounded-lg overflow-hidden shadow-md duration-700 hover:scale-105">
       
            <Image
              src={hdf}
              width={200} height={200}
              alt="user"
              className="w-full h-full object-cover"
            />

        <div className="py-10 px-6 grid grid-cols-1 gap-6">
          <div className="flex flex-col items-center">
           
            <p className="font-semibold text-gray-700">Full-Stack Developer</p>
            <p className=" text-gray-500">-</p>

            
          </div>
          <p className="text-center justify-center text-gray-500">
          ReactJs, JavaScript, NodeJs,
          Jasmine, Typescript, CSS3, HTML5.
          </p>
          <div className="flex items-center justify-center">
  <span className="mx-2 w-10 h-10 rounded-full flex items-center justify-center bg-blue-500">
    <i className="fab fa-twitter text-white"></i>
  </span>

  <span className="mx-2 w-10 h-10 rounded-full flex items-center justify-center bg-gray-800">
    <i className="fab fa-behance text-white"></i>
  </span>

  <span className="mx-2 w-10 h-10 rounded-full flex items-center justify-center bg-blue-700">
    <i className="fab fa-linkedin-in text-white"></i>
  </span>
</div>

          
<div className=" flex items-center justify-center">
  <div className="flex justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer">
    <Link href="/social" className="text-white px-8 py-3 rounded-full font-semibold uppercase text-sm flex items-center justify-center">
    <IoArrowBack size={25}/>
    </Link>
  </div>
</div>

        </div>
      </div>
    </div>
 
  );
};

export default Hdfc;