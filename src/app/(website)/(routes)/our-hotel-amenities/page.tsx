import PageHero from "../../_components/page-hero";
import BoxedContainer from "../../_components/boxed-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel Amenities - The Ladakh Avenue",
  description:
    "Explore the exceptional amenities offered at The Ladakh Avenue. Enjoy luxury accommodations, modern facilities, and world-class services for a memorable stay in Leh Ladakh.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/our-hotel-amenities`,
  },
  keywords: [
    "hotel amenities in Leh",
    "luxury facilities Ladakh",
    "The Ladakh Avenue amenities",
    "premium stay Leh Ladakh",
    "modern hotel amenities Ladakh",
    "Leh Ladakh luxury accommodation",
  ].join(", "),
  openGraph: {
    type: "website",
    locale: "en",
    siteName: "The Ladakh Avenue",
    title: "Hotel Amenities - The Ladakh Avenue",
    description:
      "Explore the exceptional amenities offered at The Ladakh Avenue. Enjoy luxury accommodations, modern facilities, and world-class services for a memorable stay in Leh Ladakh.",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/our-hotel-amenities`,
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/og.jpeg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Amenities - The Ladakh Avenue",
    description:
      "Explore the exceptional amenities offered at The Ladakh Avenue. Enjoy luxury accommodations, modern facilities, and world-class services for a memorable stay in Leh Ladakh.",
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/og.jpeg`],
  },
};

const OurHotelAmenitiesPage = () => {
  return (
    <>
      <PageHero
        title="Our Hotel Amenities"
        heading="Exceptional Facilities for a Memorable Stay"
      />
      <div className="bg-[#FAF8F5]">
        <BoxedContainer>
          <div className="py-12 md:py-20 lg:py-28 space-y-8">
            <section>
              <h2 className="text-primary text-xl font-medium">
                In-Room Amenities
              </h2>
              <ul className="list-disc list-inside mt-8 text-gray-700 space-y-2 grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-10">
                <li>Welcome drink-Kashmiri Kehwa</li>
                <li>Complimentary daily mineral water (2 Bottles each Day)</li>
                <li>24/7 hot and cold running water</li>
                <li>
                  Tea/Coffee Maker / Electric Kettle with Tea n Coffee Sachets
                </li>
                <li>High-speed 5G Wi-Fi</li>
                <li>Room Service (Limited Hours)</li>
                <li>Daily Housekeeping</li>
                <li>One Plus LED TV 42 Inches, fully Wi-Fi enabled</li>
                <li>In-Room Dining Menu</li>
                <li>Intercom</li>
                <li>Private Balcony with Mountain View</li>
                <li>A seating area</li>
                <li>Wardrobe, Double Curtain</li>
                <li>Iron On Request</li>
                <li>Luggage Table</li>
                <li>Mirror with Vanity Lighting</li>
                <li>Bath towels & Hand Towels</li>
                <li>Body Wash & Shampoo</li>
                <li>Hair dryer on Request</li>
                <li>Dental & Shaving Kit</li>
              </ul>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">
                Hotel Facilities
              </h2>
              <ul className="list-disc list-inside mt-8 text-gray-700 space-y-2 grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-10">
                <li>On-site restaurant</li>
                <li>
                  Private Parking, Hotel cab available in any emergency, Indoor
                  Games
                </li>
                <li>Garden</li>
                <li>24/7 Front Desk</li>
                <li>24/7 Power Backup Genset & Inverter Battery Backup</li>
                <li>Travel Desk Assistance at Reception if needed</li>
                <li>Laundry and Dry-Cleaning Services</li>
                <li>Multilingual Staff (English, Hindi, Urdu, Kashmiri)</li>
                <li>Kids Play Area</li>
                <li>Special Packages or Discounts</li>
                <li>Luggage Room for Guests</li>
                <li>Bone Fire</li>
                <li>Wheel Chair</li>
                <li>Doctor on Call Available</li>
                <li>Oxygen Cylinder Facilities</li>
                <li>24/7 CCTV Surveillance for guest safety.</li>
                <li>Luggage Carrier from Parking to Room</li>
              </ul>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">Contact Us</h2>
              <p className="text-gray-700 mt-4">
                For further details or inquiries about our amenities, please
                reach out to our support team via the{" "}
                <a href="/contact-us" className="text-primary font-semibold">
                  Contact Us
                </a>{" "}
                page.
              </p>
            </section>
          </div>
        </BoxedContainer>
      </div>
    </>
  );
};

export default OurHotelAmenitiesPage;
