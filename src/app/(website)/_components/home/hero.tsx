"use client";

import BoxedContainer from "../boxed-container";
import HeroForm from "./hero-form";

const HeroSection = () => {
  return (
    <div className="bg-[url('/hotel-images/tla-10.jpeg')] bg-center bg-no-repeat bg-cover w-full py-[150px] lg:h-[800px] relative -mt-20">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <BoxedContainer className="flex items-center justify-center">
        <div className="relative w-full">
          <h1 className="text-[#EBD7B2] text-center font-medium mb-4">
            Luxury Hotel Experience
          </h1>
          <p className="text-white text-center font-extrabold text-4xl md:text-5xl  lg:text-6xl xl:text-7xl lg:leading-normal xl:leading-normal mb-6">
            Your Premium Retreat in the <br /> Heart of Ladakh
          </p>
          <div className="lg:hidden">
            <HeroForm />
          </div>
          {/* <div className="bg-white h-16 w-full rounded-lg shadow-sm"></div> */}
        </div>
      </BoxedContainer>
      <div className="hidden lg:block lg:absolute lg:-bottom-[50px] w-full z-20">
        <HeroForm />
      </div>
    </div>
  );
};

export default HeroSection;
