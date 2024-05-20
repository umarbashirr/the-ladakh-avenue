"use client";

import { localAmenities } from "@/lib/data";
import BoxedContainer from "../boxed-container";
import SectionWrapper from "../section-wrapper";
import SingleAmenityItem from "./single-amenity-item";

const AmenitiesSection = () => {
  return (
    <SectionWrapper>
      <BoxedContainer className="space-y-10 md:space-y-20">
        {localAmenities.map((amenity) => {
          return <SingleAmenityItem key={amenity.heading} {...amenity} />;
        })}
      </BoxedContainer>
    </SectionWrapper>
  );
};

export default AmenitiesSection;
