"use client";

import React from "react";
import BoxedContainer from "./boxed-container";
import { Site_Info } from "@/lib/data";
import { Facilities as facilities } from "@/lib/data";
import SingleFacilityItem from "./home/single-facility-item";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FacilitiesContainer = () => {
  return (
    <BoxedContainer>
      <header className="mb-8 md:mb-12">
        <p className="text-primary font-medium text-center">
          {Site_Info.title}
        </p>
        <h2 className="text-3xl font-bold text-center">{facilities.title}</h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {facilities.items.map((facility) => {
          return <SingleFacilityItem key={facility.title} {...facility} />;
        })}
      </div>
      <div className="flex items-center justify-center mt-10">
        <Button variant="outline" size="lg" asChild>
          <Link href="/our-hotel-amenities">View All Facilities</Link>
        </Button>
      </div>
    </BoxedContainer>
  );
};

export default FacilitiesContainer;
