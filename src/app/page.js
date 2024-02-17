import Image from "next/image";
import Hero from "./components/Hero";
import Carousal from "./components/Carousel";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Carousal />
      <Testimonial />
    </>



  );
}
