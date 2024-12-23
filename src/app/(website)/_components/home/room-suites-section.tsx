"use client";

import BoxedContainer from "../boxed-container";
import { RoomProps } from "../room/single-room-lg-card";
import SectionWrapper from "../section-wrapper";
import SingleRoomCard from "./single-room-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const RoomsSuitesSection = ({
  rooms,
  title,
  noButton = false,
}: {
  rooms: RoomProps[];
  title: string;
  noButton?: boolean;
}) => {
  return (
    <SectionWrapper className="bg-[#FAF8F5]">
      <BoxedContainer>
        <p className="text-primary font-medium">Luxury Experience</p>
        <h2 className="text-3xl font-bold">{title}</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2  gap-5">
          {rooms.map((room: any) => {
            return <SingleRoomCard key={room.title} {...room} />;
          })}
        </div>
        {!noButton && (
          <div className="mt-5 flex items-center justify-end">
            <Button
              variant="outline"
              className="bg-transparent rounded-full border-[#4B514D] duration-300 ease-in-out transition-all hover:bg-[#4B514D] hover:text-white"
              asChild
            >
              <Link href="/our-rooms">View All Rooms</Link>
            </Button>
          </div>
        )}
      </BoxedContainer>
    </SectionWrapper>
  );
};

export default RoomsSuitesSection;
