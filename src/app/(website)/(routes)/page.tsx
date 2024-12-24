import { Metadata } from "next";
import AboutSection from "../_components/home/about-section";
import AmenitiesSection from "../_components/home/amenities-section";
import BlogSection from "../_components/home/blogs-section";
import FacilitiesSection from "../_components/home/facilities-section";
import HeroSection from "../_components/home/hero";
import RoomsSuitesSection from "../_components/home/room-suites-section";
import TestimonialSection from "../_components/home/testimonials-section";
import VideoSection from "../_components/home/video-section";
import { rooms } from "@/lib/data";

export const metadata: Metadata = {
  title: "The Ladakh Avenue - Premium Stay in Leh Ladakh",
  description:
    "Experience unparalleled comfort and scenic beauty at The Ladakh Avenue. Enjoy luxurious rooms, modern amenities, and breathtaking views in the heart of Leh Ladakh.",
  alternates: {
    canonical: `${process.env.APP_URL}`,
  },
  keywords: [
    "luxury hotel",
    "The Ladakh Avenue",
    "Leh hotels",
    "Ladakh resorts",
    "premium stay in Leh Ladakh",
    "luxury accommodation Ladakh",
    "scenic hotels Ladakh",
  ].join(", "),
  openGraph: {
    type: "website",
    locale: "en",
    siteName: "The Ladakh Avenue",
    title: "The Ladakh Avenue - Premium Stay in Leh Ladakh",
    description:
      "Experience unparalleled comfort and scenic beauty at The Ladakh Avenue. Enjoy luxurious rooms, modern amenities, and breathtaking views in the heart of Leh Ladakh.",
    url: `${process.env.APP_URL}`,
    images: [`${process.env.APP_URL}/og.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ladakh Avenue - Premium Stay in Leh Ladakh",
    description:
      "Experience unparalleled comfort and scenic beauty at The Ladakh Avenue. Enjoy luxurious rooms, modern amenities, and breathtaking views in the heart of Leh Ladakh.",
    images: [`${process.env.APP_URL}/og.png`],
  },
};

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <RoomsSuitesSection rooms={rooms} title="Rooms and Suites" />
      <FacilitiesSection />
      <AmenitiesSection />
      {/* <TestimonialSection /> */}
      <BlogSection />
    </div>
  );
};

export default Homepage;
