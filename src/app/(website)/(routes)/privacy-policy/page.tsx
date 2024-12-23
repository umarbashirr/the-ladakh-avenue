import PageHero from "../../_components/page-hero";
import BoxedContainer from "../../_components/boxed-container";
import Link from "next/link";

const PrivacyPolicyPage = () => {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        heading="Your Information is Safe with Us"
      />
      <div className="bg-[#FAF8F5]">
        <BoxedContainer>
          <div className="py-12 md:py-20 lg:py-28 space-y-8">
            <section>
              <h2 className="text-primary text-xl font-medium">Introduction</h2>
              <p className="text-gray-700 mt-4">
                At The Ladakh Avenue, we respect your privacy and are committed
                to protecting your personal information. This Privacy Policy
                outlines how we collect, use, and safeguard your data.
              </p>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">
                Information We Collect
              </h2>
              <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
                <li>
                  Personal details provided during booking (e.g., name, contact
                  number, email address).
                </li>
                <li>Payment information for processing transactions.</li>
                <li>
                  Browser and device information collected through cookies for
                  website analytics.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">
                How We Use Your Information
              </h2>
              <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
                <li>To process and confirm bookings.</li>
                <li>To communicate updates regarding your stay or offers.</li>
                <li>To improve our website and services through analytics.</li>
                <li>
                  To comply with legal requirements or respond to lawful
                  requests.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">
                Information Sharing
              </h2>
              <p className="text-gray-700 mt-4">
                We do not sell or share your personal information with third
                parties, except as necessary for booking services or required by
                law.
              </p>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">
                Data Security
              </h2>
              <p className="text-gray-700 mt-4">
                We implement robust security measures to protect your data from
                unauthorized access or disclosure. However, no method of
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">Your Rights</h2>
              <p className="text-gray-700 mt-4">
                You have the right to access, correct, or delete your personal
                information. Please contact us for assistance in exercising
                these rights.
              </p>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">
                Updates to This Policy
              </h2>
              <p className="text-gray-700 mt-4">
                We may update this Privacy Policy from time to time. Please
                review this page periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">Contact Us</h2>
              <p className="text-gray-700 mt-4">
                If you have any questions about this Privacy Policy, please{" "}
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

export default PrivacyPolicyPage;
