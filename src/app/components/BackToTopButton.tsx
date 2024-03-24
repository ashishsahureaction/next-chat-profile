'use client'

import { useState, useEffect } from 'react';

const BackToTopButton = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Function to show or hide the button based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Listen to scroll events and toggle visibility
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 underline px-4 py-2 rounded-full shadow-lg transition-all duration-300 z-50"
        >
          Back to Top
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
