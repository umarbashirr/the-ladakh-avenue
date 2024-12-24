import Image from "next/image";
import BoxedContainer from "../../_components/boxed-container";
import ContactForm from "../../_components/contact/contact-form";
import PageHero from "../../_components/page-hero";
import SectionWrapper from "../../_components/section-wrapper";
import { Site_Info } from "@/lib/data";
import Markdown from "react-markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - The Ladakh Avenue",
  description:
    "Get in touch with The Ladakh Avenue. Contact us for reservations, inquiries, or assistance. We’re here to make your stay in Leh Ladakh unforgettable.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/contact-us`,
  },
  keywords: [
    "The Ladakh Avenue contact",
    "contact Leh hotel",
    "Ladakh Avenue inquiries",
    "hotel reservations Ladakh",
    "contact luxury hotel Ladakh",
    "Leh Ladakh customer support",
  ].join(", "),
  openGraph: {
    type: "website",
    locale: "en",
    siteName: "The Ladakh Avenue",
    title: "Contact Us - The Ladakh Avenue",
    description:
      "Get in touch with The Ladakh Avenue. Contact us for reservations, inquiries, or assistance. We’re here to make your stay in Leh Ladakh unforgettable.",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/contact-us`,
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/og.jpeg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - The Ladakh Avenue",
    description:
      "Get in touch with The Ladakh Avenue. Contact us for reservations, inquiries, or assistance. We’re here to make your stay in Leh Ladakh unforgettable.",
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/og.jpeg`],
  },
};

const ContactPage = () => {
  return (
    <div>
      <PageHero title="Luxury Hotel Experience" heading="Contact Us" />
      <SectionWrapper>
        <BoxedContainer className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 lg:gap-20">
          <div>
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            <ContactForm />
          </div>
          <div className="self-start border-primary border-2 p-2">
            <div className="border-2 border-primary p-6 flex flex-col gap-8">
              <div>
                <Image
                  src="/icons/location-pin.svg"
                  alt="address"
                  width={32}
                  height={32}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold mb-1">Address</h3>
                <Markdown>{Site_Info?.address}</Markdown>
              </div>
              <div>
                <Image
                  src="/icons/envelope.svg"
                  alt="address"
                  width={32}
                  height={32}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold mb-1">Email</h3>
                <p>{Site_Info?.reservation_email}</p>
              </div>
              <div>
                <Image
                  src="/icons/phone.svg"
                  alt="address"
                  width={32}
                  height={32}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold mb-1">Phone Number</h3>
                <p>{Site_Info?.phone}</p>
              </div>
            </div>
          </div>
        </BoxedContainer>
      </SectionWrapper>
    </div>
  );
};

export default ContactPage;
