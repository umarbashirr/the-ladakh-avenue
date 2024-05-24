"use client";

import Image from "next/image";
import Link from "next/link";
import { RoomProps } from "../room/single-room-lg-card";

const SingleRoomCard = ({ title, pricePerNight, image, slug }: RoomProps) => {
  return (
    <div>
      <div className="w-full h-[250px] md:h-[450px] relative overflow-hidden rounded-lg shadow-md group">
        <Image
          src={image}
          alt={`${image} title`}
          fill
          className="object-cover group-hover:scale-125 transition-all ease-in-out duration-1000"
        />
        <div className="bg-gradient-to-b from-transparent to-slate-900 w-full h-[100px] bottom-0 left-0 absolute opacity-80 group-hover:h-[200px] transition-all ease-in-out duration-1000"></div>
        <div className="absolute -bottom-5 left-6 group-hover:bottom-6 transition-all ease-in-out duration-1000">
          <p className="uppercase font-semibold text-white text-xs mb-px">
            From ₹{pricePerNight}/Night
          </p>
          <h3 className="text-white font-bold text-2xl">{title}</h3>
          <div className="mt-4 ">
            <Link
              href={`/our-rooms/${slug}`}
              className="text-white underline underline-offset-8 font-bold text-sm "
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRoomCard;
