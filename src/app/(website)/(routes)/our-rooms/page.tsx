import { rooms } from "@/lib/data";
import BoxedContainer from "../../_components/boxed-container";
import PageHero from "../../_components/page-hero";
import SingleRoomLgCard, {
  RoomProps,
} from "../../_components/room/single-room-lg-card";
import SectionWrapper from "../../_components/section-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Rooms - The Ladakh Avenue",
  description:
    "Explore our luxurious rooms at The Ladakh Avenue. Each room is designed for comfort and elegance, offering modern amenities and breathtaking views of Leh Ladakh.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/our-rooms`,
  },
  keywords: [
    "The Ladakh Avenue rooms",
    "luxury rooms in Leh",
    "Ladakh premium stay",
    "Leh hotel rooms",
    "Ladakh Avenue accommodation",
    "best rooms in Leh Ladakh",
    "luxury stay in Ladakh",
  ].join(", "),
  openGraph: {
    type: "website",
    locale: "en",
    siteName: "The Ladakh Avenue",
    title: "Our Rooms - The Ladakh Avenue",
    description:
      "Explore our luxurious rooms at The Ladakh Avenue. Each room is designed for comfort and elegance, offering modern amenities and breathtaking views of Leh Ladakh.",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/our-rooms`,
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/og.jpeg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Rooms - The Ladakh Avenue",
    description:
      "Explore our luxurious rooms at The Ladakh Avenue. Each room is designed for comfort and elegance, offering modern amenities and breathtaking views of Leh Ladakh.",
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/og.jpeg`],
  },
};

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
