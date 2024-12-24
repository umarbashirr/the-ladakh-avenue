import BoxedContainer from "@/app/(website)/_components/boxed-container";
import PageHero from "@/app/(website)/_components/page-hero";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import { newsAndEvents } from "@/lib/data";
import Markdown from "react-markdown";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  const currentPost = newsAndEvents.find((el) => el.slug === slug);

  return {
    title: `${currentPost?.title} - The Ladakh Avenue Events`,
    description: `${currentPost?.description.slice(
      0,
      150
    )}... Read more about the exciting event at The Ladakh Avenue, including exclusive details about the event schedule, performers, and highlights.`,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_URL}/news-and-events/${currentPost?.slug}`,
    },
    keywords: [
      "The Ladakh Avenue events",
      "Leh Ladakh news",
      "Ladakh hotel events",
      "Snowpeak hotel opening",
      "Leh events March 2025",
      "exclusive Ladakh events",
    ].join(", "),
    openGraph: {
      type: "website",
      locale: "en",
      siteName: "The Ladakh Avenue",
      title: `${currentPost?.title} - The Ladakh Avenue Events`,
      description: `${currentPost?.description.slice(
        0,
        150
      )}... Read more about the exciting event at The Ladakh Avenue, including exclusive details about the event schedule, performers, and highlights.`,
      url: `${process.env.NEXT_PUBLIC_APP_URL}/news-and-events/${currentPost?.slug}`,
      images: [`${currentPost?.image}`],
    },
    twitter: {
      card: "summary_large_image",
      title: `${currentPost?.title} - The Ladakh Avenue Events`,
      description: `${currentPost?.description.slice(
        0,
        150
      )}... Read more about the exciting event at The Ladakh Avenue, including exclusive details about the event schedule, performers, and highlights.`,
      images: [`${currentPost?.image}`],
    },
  };
}

const Page = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;

  const currentPost = newsAndEvents.find((el) => el.slug === slug);

  return (
    <div>
      <PageHero
        noMaxHeight={false}
        imgUrl={currentPost?.image}
        title={currentPost?.category || ""}
        heading={currentPost?.title || ""}
      />
      <SectionWrapper>
        <BoxedContainer>
          <Markdown className="text-base lg:text-lg max-w-screen-lg mx-auto flex flex-col space-y-4 leading-loose">
            {currentPost?.description}
          </Markdown>
        </BoxedContainer>
      </SectionWrapper>
    </div>
  );
};

export default Page;
