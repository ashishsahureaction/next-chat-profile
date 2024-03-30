'use client'

import React, { useState } from 'react';
import { gsap } from 'gsap';

const RandomImage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>('');

  const handleClick = (event: any) => {
    const { clientX, clientY } = event;

    // Fetch the list of images from the public folder
    const images: string[] = [
      '/assets/one.jpg',
      '/assets/two.jpg',
      '/assets/three.jpg',
      // Add more image paths as needed
    ];

    // Randomly select an image
    const randomIndex: number = Math.floor(Math.random() * images.length);
    const randomImage: string = images[randomIndex];

    // Set the new image URL
    setImageUrl(randomImage);

    // Create a new image element
    const img: HTMLImageElement = new Image();
    img.src = randomImage;
    img.classList.add('random-image', 'absolute', 'cursor-pointer');

    // Set random size for the image (width and height between 100px and 300px)
    const width: number = Math.floor(Math.random() * 300) + 400;
    const height: number = Math.floor(Math.random() * 300) + 500;
    img.style.width = `${width}px`;
    img.style.height = `${height}px`;

    // Calculate the position for the center of the image
    const offsetX: number = width / 2;
    const offsetY: number = height / 2;

    // Adjust the position of the image so that its center aligns with the cursor position
    img.style.left = `${clientX - offsetX}px`;
    img.style.top = `${clientY - offsetY}px`;

    // Append image to the body
    document.body.appendChild(img);

    // Calculate distance to the top of the screen
    const distanceToTop: number = clientY - offsetY;

    // Animate image floating to the top
    gsap.to(img, {
      y: -distanceToTop,
      rotation: 15, // Rotate the image 15 degrees
      opacity: 1,
      duration: 5, // Increase the duration for a slower animation
      onComplete: () => {
        // Fade out the image
        gsap.to(img, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            // Remove image after fading out
            document.body.removeChild(img);
          },
        });
      },
    });

    // Attach the same click handler to the new image
    img.addEventListener('click', handleClick);
  };





  
  return (
    <div className="relative h-screen" onClick={handleClick}>
      {/* Render nothing in this div */}
    </div>
  );
};

export default RandomImage;
