import { ItineraryItem, ITravelPackage } from "@/interfaces/package.interface";
import { Check, X } from "lucide-react";
import { PackageBookingForm } from "./_components/package-booking-form";
import { SliderContainer } from "./_components/slider-container";
import { PACKAGES } from "@/lib/packages";
import BoxedContainer from "@/app/(website)/_components/boxed-container";
import PageHero from "@/app/(website)/_components/page-hero";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  const currentPackage = PACKAGES.find((el) => el.slug === slug);

  return {
    title: `${currentPackage?.title} - Package Details | The Ladakh Avenue`,
    description: `${currentPackage?.short_desc}`,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_URL}/our-packages/${currentPackage?.slug}`,
    },
    keywords: [
      "Ladakh package details",
      "The Ladakh Avenue packages",
      "Leh Ladakh exclusive packages",
      "Ladakh hotel deals",
      "luxury stay Ladakh offers",
      `${currentPackage?.title}`,
    ].join(", "),
    openGraph: {
      type: "website",
      locale: "en",
      siteName: "The Ladakh Avenue",
      title: `${currentPackage?.title} - Package Details | The Ladakh Avenue`,
      description: `${currentPackage?.short_desc}`,
      url: `${process.env.NEXT_PUBLIC_APP_URL}/our-packages/${currentPackage?.slug}`,
      images: [`${currentPackage?.featured_image}`],
    },
    twitter: {
      card: "summary_large_image",
      title: `${currentPackage?.title} - Package Details | The Ladakh Avenue`,
      description: `${currentPackage?.short_desc}`,
      images: currentPackage?.image_gallery,
    },
  };
}

const SinglePackagePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const selectedPackage: ITravelPackage | undefined = PACKAGES.find(
    (tp) => tp.slug === slug
  );

  return (
    <>
      <PageHero
        title="Experience the journey of a lifetime"
        heading={selectedPackage?.title || ""}
        imgUrl={selectedPackage?.featured_image}
      />
      <section className="my-12 md:my-24">
        <BoxedContainer className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
          <div className="border rounded-xl p-6 shadow">
            <h1 className="text-3xl font-semibold mb-4">
              {selectedPackage?.title}
            </h1>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Overview
            </h2>
            <p className="text-text leading-loose">
              {selectedPackage?.overview}
            </p>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-primary">
                Trip Highlights
              </h2>
              <ul className="mt-4 flex flex-col gap-2 list-disc ml-8 text-text">
                {selectedPackage?.highlights.map(
                  (highlight: string, index: number) => (
                    <li key={index}>{highlight}</li>
                  )
                )}
              </ul>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Tour Itinerary
              </h2>
              <div className="flex flex-col space-y-4">
                {selectedPackage?.itinerary.map(
                  (it: ItineraryItem, index: number) => (
                    <div
                      key={index}
                      className="flex flex-col space-y-2 border rounded-lg"
                    >
                      <h3 className="text-lg font-medium text-primary bg-gray-100 p-2">{`Day ${
                        index + 1
                      }: ${it?.title}`}</h3>
                      <p className="mb-2 text-text p-2 leading-loose">
                        {it?.details}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Costs
              </h2>
              <div className="flex flex-col space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-primary">
                    Cost Includes
                  </h3>
                  <ul className="list-disc flex flex-col gap-2 ml-8 mt-4">
                    {selectedPackage?.includes.map(
                      (include: string, index: number) => (
                        <li className="flex items-center gap-2" key={index}>
                          <Check className="w-4 h-4 text-green-500 shrink-0" />{" "}
                          <span>{include}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-primary">
                    Cost Excludes
                  </h3>
                  <ul className="list-disc flex flex-col gap-2 ml-8 mt-4">
                    {selectedPackage?.excludes.map(
                      (include: string, index: number) => (
                        <li className="flex items-center gap-2" key={index}>
                          <X className="text-red-500 w-4 h-4 shrink-0" />{" "}
                          <span>{include}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-10 overflow-hidden">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Our Gallery
              </h2>
              <SliderContainer data={selectedPackage?.image_gallery} />
            </div>
          </div>
          <div className="w-full border p-6 rounded-xl shadow self-start sticky top-[100px]">
            <h2 className="text-2xl font-semibold text-primary mb-2">
              Enquiry Form
            </h2>
            <p className="text-text text-sm mb-4">
              Fill out the below form in order to get the quotation for this
              package.
            </p>
            <PackageBookingForm initialData={selectedPackage} />
          </div>
        </BoxedContainer>
      </section>
    </>
  );
};

export default SinglePackagePage;
