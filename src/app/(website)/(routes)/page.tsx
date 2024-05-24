import AboutSection from "../_components/home/about-section";
import AmenitiesSection from "../_components/home/amenities-section";
import BlogSection from "../_components/home/blogs-section";
import FacilitiesSection from "../_components/home/facilities-section";
import HeroSection from "../_components/home/hero";
import RoomsSuitesSection from "../_components/home/room-suites-section";
import TestimonialSection from "../_components/home/testimonials-section";
import VideoSection from "../_components/home/video-section";
import { rooms } from "@/lib/data";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <RoomsSuitesSection rooms={rooms} title="Rooms and Suites" />
      <FacilitiesSection />
      <AmenitiesSection />
      <TestimonialSection />
      <BlogSection />
    </div>
  );
};

export default Homepage;
