"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        border: "1px solid #333",
        borderRadius: "50%",
        color: "#333",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        border: "1px solid #333",
        borderRadius: "50%",
        stroke: "#333",
      }}
      onClick={onClick}
    />
  );
}

const GallerySlider = ({ currentRoom }: any) => {
  const settings = {
    className: "center",
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="slider-container pb-20">
      <Slider {...settings}>
        {currentRoom?.galleryImages?.map((image: string) => {
          return (
            <div className="relative h-[350px] w-[600px]" key={image}>
              <Image fill className="object-cover" src={image} alt="image" />
            </div>
          );
        })}
      </Slider>
      <div className="flex items-center justify-center mt-8">
        <Button
          variant="outline"
          className="bg-transparent rounded-full border-[#4B514D] duration-300 ease-in-out transition-all hover:bg-[#4B514D] hover:text-white"
          size="lg"
          asChild
        >
          <Link href="/our-rooms">View Gallery</Link>
        </Button>
      </div>
    </div>
  );
};

export default GallerySlider;
