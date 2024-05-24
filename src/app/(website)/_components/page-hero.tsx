import React from "react";
import BoxedContainer from "./boxed-container";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  heading: string;
  imgUrl?: string;
  noMaxHeight?: boolean;
}

const PageHero = ({
  title,
  heading,
  imgUrl = "/images/pexels-quang-nguyen-vinh-222549-6130040.jpg",
  noMaxHeight = false,
}: PageHeroProps) => {
  return (
    <div
      className={cn(
        "w-full h-screen relative -mt-20",
        noMaxHeight ? "md:h-screen" : "md:h-[500px]"
      )}
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      <BoxedContainer className="flex flex-col items-center justify-center relative">
        <p className="font-semibold text-[#EBD7B2] uppercase">{title}</p>
        <h1 className="text-white mt-3 font-bold text-2xl md:text-6xl uppercase">
          {heading}
        </h1>
      </BoxedContainer>
    </div>
  );
};

export default PageHero;
