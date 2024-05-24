"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface SingleAmenityItemProps {
  image: string;
  title: string;
  heading: string;
  desc: string;
  direction: string;
}

const SingleAmenityItem = ({
  image,
  title,
  heading,
  desc,
  direction,
}: SingleAmenityItemProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-between gap-10 lg:gap-28 ${
        direction === "rtl" ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className=" flex-1">
        <h2 className="text-primary font-semibold capitalize">{title}</h2>
        <h3 className="text-2xl font-bold mb-4">{heading}</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">{desc}</p>
        <Button
          variant="outline"
          className="bg-transparent rounded-full border-[#4B514D] duration-300 ease-in-out transition-all hover:bg-[#4B514D] hover:text-white"
          asChild
        >
          <Link href="/our-rooms">View All Rooms</Link>
        </Button>
      </div>
      <div className="flex-1 relative w-full h-full min-h-[300px] md:min-h-[500px] overflow-hidden rounded-lg">
        <Image src={image} alt={heading} fill className="object-cover" />
      </div>
    </div>
  );
};

export default SingleAmenityItem;
