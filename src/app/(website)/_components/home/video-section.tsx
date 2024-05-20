"use client";

import BoxedContainer from "../boxed-container";

const VideoSection = () => {
  return (
    <div className="relative w-full h-[350px]  lg:h-[600px] overflow-hidden py-20">
      <video
        className="absolute w-full h-full bottom-0 left-0 object-center object-cover"
        src="/video/dal-lake.mp4"
        loop
        muted
        autoPlay
      ></video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <BoxedContainer className="relative flex flex-col text-white items-center justify-center">
        <h2 className="text-[#978667] font-medium uppercase text-center mb-4">
          Luxury Hotel experience
        </h2>
        <h3 className="text-4xl lg:text-5xl font-extrabold max-w-2xl text-center">
          Experience the Beauty of Snowpeak Hotel
        </h3>
      </BoxedContainer>
    </div>
  );
};

export default VideoSection;
