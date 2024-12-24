import BoxedContainer from "@/app/(website)/_components/boxed-container";
import PageHero from "@/app/(website)/_components/page-hero";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import { newsAndEvents } from "@/lib/data";
import Markdown from "react-markdown";

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
