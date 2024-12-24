import PageHero from "../../_components/page-hero";
import BoxedContainer from "../../_components/boxed-container";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy - The Ladakh Avenue",
  description:
    "Understand our refund and cancellation policy at The Ladakh Avenue. Plan your stay in Leh Ladakh with confidence and clarity.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/refund-and-cancellation-policy`,
  },
  keywords: [
    "The Ladakh Avenue refund policy",
    "hotel cancellation terms",
    "Leh Ladakh refund conditions",
    "Ladakh Avenue booking policies",
    "hotel stay cancellation",
    "refund terms Ladakh hotel",
  ].join(", "),
  openGraph: {
    type: "website",
    locale: "en",
    siteName: "The Ladakh Avenue",
    title: "Refund & Cancellation Policy - The Ladakh Avenue",
    description:
      "Understand our refund and cancellation policy at The Ladakh Avenue. Plan your stay in Leh Ladakh with confidence and clarity.",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/refund-and-cancellation-policy`,
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/og.jpeg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund & Cancellation Policy - The Ladakh Avenue",
    description:
      "Understand our refund and cancellation policy at The Ladakh Avenue. Plan your stay in Leh Ladakh with confidence and clarity.",
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/og.jpeg`],
  },
};

const RefundCancellationPage = () => {
  return (
    <>
      <PageHero
        title="Refund & Cancellation Policy"
        heading="Understand Our Booking and Refund Policies"
      />
      <div className="bg-[#FAF8F5]">
        <BoxedContainer>
          <div className="py-12 md:py-20 lg:py-28 space-y-8">
            <section>
              <h2 className="text-primary text-xl font-medium">
                Cancellation Policy
              </h2>
              <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
                <li>
                  Cancellations made up to 14 days before the check-in date are
                  eligible for a full refund.
                </li>
                <li>
                  Cancellations made 13 to 7 days before the check-in date are
                  eligible for a 50% refund.
                </li>
                <li>
                  No refunds are provided for cancellations within 7 days of the
                  check-in date.
                </li>
                <li>
                  Modifications to booking dates are allowed up to 7 days before
                  check-in, subject to availability and potential rate
                  adjustments.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">
                Early Departure
              </h2>
              <p className="text-gray-700 mt-4">
                No refunds will be provided for early departures. Guests are
                responsible for the full payment of their originally booked stay
                duration.
              </p>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">
                Refund Process
              </h2>
              <p className="text-gray-700 mt-4">
                Refunds, if applicable, will be processed within 7-10 business
                days from the date of cancellation approval. Refunds will be
                credited to the original payment method used during booking.
              </p>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">
                Contact for Assistance
              </h2>
              <p className="text-gray-700 mt-4">
                For any issues or queries related to cancellations and refunds,
                please contact our support team via the{" "}
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

export default RefundCancellationPage;
