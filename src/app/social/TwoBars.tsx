import React from 'react';
import Image from "next/image";
import Link from "next/link";


export default function Component() {
    return (<>
    <hr className='mt-6'></hr>
    <div className="flex items-center justify-center h-1/4">
      <div className=" py-12 lg:py-16 ">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-4">
            <Link href="/card/cencora">  <div className="flex items-center space-x-4 hover:scale-95 duration-500  ">
              <Image
                alt="Logo"
                className="aspect-square rounded-lg overflow-hidden object-cover"
                height="40"
                src="/images/col3.jpg"
                width="40"
              />
              <div className="grid gap-1.5">
                <h4 className="text-lg font-semibold hover:underline ">Cencora</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">FullStack Developer</p>
              </div>
            </div>
            </Link>
          
            <Link href="/card/future"> 

            <div className="flex items-center space-x-4 hover:scale-95 duration-500">
              <Image
                alt="Logo"
                className="aspect-square rounded-lg overflow-hidden object-cover"
                height="40"
                src="/images/col.jpg"
                width="40"
              />
              <div className="grid gap-1.5">
                <h4 className="text-lg font-semibold hover:underline">Generali Global Health</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Senior FrontEnd Developer</p>
              </div>
            </div></Link>

            <Link href="/card/skylives"> 
            <div className="flex items-center space-x-4 hover:scale-95 duration-500">
              <Image
                alt="Logo"
                className="aspect-square rounded-lg overflow-hidden object-cover"
                height="40"
                src="/images/col1.jpg"
                width="40"
              />
              <div className="grid gap-1.5">
                <h4 className="text-lg font-semibold hover:underline">Skyylines Infotech </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">FrontEnd Developer</p>
              </div>
            </div></Link>

            <Link href="/card/hdfc"> 
            <div className="flex items-center space-x-4 hover:scale-95 duration-500">
            <Image
  alt="Logo"
  className="aspect-square rounded-lg overflow-hidden object-cover"
  height="40"
  src="/images/col2.jpg"
  width="40"
  layout=''
/>
              <div className="grid gap-1.5">
                <h4 className="text-lg font-semibold hover:underline ">HDFC Bank Ltd.</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Circle Manager</p>
              </div>
            </div></Link>
          </div>
        </div>
      </div>
      </div>
      </>
    )
  }
  
  