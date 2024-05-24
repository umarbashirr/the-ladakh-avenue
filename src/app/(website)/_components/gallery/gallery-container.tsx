"use client";

import React, { useState } from "react";
import PageHero from "../page-hero";
import { photos } from "@/lib/data";
import SectionWrapper from "../section-wrapper";
import BoxedContainer from "../boxed-container";
import Image from "next/image";
import ImageLightbox from "./image-lightbox";

const GalleryContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image: any) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };
  return (
    <>
      <SectionWrapper>
        <BoxedContainer className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {photos.map((photo) => {
            return (
              <div
                key={photo?.src}
                className="relative w-full h-[300px] rounded-xl shadow-sm group overflow-hidden cursor-pointer"
              >
                <Image
                  src={photo?.src}
                  alt={photo?.title}
                  fill
                  className="object-cover rounded-xl shadow-sm hover:scale-110 duration-300 ease-in-out transition-all"
                  onClick={() => openModal(photo)}
                />
              </div>
            );
          })}
        </BoxedContainer>
      </SectionWrapper>
      <ImageLightbox
        image={selectedImage}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default GalleryContainer;
