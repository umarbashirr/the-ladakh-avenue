import BoxedContainer from "@/app/(website)/_components/boxed-container";
import RoomsSuitesSection from "@/app/(website)/_components/home/room-suites-section";
import PageHero from "@/app/(website)/_components/page-hero";
import GallerySlider from "@/app/(website)/_components/room/gallery-slider";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import { rooms } from "@/lib/data";
import { CheckIcon } from "lucide-react";
import Markdown from "react-markdown";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  const currentRoom = rooms.find((room) => room.slug === slug);

  return {
    title: `${currentRoom?.title} - Luxury Room at The Ladakh Avenue`,
    description: `Experience the comfort and luxury of our ${currentRoom?.title}  at The Ladakh Avenue. Featuring modern amenities, stunning views, and an unforgettable stay in the heart of Leh Ladakh.`,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_URL}/our-rooms/${slug}`,
    },
    keywords: [
      "luxury room Ladakh",
      `The Ladakh Avenue ${currentRoom?.title}`,
      "Leh hotel rooms",
      `room ${currentRoom?.title} Ladakh`,
      "luxury stay in Leh",
      "best rooms in Ladakh",
    ].join(", "),
    openGraph: {
      type: "website",
      locale: "en",
      siteName: "The Ladakh Avenue",
      title: `${currentRoom?.title} - Luxury Room at The Ladakh Avenue`,
      description: `Experience the comfort and luxury of our ${currentRoom?.title}  at The Ladakh Avenue. Featuring modern amenities, stunning views, and an unforgettable stay in the heart of Leh Ladakh.`,
      url: `${process.env.NEXT_PUBLIC_APP_URL}/our-rooms/${slug}`,
      images: [`${process.env.NEXT_PUBLIC_APP_URL}/og.jpeg`],
    },
    twitter: {
      card: "summary_large_image",
      title: `${currentRoom?.title} - Luxury Room at The Ladakh Avenue`,
      description: `Experience the comfort and luxury of our ${currentRoom?.title}  at The Ladakh Avenue. Featuring modern amenities, stunning views, and an unforgettable stay in the heart of Leh Ladakh.`,
      images: [`${process.env.NEXT_PUBLIC_APP_URL}/og.jpeg`],
    },
  };
}

const SingleRoomPage = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;

  const currentRoom = rooms.find((room) => room.slug === slug);

  return (
    <div>
      <PageHero
        title="Luxury Hotel Experience"
        heading={currentRoom?.title || ""}
        imgUrl={currentRoom?.image}
        noMaxHeight={false}
      />

      <SectionWrapper>
        <BoxedContainer className="flex flex-col items-start lg:justify-between gap-10 ">
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
          <div>
            <h2 className="text-gray-900 font-semibold text-3xl mb-8">
              Our Amenities
            </h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {currentRoom?.amenities?.map((el) => {
                return (
                  <li
                    className="text-gray-900 flex flex-row gap-2 items-start justify-start"
                    key={el?.label}
                  >
                    <CheckIcon className="w-4 h-4 text-green-500 shrink-0 mt-1" />{" "}
                    {el?.label}
                  </li>
                );
              })}
            </ul>
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
