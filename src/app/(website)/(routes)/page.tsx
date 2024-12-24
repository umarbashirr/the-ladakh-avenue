import { rooms } from "@/lib/data";
import { Metadata } from "next";
import AboutSection from "../_components/home/about-section";
import AmenitiesSection from "../_components/home/amenities-section";
import BlogSection from "../_components/home/blogs-section";
import FacilitiesSection from "../_components/home/facilities-section";
import HeroSection from "../_components/home/hero";
import RoomsSuitesSection from "../_components/home/room-suites-section";
import VideoSection from "../_components/home/video-section";

export const metadata: Metadata = {
  title: "The Ladakh Avenue - Premium Stay in Leh Ladakh",
  description:
    "Experience unparalleled comfort and scenic beauty at The Ladakh Avenue. Enjoy luxurious rooms, modern amenities, and breathtaking views in the heart of Leh Ladakh.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}`,
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
    url: `${process.env.NEXT_PUBLIC_APP_URL}`,
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/og.jpeg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ladakh Avenue - Premium Stay in Leh Ladakh",
    description:
      "Experience unparalleled comfort and scenic beauty at The Ladakh Avenue. Enjoy luxurious rooms, modern amenities, and breathtaking views in the heart of Leh Ladakh.",
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/og.jpeg`],
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
      {/* <AmenitiesSection /> */}
      {/* <TestimonialSection /> */}
      <BlogSection />
    </div>
  );
};

export default Homepage;
