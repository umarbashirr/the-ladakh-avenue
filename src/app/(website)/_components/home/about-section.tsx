"use client";

import { Button } from "@/components/ui/button";
import BoxedContainer from "../boxed-container";
import SectionWrapper from "../section-wrapper";
import { cn } from "@/lib/utils";

interface AboutProps {
  direction?: "rtl" | "ltr";
  showButton?: boolean;
}

const AboutSection = ({
  direction = "ltr",
  showButton = false,
}: AboutProps) => {
  return (
    <SectionWrapper>
      <BoxedContainer
        className={cn(
          "flex flex-col gap-x-20 gap-y-10",
          direction === "ltr" ? "lg:flex-row" : "lg:flex-row-reverse"
        )}
      >
        <div className="self-auto lg:self-center flex-1">
          <h2 className="text-[#978667] uppercase font-medium mb-1">
            About Us
          </h2>
          <h3 className="font-bold text-3xl md:text-4xl mb-6">
            Welcome to Snowpeak Hotel
          </h3>
          <p>
            At Snowpeak Hotel, we pride ourselves on offering a luxurious
            mountain retreat where comfort meets elegance. Nestled in the heart
            of Pahalgam, our hotel provides an unparalleled experience with
            stunning views and top-notch amenities. Our commitment to excellence
            is reflected in every aspect of our service.
          </p>
          <ul className="list-disc ml-8 mt-4">
            <li>Elegant and spacious rooms with breathtaking mountain views</li>
            <li>
              Gourmet dining experiences with local and international cuisines
            </li>
            <li>State-of-the-art spa and wellness center</li>
            <li>Personalized concierge services to cater to your every need</li>
            <li>Outdoor activities and adventures for all seasons</li>
          </ul>
          {showButton && (
            <Button className="bg-[#978667] mt-6">Learn more</Button>
          )}
        </div>
        <div className="relative flex-1">
          <div className="bg-[url('/images/room-1.jpg')] bg-no-repeat bg-center bg-cover w-[70%] h-[400px] lg:h-[600px] ml-auto relative rounded-lg">
            <img
              src="/images/room-2.jpg"
              alt="room image"
              className="rounded-lg object-cover border-4 w-[250px] h-[200px] lg:h-[300px] border-white absolute top-1/2 -translate-y-1/2 -left-[125px]"
            />
          </div>
        </div>
      </BoxedContainer>
    </SectionWrapper>
  );
};

export default AboutSection;
