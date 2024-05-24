import { rooms } from "@/lib/data";
import BoxedContainer from "../../_components/boxed-container";
import PageHero from "../../_components/page-hero";
import SingleRoomLgCard, {
  RoomProps,
} from "../../_components/room/single-room-lg-card";
import SectionWrapper from "../../_components/section-wrapper";

const OurRoomsPage = () => {
  return (
    <div className="pb-80 lg:pb-20 bg-[#FAF8F5]">
      <PageHero
        title="luxury hotel experience"
        heading="Our Rooms & Suites"
        imgUrl="/images/room-1.jpg"
      />
      <SectionWrapper>
        <BoxedContainer className="flex flex-col gap-80 lg:gap-40">
          {rooms.map((room: RoomProps, index: number) => {
            return (
              <SingleRoomLgCard key={room.title} {...room} index={index} />
            );
          })}
        </BoxedContainer>
      </SectionWrapper>
    </div>
  );
};

export default OurRoomsPage;
