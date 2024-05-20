import AboutSection from "../_components/home/about-section";
import AmenitiesSection from "../_components/home/amenities-section";
import FacilitiesSection from "../_components/home/facilities-section";
import HeroSection from "../_components/home/hero";
import RoomsSuitesSection from "../_components/home/room-suites-section";
import VideoSection from "../_components/home/video-section";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <RoomsSuitesSection />
      <FacilitiesSection />
      <AmenitiesSection />
    </div>
  );
};

export default Homepage;
