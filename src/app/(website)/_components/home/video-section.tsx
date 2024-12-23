"use client";

import BoxedContainer from "../boxed-container";

const VideoSection = () => {
  return (
    <div className="relative w-full h-[350px]  lg:h-[600px] overflow-hidden py-20">
      <video
        className="absolute w-full h-full bottom-0 left-0 object-center object-cover"
        src="https://videos.pexels.com/video-files/17982149/17982149-uhd_2560_1440_30fps.mp4"
        loop
        muted
        autoPlay
      ></video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <BoxedContainer className="relative flex flex-col text-white items-center justify-center">
        {/* <h2 className="text-white font-medium uppercase text-center mb-4">
          Luxury Hotel experience
        </h2> */}
        <h3 className="text-4xl lg:text-5xl font-extrabold lg:leading-normal max-w-3xl text-center">
          Experience the beauty of Ladakh with The Ladakh Avenue
        </h3>
      </BoxedContainer>
    </div>
  );
};

export default VideoSection;
