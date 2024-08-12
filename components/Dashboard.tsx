"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the CSS file

import heroimage from "@/public/images/dashboard/heroimage.jpg";
import heroimage1 from "@/public/images/dashboard/heroimage1.jpg";
import heroimage2 from "/images/dashboard/heroimage2.avif";
import heroimage3 from "@/public/images/dashboard/heroimage3.avif";
import heroimage4 from "@/public/images/dashboard/heroimage4.jpg";
import Image from "next/image";

function Dashboard() {
  return (
    <main id="home">
      <div className=" w-full bg-black mx-auto mt-20 mt:0">
      hey
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          showArrows={false}
          useKeyboardArrows={false}
          swipeable={false}
        >
          <div>
            <Image
              src={heroimage1}
              alt="heroimage1"
              height={1000}
              width={1500}
            />
          </div>
          <div>
            <Image src={heroimage} alt="heroimage" height={1000} width={1500} />
          </div>
          <div>
            <Image
              src={heroimage3}
              alt="heroimage3"
              height={1000}
              width={1500}
            />
          </div>
          <div>
            <Image
              src={heroimage4}
              alt="heroimage4"
              height={110}
              width={1500}
            />
          </div>
        </Carousel>
      
      </div>
    </main>
  );
}

export default Dashboard;
