'use client'
import { useState } from 'react';
import Image from 'next/image';
// Define a TypeScript interface for the image objects
interface ImageType {
  src: string;
  alt: string;
}

const images: ImageType[] = [
  { src: '/images/tag.jpg', alt: 'Description of Image 1' },
  { src: '/images/tag1.jpg', alt: 'Description of Image 2' },
  { src: '/images/tag2.jpg', alt: 'Description of Image 3' },
  { src: '/images/tag3.jpg', alt: 'Description of Image 4' },
  { src: '/images/tag4.jpg', alt: 'Description of Image 5' },
  { src: '/images/eightfive.jpg', alt: 'Description of Image 6' },
  { src: '/images/tag6.jpg', alt: 'Description of Image 7' },
  { src: '/images/eighttwo.jpg', alt: 'Description of Image 8' },
];

const GalleryOne: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  return (
    <section className="space-y-3 shadow-lg inset-shadow-lg p-4">
      <div className="flex flex-wrap">
        {images.map((image, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-1 hover:bg-orange-600  transition duration-500 ease-in-out transform hover:filter hover:grayscale" onClick={() => setSelectedImage(image)}>
            <Image
              src={image.src}
              alt={image.alt}
              className="rounded-md hover:scale-105 transition-transform duration-300 cursor-pointer"
              width={300}
              height={300}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg shadow-lg ">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={600} // Adjust based on your needs
              height={600} // Adjust based on your needs
              className="rounded-md hover:scale-105 duration-300 "
            />
            <button
              className="mt-4 px-4 py-2 bg-orange-600 text-white rounded hover:bg-red-700 hover:scale-95"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryOne;
