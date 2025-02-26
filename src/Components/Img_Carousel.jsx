import React from "react";
import nature1 from "../Images/nature1.jpg";
import nature2 from "../Images/nature2.jpg";
import nature3 from "../Images/nature3.jpg";
import nature4 from "../Images/nature4.jpg";
import nature5 from "../Images/nature5.jpg";
import nature6 from "../Images/nature6.jpg";

const images = [nature1, nature2, nature3, nature4, nature5, nature6];

const Img_Carousel = () => {
  return (
    <div className="lg:flex justify-between overflow-hidden flex-col gap-4 flex-wrap lg:flex-row absolute top-[-80px] left-5 hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          className="h-56 w-auto rounded-4xl border-2 drop-shadow-2xl animate-floating mt-5 "
        />
      ))}
    </div>
  );
};

export default Img_Carousel;
