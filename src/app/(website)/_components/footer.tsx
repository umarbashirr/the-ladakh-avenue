"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import BoxedContainer from "./boxed-container";
import { routes } from "@/lib/routes";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { Site_Info } from "@/lib/data";

const Footer = () => {
  return (
    <Fragment>
      <div className="py-10 md:py-16 lg:py-28 bg-[#23262D]">
        <BoxedContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-10">
          <div className="text-white">
            <h3 className="text-xl font-bold mb-8">Contacts</h3>
            <div className="flex flex-col gap-y-6 w-full md:max-w-[350px] ">
              <address>{Site_Info?.address}</address>
              <div className="text-[#EBD7B2] font-bold">
                <p>{Site_Info?.reservation_email}</p>
                <p>{Site_Info?.phone}</p>
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
            <h3 className="text-xl font-bold mb-8">Newsletter</h3>
            <div>
              <div className="input-group flex items-center bg-white bg-opacity-5 w-full justify-between pl-2">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="bg-transparent focus:outline-none flex-grow text-sm"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="hover:bg-transparent group"
                >
                  <Send
                    color="#ffffff"
                    className="size-5 group-hover:size-6 transition-all ease-in-out duration-200"
                  />
                </Button>
              </div>
              <p className="text-sm mt-4 text-gray-400">
                Receive latest offers and promos without spam. You can cancel
                anytime.
              </p>
            </div>
          </div>
        </BoxedContainer>
      </div>
      <div className="bg-[#1F2127] text-white font-light flex items-center justify-center p-6 tracking-wider text-sm text-center">
        <p>
          &copy; 2024 by Snowpeak hotel. Powered by
          <Link href="/" target="_blank" className="ml-1">
            {" "}
            Cool Tech Design
          </Link>
        </p>
      </div>
    </Fragment>
  );
};

export default Footer;
