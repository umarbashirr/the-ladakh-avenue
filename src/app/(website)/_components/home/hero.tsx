"use client";

import BoxedContainer from "../boxed-container";

const HeroSection = () => {
  return (
    <div className="bg-[url('/images/pexels-quang-nguyen-vinh-222549-6130040.jpg')] w-full h-[800px] relative -mt-20">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      <BoxedContainer className="flex items-center justify-center">
        <div className="relative w-full">
          <h1 className="text-[#EBD7B2] text-center font-medium mb-4">
            Luxury Hotel Experience
          </h1>
          <p className="text-white text-center font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6">
            A UNIQUE EXPERIENCE <br /> WHERE TO STAY
          </p>
          <div className="bg-white h-16 w-full rounded-lg shadow-sm"></div>
        </div>
      </BoxedContainer>
    </div>
  );
};

export default HeroSection;
