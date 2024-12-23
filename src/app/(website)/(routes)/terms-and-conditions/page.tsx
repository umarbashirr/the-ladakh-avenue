import PageHero from "../../_components/page-hero";
import BoxedContainer from "../../_components/boxed-container";
import Link from "next/link";

const TermsAndConditionsPage = () => {
  return (
    <>
      <PageHero
        title="Terms and Conditions"
        heading="Know Your Stay Guidelines"
      />
      <div className="bg-[#FAF8F5]">
        <BoxedContainer>
          <div className="py-12 md:py-20 lg:py-28 space-y-8">
            <section>
              <h2 className="text-primary text-xl font-medium">Introduction</h2>
              <p className="text-gray-700 mt-4">
                Welcome to The Ladakh Avenue. By accessing or using our
                services, you agree to the following terms and conditions.
                Please read them carefully before booking or using any services
                offered by our hotel.
              </p>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">
                Booking Policy
              </h2>
              <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
                <li>
                  All bookings are subject to availability and confirmation by
                  the hotel.
                </li>
                <li>
                  Guests are required to provide accurate information during the
                  booking process.
                </li>
                <li>
                  Advance payment may be required to confirm the reservation.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">
                Check-In and Check-Out Policy
              </h2>
              <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
                <li>
                  Check-in time is 2:00 PM, and check-out time is 12:00 PM.
                </li>
                <li>
                  Early check-in and late check-out are subject to availability
                  and may incur additional charges.
                </li>
                <li>Valid identification is required during check-in.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">
                Cancellation and Refund Policy
              </h2>
              <p className="text-gray-700 mt-4">
                Our cancellation and refund policy is detailed on our
                <Link
                  href="/refund-and-cancellation-policy"
                  className="text-primary font-semibold"
                >
                  Refund & Cancellation Policy
                </Link>
                page.
              </p>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">
                Guest Responsibilities
              </h2>
              <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
                <li>
                  Guests are expected to respect hotel property and follow all
                  house rules during their stay.
                </li>
                <li>
                  Damages caused to the hotel property by guests will be charged
                  to the responsible party.
                </li>
                <li>
                  Illegal activities are strictly prohibited on the premises.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">
                Privacy Policy
              </h2>
              <p className="text-gray-700 mt-4">
                Your personal information is handled in accordance with our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-primary font-semibold"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">
                Limitation of Liability
              </h2>
              <p className="text-gray-700 mt-4">
                The Ladakh Avenue is not liable for any personal injuries, loss,
                or damages during your stay unless caused by the hotel&apos;s
                negligence.
              </p>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">
                Amendments to Terms
              </h2>
              <p className="text-gray-700 mt-4">
                The hotel reserves the right to modify these terms and
                conditions at any time. Updated terms will be posted on our
                website.
              </p>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">Contact Us</h2>
              <p className="text-gray-700 mt-4">
                If you have any questions or concerns regarding these terms,
                please feel free to{" "}
                <Link href="/contact-us" className="text-primary font-semibold">
                  contact us
                </Link>
                .
              </p>
            </section>
          </div>
        </BoxedContainer>
      </div>
    </>
  );
};

export default TermsAndConditionsPage;
