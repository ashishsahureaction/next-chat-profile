'use client'
import React, { useState, ReactNode } from 'react';

// Define an interface for the component props
interface CollapsibleProps {
  title: string;
  children: ReactNode;
}

const Collapsible: React.FC<CollapsibleProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-2">
      <div className="text-md cursor-pointer underline" onClick={() => setIsOpen(!isOpen)}>
        {title} <span><svg
          className={`w-5 h-5 fill-current transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg></span>
      </div>
      {isOpen && (
        <div className="mt-2 text-justify">
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapsible;
