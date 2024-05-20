"use client";

import { Facilities, Site_Info } from "@/lib/data";
import BoxedContainer from "../boxed-container";
import SectionWrapper from "../section-wrapper";
import SingleFacilityItem from "./single-facility-item";
import Marquee from "react-fast-marquee";

const FacilitiesSection = () => {
  return (
    <div className="bg-[#FAF8F5] w-full h-full pb-12 md:pb-20 lg:pb-28 relative">
      <BoxedContainer>
        <header className="mb-8 md:mb-12">
          <p className="text-[#978667] font-medium text-center">
            {Site_Info.title}
          </p>
          <h2 className="text-3xl font-bold text-center">{Facilities.title}</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {Facilities.items.map((facility) => {
            return <SingleFacilityItem key={facility.title} {...facility} />;
          })}
        </div>
      </BoxedContainer>
      <Marquee className="text-9xl overflow-hidden font-extrabold text-[#F0EEEC] absolute -bottom-12 md:-bottom-20 lg:-bottom-28">
        Welcome to Snowpeak Hotel – Your Luxurious Mountain Retreat Awaits!
        Experience Unparalleled Comfort, Stunning Views, and Exceptional
        Service. Book Your Stay Today!
      </Marquee>
    </div>
  );
};

export default FacilitiesSection;
