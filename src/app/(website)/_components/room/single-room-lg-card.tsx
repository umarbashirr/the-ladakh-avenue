"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface RoomProps {
  title: string;
  slug: string;
  pricePerNight: number;
  image: string;
  amenities: { label: string; icon: string }[];
  description: string;
  about: string;
  galleryImages: string[];
}

interface SingleRoomLgCardProps extends RoomProps {
  index: number;
}

const SingleRoomLgCard = ({
  title,
  slug,
  pricePerNight,
  image,
  description,
  amenities,
  index,
}: SingleRoomLgCardProps) => {
  return (
    <div className="relative w-full h-[650px]">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover rounded-xl  shadow-md"
      />
      <div
        className={cn(
          "bg-white  shadow-sm w-full max-w-[320px] md:max-w-xl absolute -bottom-[270px] lg:-bottom-[100px] left-1/2 -translate-x-1/2 lg:-translate-x-0 min-h-[300px] p-6",
          (index + 1) % 2 === 0 ? "lg:right-[100px]" : "lg:left-[100px]"
        )}
      >
        <p className="text-primary font-medium uppercase text-sm mb-2">
          Starting from {pricePerNight}/Night
        </p>
        <h2 className="font-bold text-2xl">{title}</h2>
        <p className="mt-4">{description}</p>
        <div className="flex flex-col items-start justify-start md:flex-row md:items-center md:justify-start gap-4 mt-4">
          {amenities.slice(0, 3).map((amenity) => {
            return (
              <div
                className="flex items-center justify-center gap-2"
                key={amenity?.label}
              >
                <Image
                  src={amenity?.icon}
                  alt={amenity?.label}
                  width={24}
                  height={24}
                />
                <p className="text-primary">{amenity?.label}</p>
              </div>
            );
          })}
        </div>
        <hr className="my-4" />
        <div className="flex items-center justify-between">
          <Link
            href="https://bookings.asiatech.in/?page=8149"
            className="relative h-9 flex items-center justify-between bg-primary w-9 overflow-visible whitespace-nowrap rounded-full hover:text-white hover:w-[136px] duration-300 ease-in-out transition-all cursor-pointer"
          >
            <ChevronRight size={24} className="ml-[8px] text-white absolute" />
            <span className="absolute left-12 font-semibold text-sm">
              Book Now
            </span>
          </Link>
          <Link
            className="text-sm font-semibold relative after:content-[''] after:bg-[#333] after:w-[0%] after:h-[2px] after:absolute after:-bottom-1 after:left-0 after:hover:w-full after:duration-500 after:ease-in-out after:transition-all"
            href={`/our-rooms/${slug}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleRoomLgCard;
