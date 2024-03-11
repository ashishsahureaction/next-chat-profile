import React from 'react';
import Dropdown from './Dropdown';


export interface MenuItem {
  title: string;
  route: string;
  children?: MenuItem[];
}



const frameworkMenu: MenuItem = {
  title: 'Select an Experince >',
  route: '/',
  children: [
    { title: 'Cencora >', route: '/card/cencora' },
    { title: 'Future >', route: '/card/future' },
    { title: 'Skylives >', route: '/card/skylives' },
    { title: 'Hdfc >', route: '/card/hdfc' }
   
  ],
};

export default function Header() {
  return (
    <nav>
     
      <Dropdown item={frameworkMenu} />
      
    </nav>
  );
}