import React from "react";
import BoxedContainer from "./boxed-container";

interface PageHeroProps {
  title: string;
  heading: string;
}

const PageHero = ({ title, heading }: PageHeroProps) => {
  return (
    <div className=" bg-[url('/images/pexels-quang-nguyen-vinh-222549-6130040.jpg')] w-full h-screen md:h-[500px] relative -mt-20">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      <BoxedContainer className="flex flex-col items-center justify-center relative">
        <p className="font-semibold text-[#EBD7B2]">{title}</p>
        <h1 className="text-white mt-1 font-bold text-2xl md:text-5xl">
          {heading}
        </h1>
      </BoxedContainer>
    </div>
  );
};

export default PageHero;
