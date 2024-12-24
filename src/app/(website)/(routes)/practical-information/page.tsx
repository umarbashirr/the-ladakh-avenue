import PageHero from "../../_components/page-hero";
import BoxedContainer from "../../_components/boxed-container";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practical Information - The Ladakh Avenue",
  description:
    "Get essential practical information for your stay at The Ladakh Avenue. Plan your Leh Ladakh trip with tips on weather, transportation, and more.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/practical-information`,
  },
  keywords: [
    "The Ladakh Avenue practical tips",
    "Leh Ladakh travel information",
    "hotel guide Ladakh",
    "Ladakh Avenue weather tips",
    "Leh Ladakh travel planning",
    "stay tips Ladakh hotel",
  ].join(", "),
  openGraph: {
    type: "website",
    locale: "en",
    siteName: "The Ladakh Avenue",
    title: "Practical Information - The Ladakh Avenue",
    description:
      "Get essential practical information for your stay at The Ladakh Avenue. Plan your Leh Ladakh trip with tips on weather, transportation, and more.",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/practical-information`,
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/og.jpeg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Practical Information - The Ladakh Avenue",
    description:
      "Get essential practical information for your stay at The Ladakh Avenue. Plan your Leh Ladakh trip with tips on weather, transportation, and more.",
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/og.jpeg`],
  },
};

const LadakhTravelInfoPage = () => {
  return (
    <>
      <PageHero
        title="Practical Information for Planning a Trip to Ladakh"
        heading="Essential Tips and Guidelines for Your Journey"
      />
      <div className="bg-[#FAF8F5]">
        <BoxedContainer>
          <div className="py-12 md:py-20 lg:py-28 space-y-8">
            <section>
              <h2 className="text-primary text-xl font-medium">
                Mobile Connectivity
              </h2>
              <p className="text-gray-700 mt-4">
                Airtel, Jio, and BSNL post-paid mobile connections are
                operational in Ladakh, while roaming prepaid SIMs are
                non-functional. Wi-Fi is available in Leh and Nubra Valley only.
              </p>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">
                Eco-Friendly Travel
              </h2>
              <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
                <li>
                  Avoid using plastic bags to maintain ecological balance.
                </li>
                <li>
                  Carry an insulated water bottle for regular hydration, which
                  helps with AMS (Acute Mountain Sickness).
                </li>
                <li>Travelers littering may be fined.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">
                Permits and Restrictions
              </h2>
              <p className="text-gray-700 mt-4">
                Inner Line Permit is required for certain areas like Pangong
                Lake, Nubra Valley, Tso Moriri Lake, and Hanle. Citizens of
                China, Afghanistan, Bangladesh, Pakistan, and others with
                diplomatic or official passports are not allowed in restricted
                areas.
              </p>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">
                Health and Safety Tips
              </h2>
              <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
                <li>
                  Avoid smoking, alcohol consumption, or sleeping pills at high
                  altitudes.
                </li>
                <li>
                  Carry essential medicines like Diamox for AMS, and consult a
                  doctor before use. Include basic medicines for common ailments
                  like headache or fever.
                </li>
                <li>Walk slowly, stay relaxed, and avoid exertion.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">
                Electronics and Essentials
              </h2>
              <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
                <li>
                  Chargers, spare batteries, and power banks for electronic
                  devices.
                </li>
                <li>Spare memory cards for photography enthusiasts.</li>
                <li>A government-issued ID (original and copies).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">
                Clothes to Pack
              </h2>
              <p className="text-gray-700 mt-4">
                Proper clothing is essential for a comfortable journey to
                Ladakh. Below is a month-wise guide to help you pack
                efficiently:
              </p>

              <div className="space-y-6 mt-4">
                <div>
                  <h3 className="text-lg font-semibold text-primary">
                    March - June
                  </h3>
                  <p className="mt-2 text-gray-700">
                    These months are colder, with temperatures ranging from 6°C
                    to 21°C. Snowfall is common in March and April but rare in
                    May and June.
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-2">
                    <li>A warm jacket</li>
                    <li>Thermals / Warmers</li>
                    <li>Couple of woolens</li>
                    <li>Woolen socks</li>
                    <li>Warm insulated shoes</li>
                    <li>Balaclava or Monkey cap</li>
                    <li>Warm gloves</li>
                    <li>Sunglasses</li>
                    <li>Sunblock lotion</li>
                    <li>Cold cream</li>
                    <li>Lip balm</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary">
                    July - August
                  </h3>
                  <p className="mt-2 text-gray-700">
                    These are warmer months, with temperatures ranging between
                    15°C and 25°C. Rainfall is minimal, but travelers coming by
                    road or motorcycle should carry rain gear.
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-2">
                    <li>A warm jacket</li>
                    <li>Regular cotton clothes</li>
                    <li>Couple of woolens</li>
                    <li>Regular sports shoes</li>
                    <li>Light gloves</li>
                    <li>Sunglasses</li>
                    <li>Sunblock lotion</li>
                    <li>Cold cream</li>
                    <li>Lip balm</li>
                    <li>Rain gear (for road trips)</li>
                    <li>Umbrella (optional)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary">
                    September - October
                  </h3>
                  <p className="mt-2 text-gray-700">
                    The temperatures during these months range from 10°C to
                    16°C. Nights can get chilly, especially in higher altitudes.
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-2">
                    <li>A warm jacket</li>
                    <li>Thermals / Warmers</li>
                    <li>Heavy woolens</li>
                    <li>Woolen socks</li>
                    <li>Warm insulated shoes</li>
                    <li>Woolen cap</li>
                    <li>Two pairs of gloves (light and heavy)</li>
                    <li>Sunglasses</li>
                    <li>Sunblock lotion</li>
                    <li>Cold cream</li>
                    <li>Lip balm</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">
                Ladakhi Language Basics
              </h2>
              <p className="text-gray-700 mt-4">
                Knowing a few Ladakhi phrases can enhance your experience:
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
                <li>
                  <strong>JULLEY:</strong> Hello / Thank you / Goodbye.
                </li>
                <li>
                  <strong>KHAMZANG IN LEY:</strong> I am fine.
                </li>
                <li>
                  <strong>NYERANG MING-A CHI-IN LEY?</strong> What is your name?
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">Contact Us</h2>
              <p className="text-gray-700 mt-4">
                For more details or assistance, visit our{" "}
                <Link href="/contact-us" className="text-primary font-semibold">
                  Contact Us
                </Link>{" "}
                page.
              </p>
            </section>
          </div>
        </BoxedContainer>
      </div>
    </>
  );
};

export default LadakhTravelInfoPage;
