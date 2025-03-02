import React from "react";
import nature1 from "../Images/nature1.webp";
import nature2 from "../Images/nature2.webp";
import nature3 from "../Images/nature3.webp";
import nature4 from "../Images/nature4.webp";
import nature5 from "../Images/nature5.webp";
import nature6 from "../Images/nature6.webp";

const images = [nature1, nature2, nature3, nature4, nature5, nature6];

const Img_Carousel = () => {
  return (
    <div className="lg:flex justify-between overflow-hidden flex-col gap-4 flex-wrap lg:flex-row absolute top-[-80px] left-5 hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          className="h-56 w-auto rounded-3xl border-none drop-shadow-2xl animate-floating mt-5 "
        />
      ))}
    </div>
  );
};

export default Img_Carousel;
