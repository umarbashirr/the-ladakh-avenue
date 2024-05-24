import React from "react";
import PageHero from "../../_components/page-hero";
import SectionWrapper from "../../_components/section-wrapper";
import BoxedContainer from "../../_components/boxed-container";
import { newsAndEvents } from "@/lib/data";
import SingleBlogCard from "../../_components/home/single-blog-card";

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
