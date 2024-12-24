import { Metadata } from "next";
import GalleryContainer from "../../_components/gallery/gallery-container";
import PageHero from "../../_components/page-hero";

export const metadata: Metadata = {
  title: "Our Gallery - The Ladakh Avenue",
  description:
    "Explore breathtaking images of The Ladakh Avenue and its surroundings. View our luxurious rooms, scenic views, and unforgettable experiences in Leh Ladakh.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/gallery`,
  },
  keywords: [
    "The Ladakh Avenue gallery",
    "Ladakh hotel images",
    "luxury hotel photos",
    "Leh Ladakh scenic views",
    "hotel interior pictures",
    "Ladakh Avenue photography",
  ].join(", "),
  openGraph: {
    type: "website",
    locale: "en",
    siteName: "The Ladakh Avenue",
    title: "Our Gallery - The Ladakh Avenue",
    description:
      "Explore breathtaking images of The Ladakh Avenue and its surroundings. View our luxurious rooms, scenic views, and unforgettable experiences in Leh Ladakh.",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/gallery`,
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/og.jpeg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Gallery - The Ladakh Avenue",
    description:
      "Explore breathtaking images of The Ladakh Avenue and its surroundings. View our luxurious rooms, scenic views, and unforgettable experiences in Leh Ladakh.",
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/og.jpeg`],
  },
};

const GalleryPage = () => {
  return (
    <div>
      <PageHero title="Luxury Hotel Experience" heading="Our Gallery" />
      <GalleryContainer />
    </div>
  );
};

export default GalleryPage;
