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
          <h2 className="text-primary uppercase font-medium mb-1">About Us</h2>
          <h3 className="font-bold text-3xl md:text-4xl mb-6">
            Welcome to The Ladakh Avenue
          </h3>
          <p className="text-base leading-[2.5]">
            The Ladakh Avenue is a peaceful retreat located just a short walk
            from Leh&lsquo;s main market. Surrounded by the natural beauty of
            Ladakh, our hotel provides comfortable rooms, modern facilities, and
            a convenient location for exploring the region&lsquo;s cultural and
            natural landmarks. Whether you&apos;re visiting for leisure or
            adventure, we aim to make your stay comfortable and enjoyable.
          </p>
          <h4 className="text-lg font-semibold mt-4">Our Key Features:</h4>
          <ul className="list-disc ml-8 mt-4 flex flex-col gap-3">
            <li>Located just 5 minutes from Leh&lsquo;s main market.</li>
            <li>Rooms with private balconies offering mountain views.</li>
            <li>
              Modern amenities, including central heating and en-suite
              bathrooms.
            </li>
            <li>Spacious rooms and suites suitable for families and groups.</li>
            <li>
              Convenient access to local cultural and natural attractions.
            </li>
          </ul>
          {showButton && (
            <Button className="bg-primary mt-6">Learn more</Button>
          )}
        </div>
        <div className="relative flex-1">
          <div className="bg-[url('/hotel-images/tla-10.jpeg')] bg-no-repeat bg-center bg-cover w-[90%] h-[400px] lg:h-[600px] ml-auto relative rounded-lg"></div>
        </div>
      </BoxedContainer>
    </SectionWrapper>
  );
};

export default AboutSection;
