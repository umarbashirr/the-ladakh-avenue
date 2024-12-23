import PageHero from "../../_components/page-hero";
import BoxedContainer from "../../_components/boxed-container";
import Link from "next/link";

const ChildExtraBedPolicyPage = () => {
  return (
    <>
      <PageHero
        title="Child & Extra Bed Policy"
        heading="Guidelines for Children and Extra Beds"
      />
      <div className="bg-[#FAF8F5]">
        <BoxedContainer>
          <div className="py-12 md:py-20 lg:py-28 space-y-8">
            <section>
              <h2 className="text-primary text-xl font-medium">
                Policy for Children
              </h2>
              <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
                <li>
                  <strong>Up to 5 years:</strong> Children can stay free of
                  charge, provided no extra bed is required.
                </li>
                <li>
                  <strong>5 to 10 years:</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                    <li>
                      <strong>Child No Bed (CNB):</strong> INR 700 per night
                      under the Meal Plan (MAP).
                    </li>
                    <li>
                      <strong>Child With Bed (CWB):</strong> INR 900 per night
                      under the Meal Plan (MAP).
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">
                Extra Bed Policy
              </h2>
              <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
                <li>
                  <strong>Above 10 years:</strong> Extra bed is considered
                  necessary, and the guest is charged as an adult.
                </li>
                <li>
                  <strong>Charges for Extra Bed (EB):</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                    <li>INR 1200 per night under the Meal Plan (MAP).</li>
                    <li>INR 500 per night under the European Plan (EP).</li>
                    <li>INR 800 per night under the Continental Plan (CP).</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">
                Additional Information
              </h2>
              <p className="text-gray-700 mt-4">
                The charges for Child No Bed (CNB), Child With Bed (CWB), and
                Extra Bed (EB) vary depending on the selected meal plan. Please
                ensure these details are communicated during the booking process
                to avoid any inconvenience during your stay.
              </p>
            </section>

            <section>
              <h2 className="text-primary text-xl font-medium">Contact Us</h2>
              <p className="text-gray-700 mt-4">
                For further details or assistance with bookings, please contact
                our support team via the{" "}
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

export default ChildExtraBedPolicyPage;
