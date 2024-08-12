import Dashboard from "@/components/Dashboard";

import Image from "next/image";
import { CarouselPlugin } from "@/components/Testimonials";
import Appointment from "@/components/Appointment";
import About from "@/components/About";
import LayoutWrapper from "@/components/LayoutWrapper";
export default function Home() {
  return (
    <main>
      <LayoutWrapper>
       
        <Dashboard />
        <About />
        <CarouselPlugin />
        <Appointment />
       
      </LayoutWrapper>
    </main>
  );
}
