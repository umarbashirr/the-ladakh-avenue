"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import BoxedContainer from "../boxed-container";
import { QuoteIcon } from "lucide-react";
import { reviews } from "@/lib/data";

const TestimonialSection = () => {
  return (
    <div className="relative bg-[url('/images/pgm-lake.jpg')] bg-no-repeat bg-cover bg-center w-full h-[500px]">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      <BoxedContainer className="flex items-center justify-center">
        <div className="relative">
          <header className="text-center mb-8">
            <h2 className="text-[#EBD7B2] font-semibold">Testimonials</h2>
            <h3 className="text-white text-2xl font-bold">
              What Clients Say About Us
            </h3>
          </header>
          <Carousel
            className="w-[300px] sm:w-[400px] md:w-[550px] lg:w-[700px] mx-auto bg-white bg-opacity-5 p-6 rounded-lg"
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
          >
            <CarouselContent>
              {reviews.map((item, index) => {
                return (
                  <CarouselItem key={index}>
                    <div className="text-white">
                      <QuoteIcon size={24} className="mx-auto mb-6" />
                      <p className="mb-4 text-xl font-semibold text-center">
                        {item?.title}
                      </p>
                      <p className="text-center">{item?.review}</p>
                      <p className="text-center mt-4">Posted by {item?.name}</p>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="bg-transparent outline-white text-white" />
            <CarouselNext className="bg-transparent outline-white text-white" />
          </Carousel>
        </div>
      </BoxedContainer>
    </div>
  );
};

export default TestimonialSection;
