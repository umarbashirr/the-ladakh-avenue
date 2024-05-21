"use client";

import Marquee from "react-fast-marquee";
import FacilitiesContainer from "../facilities";

const FacilitiesSection = () => {
  return (
    <div className="bg-[#FAF8F5] w-full h-full pb-12 md:pb-20 lg:pb-28 relative">
      <FacilitiesContainer />
      <Marquee className="text-9xl overflow-hidden font-extrabold text-[#F0EEEC] absolute -bottom-12 md:-bottom-20 lg:-bottom-28">
        Welcome to Snowpeak Hotel – Your Luxurious Mountain Retreat Awaits!
        Experience Unparalleled Comfort, Stunning Views, and Exceptional
        Service. Book Your Stay Today!
      </Marquee>
    </div>
  );
};

export default FacilitiesSection;
