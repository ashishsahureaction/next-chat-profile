'use client'
import React, { useState } from 'react';
import Link from 'next/link';

interface MenuItem {
  title: string;
  route: string;
  children?: MenuItem[];
}

interface Props {
  item: MenuItem;
}

export default function Dropdown(props: Props) {
  const { item } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuItems = item?.children || [];

  const toggle = () => {
    setIsOpen((old) => !old);
  };
  const transClass = isOpen ? 'flex' : 'hidden';

  return (
    <>
      <div className="relative">
        <button className='flex items-center rounded px-2 pb-2 pt-2.5 text-white text-xs uppercase bg-orange-600 hover:scale-95 '
          onClick={toggle}
        >
          {item.title}
        </button>
        <div
          className={`w-full whitespace-nowrap px-4 py-2 text-sm font-normal text-right absolute flex flex-col justify-start rounded-md ${transClass}`}
        >
          {menuItems.map((item) => (
            <Link
              key={item.route}
              
              href={item.route || ''}
              onClick={toggle}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      {isOpen ? (
        <div
          
          onClick={toggle}
        ></div>
      ) : (
        <></>
      )}
    </>
  );
}