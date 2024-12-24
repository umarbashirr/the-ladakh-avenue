import React from "react";
import PageHero from "../../_components/page-hero";
import SectionWrapper from "../../_components/section-wrapper";
import BoxedContainer from "../../_components/boxed-container";
import { newsAndEvents } from "@/lib/data";
import SingleBlogCard from "../../_components/home/single-blog-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Events - The Ladakh Avenue",
  description:
    "Stay updated with the latest news and events at The Ladakh Avenue. Discover exciting happenings and updates from Leh Ladakh's premium hotel.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/news-and-events`,
  },
  keywords: [
    "The Ladakh Avenue news",
    "hotel events in Ladakh",
    "Ladakh hotel updates",
    "The Ladakh Avenue announcements",
    "latest hotel happenings",
    "Leh Ladakh events",
  ].join(", "),
  openGraph: {
    type: "website",
    locale: "en",
    siteName: "The Ladakh Avenue",
    title: "News & Events - The Ladakh Avenue",
    description:
      "Stay updated with the latest news and events at The Ladakh Avenue. Discover exciting happenings and updates from Leh Ladakh's premium hotel.",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/news-and-events`,
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/og.jpeg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Events - The Ladakh Avenue",
    description:
      "Stay updated with the latest news and events at The Ladakh Avenue. Discover exciting happenings and updates from Leh Ladakh's premium hotel.",
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/og.jpeg`],
  },
};

const Page = () => {
  return (
    <div>
      <PageHero title="Luxury Hotel Experience" heading="News & Events" />
      <SectionWrapper>
        <BoxedContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {newsAndEvents.map((el) => {
            return <SingleBlogCard key={el?.title} {...el} />;
          })}
        </BoxedContainer>
      </SectionWrapper>
    </div>
  );
};

export default Page;
