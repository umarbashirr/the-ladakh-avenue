import BoxedContainer from "@/app/(website)/_components/boxed-container";
import RoomsSuitesSection from "@/app/(website)/_components/home/room-suites-section";
import TestimonialSection from "@/app/(website)/_components/home/testimonials-section";
import PageHero from "@/app/(website)/_components/page-hero";
import GallerySlider from "@/app/(website)/_components/room/gallery-slider";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import { rooms } from "@/lib/data";
import Image from "next/image";
import Markdown from "react-markdown";

const SingleRoomPage = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;

  const currentRoom = rooms.find((room) => room.slug === slug);

  return (
    <div>
      <PageHero
        title="Luxury Hotel Experience"
        heading={currentRoom?.title || ""}
        imgUrl={currentRoom?.image}
        noMaxHeight={true}
      />

      <SectionWrapper>
        <BoxedContainer className="flex flex-col lg:flex-row items-start lg:justify-between gap-10 lg:gap-40">
          <div className="flex-1 ">
            <div className="max-w-[80%]">
              <p className="text-primary uppercase font-medium mb-1">
                Luxury Hotel Experience
              </p>
              <h2 className="font-bold text-3xl md:text-4xl mb-6 md:leading-tight">
                Experience Unmatched Comfort and Scenic Views
              </h2>
              <div className="flex flex-col space-y-4 leading-loose">
                <Markdown>{currentRoom?.about}</Markdown>
              </div>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-10">
            {currentRoom?.amenities?.map((el) => {
              return (
                <div
                  className="flex items-center justify-start gap-2 p-2 border-b"
                  key={el?.label}
                >
                  <Image
                    src={el?.icon}
                    alt={el?.label}
                    width={32}
                    height={32}
                  />
                  <p className="text-primary">{el?.label}</p>
                </div>
              );
            })}
          </div>
        </BoxedContainer>
      </SectionWrapper>
      <GallerySlider currentRoom={currentRoom} />
      {/* <TestimonialSection /> */}
      <RoomsSuitesSection
        rooms={rooms.filter((room) => room.slug !== currentRoom?.slug)}
        title="Other Similar Rooms"
        noButton={true}
      />
    </div>
  );
};

export default SingleRoomPage;
