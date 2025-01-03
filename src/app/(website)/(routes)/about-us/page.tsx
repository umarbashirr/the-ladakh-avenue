import { Site_Info } from "@/lib/data";
import Link from "next/link";
import BoxedContainer from "../../_components/boxed-container";
import FacilitiesContainer from "../../_components/facilities";
import FAQAccordionContainer from "../../_components/faq-accordion-container";
import AboutSection from "../../_components/home/about-section";
import AmenitiesSection from "../../_components/home/amenities-section";
import TestimonialSection from "../../_components/home/testimonials-section";
import PageHero from "../../_components/page-hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - The Ladakh Avenue",
  description:
    "Learn more about The Ladakh Avenue, your premier destination for luxury and comfort in Leh Ladakh. Discover our story, vision, and commitment to hospitality.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/about-us`,
  },
  keywords: [
    "about The Ladakh Avenue",
    "luxury hotel in Leh",
    "Ladakh hospitality",
    "Leh premium stay",
    "about Ladakh Avenue",
    "luxury accommodation Ladakh",
  ].join(", "),
  openGraph: {
    type: "website",
    locale: "en",
    siteName: "The Ladakh Avenue",
    title: "About Us - The Ladakh Avenue",
    description:
      "Learn more about The Ladakh Avenue, your premier destination for luxury and comfort in Leh Ladakh. Discover our story, vision, and commitment to hospitality.",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/about-us`,
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/og.jpeg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - The Ladakh Avenue",
    description:
      "Learn more about The Ladakh Avenue, your premier destination for luxury and comfort in Leh Ladakh. Discover our story, vision, and commitment to hospitality.",
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/og.jpeg`],
  },
};

const AboutPage = () => {
  return (
    <>
      <PageHero
        title="Enjoy Luxury Experience"
        heading="About The Ladakh Avenue"
      />
      <div className="bg-[#FAF8F5]">
        <AboutSection direction="rtl" />
      </div>
      <AmenitiesSection />
      <TestimonialSection />
      <div className="w-full h-full py-12 md:py-20 lg:py-28 bg-[#FAF8F5]">
        <FacilitiesContainer />
        <BoxedContainer>
          <hr className="my-20" />
          <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
            <div className="w-full lg:flex-1">
              <h2 className="text-primary font-medium">
                {Site_Info?.title} FAQ
              </h2>
              <h3 className="text-3xl font-bold">Frequently Asked Questions</h3>
              <p className="my-4">
                Can’t find your question in the list? Let us know your
                questions.
              </p>
              <Link
                href={"/contact-us"}
                className="font-semibold text-primary relative after:content-[''] after:bg-primary after:w-[10%] after:h-[2px] after:absolute after:-bottom-2 after:left-0 after:hover:w-full after:duration-500 after:ease-in-out after:transition-all"
              >
                Contact Us
              </Link>
            </div>
            <div className="w-full lg:flex-1">
              <FAQAccordionContainer />
            </div>
          </div>
        </BoxedContainer>
      </div>
    </>
  );
};

export default AboutPage;
