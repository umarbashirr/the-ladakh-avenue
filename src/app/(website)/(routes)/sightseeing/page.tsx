import PageHero from "../../_components/page-hero";
import BoxedContainer from "../../_components/boxed-container";
import { SIGHT_SEEING } from "@/lib/sightseeing";
import Image from "next/image";
import { cn } from "@/lib/utils";

const SightSeeingPage = () => {
  return (
    <>
      <PageHero title="Sight Seeing" heading="Explore the Best Attractions" />
      <div className="bg-[#FAF8F5]">
        <BoxedContainer className="pt-2 md:pt-4 pb-12 md:pb-24">
          {SIGHT_SEEING.map((location, index) => {
            return (
              <div key={index}>
                <h2 className="text-3xl text-center uppercase font-semibold my-10 md:my-20">
                  {location.title}
                </h2>
                <div className="space-y-5 md:space-y-10">
                  {location.places.map((loc, index) => {
                    return (
                      <div
                        key={index + 1}
                        className={cn(
                          "flex flex-col gap-5 md:flex-row items-center md:gap-10 relative md:even:flex-row-reverse"
                        )}
                      >
                        <div className="w-full h-full min-h-[250px] md:min-h-[400px] relative  flex-1">
                          <Image
                            src={loc?.img}
                            alt={loc?.title + " " + "image"}
                            className="rounded-md shadow-sm object-cover"
                            fill
                          />
                        </div>
                        <div className=" flex-1">
                          <h3 className="font-medium text-xl uppercase mb-4">
                            {loc?.title}
                          </h3>
                          <p className="text-muted-foreground leading-loose">
                            {loc?.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </BoxedContainer>
      </div>
    </>
  );
};

export default SightSeeingPage;
