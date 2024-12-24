import { Site_Info } from "@/lib/data";
import { PaymentOptions } from "@/lib/payment-options";
import { routes } from "@/lib/routes";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import BoxedContainer from "./boxed-container";

const Footer = () => {
  return (
    <Fragment>
      <div className="py-10 md:py-16 lg:py-28 bg-[#23262D]">
        <BoxedContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="text-white">
            <h3 className="text-xl font-bold mb-8">Contacts</h3>
            <div className="flex flex-col gap-y-6 w-full md:max-w-[350px] ">
              <address>{Site_Info?.address}</address>
              <div className="text-[#EBD7B2] font-bold">
                <Link href={`mailto:${Site_Info?.reservation_email}`}>
                  {Site_Info?.reservation_email}
                </Link>
                <div className="flex flex-col gap-1 mt-2">
                  {Site_Info?.phone.map((num) => (
                    <Link href={`tel:${num}`} key={num}>
                      {num}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-start gap-x-2">
                <Image
                  src="/icons/facebook.svg"
                  alt="facebook icon"
                  width={24}
                  height={24}
                />
                <Image
                  src="/icons/instagram.svg"
                  alt="instagram icon"
                  width={24}
                  height={24}
                />
                <Image
                  src="/icons/whatsapp.svg"
                  alt="whatsapp icon"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
          <div className="text-white">
            <h3 className="text-xl font-bold mb-8">Sitemap</h3>
            <div className="flex flex-col gap-y-3">
              {routes.map((route) => {
                return (
                  <Link href={route.path} key={route.label}>
                    {route.label}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="text-white">
            <h3 className="text-xl font-bold mb-8">Other Links</h3>
            <div className="flex flex-col gap-y-3">
              <Link href="/refund-and-cancellation-policy">
                Refund & Cancellation
              </Link>
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/child-and-extra-bed">Child & Extra Bed Policy</Link>
              <Link href="/practical-information">Practical Information</Link>
            </div>
          </div>
          <div className="text-white">
            <h3 className="text-xl font-bold mb-8">We Accept</h3>
            <div className="flex items-center gap-2">
              {PaymentOptions.map((image, index: number) => (
                <Image
                  key={index}
                  src={image}
                  alt="payment option image"
                  width={70}
                  height={40}
                />
              ))}
            </div>
          </div>
        </BoxedContainer>
      </div>
      <div className="bg-[#1F2127] text-white font-light flex items-center justify-center p-6 tracking-wider text-sm text-center">
        <p>
          &copy; {new Date().getFullYear()} by The Ladakh Avenue. Powered by{" "}
          <Link
            href="https://www.cooltechdesign.com"
            target="_blank"
            className="ml-1 underline underline-offset-4"
          >
            Cool Tech Design
          </Link>
        </p>
      </div>
    </Fragment>
  );
};

export default Footer;
