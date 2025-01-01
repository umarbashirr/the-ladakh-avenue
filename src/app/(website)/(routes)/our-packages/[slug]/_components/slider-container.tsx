"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function SliderContainer({ data }: { data: any }) {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full rounded-xl overflow-hidden"
    >
      <CarouselContent>
        {data.map((d: string, index: number) => (
          <CarouselItem
            key={index}
            className="w-full h-[450px] "
            style={{
              background: `url(${d})`,
              backgroundSize: "cover",
              backgroundPosition: "bottom center",
              backgroundRepeat: "no-repeat",
            }}
          ></CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
