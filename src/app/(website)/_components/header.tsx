"use client";

import Link from "next/link";
import BoxedContainer from "./boxed-container";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "relative h-32 flex items-center justify-center w-full z-50",
        isSticky ? "sticky top-0  left-0 bg-white border-b" : "bg-transparent"
      )}
    >
      <BoxedContainer className="flex items-center justify-between">
        <div className="logo">
          <Link
            href="/"
            target="_self"
            className={cn(
              "flex flex-col items-center gap-0 uppercase text-white",
              isSticky ? "text-primary" : "text-white"
            )}
          >
            {/* <span className="text-xl font-bold">The Ladakh</span>
            <span>Avenue</span> */}
            <Image
              src={isSticky ? "/logo_main.svg" : "/logo_white.svg"}
              alt="The Ladakh Avenue Logo with white variant"
              width={isSticky ? 100 : 100}
              height={40}
            />
          </Link>
        </div>
        <div className="items-center justify-center gap-4 hidden lg:flex">
          <Link
            href="our-rooms"
            className={cn(
              " font-medium",
              isSticky ? "text-[#333" : "text-white",
              pathname === "/our-rooms" && "underline underline-offset-8"
            )}
          >
            Our Rooms
          </Link>
          <Link
            href="/our-hotel-amenities"
            className={cn(
              " font-medium",
              isSticky ? "text-[#333" : "text-white",
              pathname === "/our-hotel-amenities" &&
                "underline underline-offset-8"
            )}
          >
            Amenities
          </Link>
          <Link
            href="/our-packages"
            className={cn(
              " font-medium",
              isSticky ? "text-[#333" : "text-white",
              pathname === "/our-packages" && "underline underline-offset-8"
            )}
          >
            Our Packages
          </Link>
          <Link
            href="/gallery"
            className={cn(
              " font-medium",
              isSticky ? "text-[#333" : "text-white",
              pathname === "/gallery" && "underline underline-offset-8"
            )}
          >
            Our Gallery
          </Link>
          <Link
            href="/practical-information"
            className={cn(
              " font-medium",
              isSticky ? "text-[#333" : "text-white",
              pathname === "/practical-information" &&
                "underline underline-offset-8"
            )}
          >
            Practical Information
          </Link>
          <Link
            href="/contact-us"
            className={cn(
              " font-medium",
              isSticky ? "text-[#333" : "text-white",
              pathname === "/contact-us" && "underline underline-offset-8"
            )}
          >
            Contact Us
          </Link>
        </div>
        <nav className="navbar flex items-center gap-x-2">
          <Button
            variant="secondary"
            className="bg-primary text-white hover:bg-[#4B514D]"
            asChild
          >
            <Link href="https://bookings.asiatech.in/?page=8149">Book Now</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-transparent"
            onClick={() => setIsOpen(true)}
          >
            <MenuIcon className={isSticky ? "text-[#333]" : "text-white"} />
          </Button>
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </nav>
      </BoxedContainer>
    </header>
  );
};

export default Header;
