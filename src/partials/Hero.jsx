import { useState, useEffect } from 'react';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import slide1 from '../images/slide-1.jpg'
import slide2 from '../images/slide-2.jpg'
import slide3 from '../images/slide-3.jpg'
import slide4 from '../images/slide-4.jpg'
import slide5 from '../images/slide-5.jpg'
import slide6 from '../images/slide-6.jpg'
import slide7 from '../images/slide-7.jpg'
import slide8 from '../images/slide-8.jpg'

const images = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const benEmail = "YmVubmFkb2xza3lAYWRyb2l0c3RhcnQub3Jn";

  function decodeEmail(encodedEmail) {
    const decoder = new TextDecoder("utf-8");
    const decodedEmail = decoder.decode(
      Uint8Array.from(atob(encodedEmail), c => c.charCodeAt(0))
    );
    return decodedEmail;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(index => (index + 1) % images.length);
      setIsLoaded(false);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className={`absolute inset-0 bg-black opacity-80 transition-opacity duration-1000 ease-in-out ${
          isLoaded ? 'opacity-0' : ''
        }`}
      ></div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 object-cover h-full w-full transition-opacity duration-1000 ease-in-out ${
            currentImageIndex === index ? 'opacity-40' : 'opacity-0'
          }`}
          onLoad={handleLoad}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center text-white">
          <p className="font-sans font-bold text-4xl md:text-6xl mb-12">
            Imagine It. Design It. Build It.
          </p>
          <a
            href={`mailto:${decodeEmail(benEmail)}`}
            className="bg-white hover:bg-gray-100 text-black font-bold py-2 px-6 rounded-full"
          >
            Get Involved
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
