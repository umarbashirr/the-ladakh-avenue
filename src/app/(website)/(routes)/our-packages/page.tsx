import { ITravelPackage } from "@/interfaces/package.interface";
import { PACKAGES } from "@/lib/packages";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BoxedContainer from "../../_components/boxed-container";
import PageHero from "../../_components/page-hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Packages - The Ladakh Avenue",
  description:
    "Explore exclusive packages from The Ladakh Avenue. Discover tailored options for a luxurious and memorable stay in Leh Ladakh.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/our-packages`,
  },
  keywords: [
    "Ladakh hotel packages",
    "Leh Ladakh travel deals",
    "luxury stay packages Leh",
    "The Ladakh Avenue offers",
    "Leh Ladakh holiday deals",
    "premium hotel packages Ladakh",
  ].join(", "),
  openGraph: {
    type: "website",
    locale: "en",
    siteName: "The Ladakh Avenue",
    title: "Our Packages - The Ladakh Avenue",
    description:
      "Explore exclusive packages from The Ladakh Avenue. Discover tailored options for a luxurious and memorable stay in Leh Ladakh.",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/our-packages`,
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/og.jpeg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Packages - The Ladakh Avenue",
    description:
      "Explore exclusive packages from The Ladakh Avenue. Discover tailored options for a luxurious and memorable stay in Leh Ladakh.",
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/og.jpeg`],
  },
};

const OurPackagePage = () => {
  return (
    <>
      <PageHero
        title="Explore our specially curated travel packages"
        heading="Our Ladakh Packages"
      />
      <BoxedContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12 md:my-24">
        {PACKAGES.map((travelPackage: ITravelPackage, index: number) => (
          <div key={index} className="border shadow rounded-xl overflow-hidden">
            <div className="w-full h-[250px] relative">
              <Image
                src={travelPackage?.featured_image}
                alt={travelPackage?.destination + " image"}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 w-full flex flex-col">
              <Link href={`/our-packages/${travelPackage?.slug}`}>
                <h3 className="text-lg font-medium">{travelPackage.title}</h3>
              </Link>
              <p className="text-sm text-text mt-4 line-clamp-3">
                {travelPackage?.short_desc}
              </p>
              <div className="py-2 border-t border-b my-4 flex items-center gap-4 text-text">
                <p className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4" /> {travelPackage?.destination}
                </p>
                <p className="text-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4" />{" "}
                  {travelPackage?.duration?.nights} N /{" "}
                  {travelPackage?.duration?.days} D
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href={`/our-packages/${travelPackage?.slug}`}>
                  View Details <ArrowRight className="w-3 h-3" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </BoxedContainer>
    </>
  );
};

export default OurPackagePage;
