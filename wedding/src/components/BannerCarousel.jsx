import React, { useState, useEffect } from "react";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";

const images = [image1, image2, image3, image4, image5];

const BannerCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const activeImage = images[activeIndex];

  const previousIndex = () =>
  setActiveIndex((prevIndex) =>
    prevIndex === 0 ? images.length - 1 : prevIndex - 1
  );

const nextIndex = () =>
  setActiveIndex((prevIndex) =>
    prevIndex === images.length - 1 ? 0 : prevIndex + 1
  );

  return (
    <div>
      <button onClick={previousIndex}>{'<'}</button>
      <img src={activeImage} alt={`Image ${activeIndex}`} style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
      <button onClick={nextIndex}>{'>'}</button>
    </div>
  );
};

export default BannerCarousel;
