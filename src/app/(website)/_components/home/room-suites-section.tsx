"use client";

import { rooms } from "@/lib/data";
import BoxedContainer from "../boxed-container";
import SectionWrapper from "../section-wrapper";
import SingleRoomCard from "./single-room-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const RoomsSuitesSection = () => {
  return (
    <SectionWrapper className="bg-[#FAF8F5]">
      <BoxedContainer>
        <p className="text-[#978667] font-medium">Luxury Experience</p>
        <h2 className="text-3xl font-bold">Rooms & Suites</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-5">
          {rooms.map((room) => {
            return <SingleRoomCard key={room.title} {...room} />;
          })}
        </div>
        <div className="mt-5 flex items-center justify-end">
          <Button
            variant="outline"
            className="bg-transparent rounded-full border-[#4B514D] duration-300 ease-in-out transition-all hover:bg-[#4B514D] hover:text-white"
            asChild
          >
            <Link href="/our-rooms">View All Rooms</Link>
          </Button>
        </div>
      </BoxedContainer>
    </SectionWrapper>
  );
};

export default RoomsSuitesSection;
