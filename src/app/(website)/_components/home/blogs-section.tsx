"use client";

import { newsAndEvents } from "@/lib/data";
import BoxedContainer from "../boxed-container";
import SectionWrapper from "../section-wrapper";
import SingleBlogCard from "./single-blog-card";

const BlogSection = () => {
  return (
    <SectionWrapper>
      <BoxedContainer>
        <header className="mb-12">
          <p className="text-primary font-medium">Luxury Experience</p>
          <h2 className="text-3xl font-bold">News & Events</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
          {newsAndEvents.slice(0, 3).map((item) => {
            return <SingleBlogCard key={item?.title} {...item} />;
          })}
        </div>
      </BoxedContainer>
    </SectionWrapper>
  );
};

export default BlogSection;
