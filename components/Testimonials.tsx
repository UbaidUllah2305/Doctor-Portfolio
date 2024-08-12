"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Testimonials } from "@/constants/Testimonials";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <div className="flex justify-center mt-14 px-4">
  <div className="w-full max-w-xs md:max-w-md">
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Testimonials.map((test, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-4">
                  <div className="text-center">
                    <h1 className="text-xl md:text-3xl font-bold text-black">
                      {test.heading}
                    </h1>
                    <p className="mt-2 md:mt-3 text-gray-500">
                      {test.description}
                    </p>
                    <div className="flex flex-col items-center mt-4">
                      <Image
                        width={100}
                        height={100}
                        alt="Test Image"
                        src={test.img}
                        className="rounded-full w-20 h-20 md:w-24 md:h-24 object-cover"
                      />
                      <div className="mt-3 text-center">
                        <span className="block font-semibold">{test.name}</span>
                        <span className="text-gray-400">New Patient</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
     <div className="hidden md:block" >
       <CarouselPrevious />
      <CarouselNext />
     </div>
    </Carousel>
  </div>
</div>
  );
}
