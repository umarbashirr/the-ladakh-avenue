"use client";

import Link from "next/link";
import BoxedContainer from "./boxed-container";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState(false);
  const scrollDirection = useScrollDirection();

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
        "relative h-20 flex items-center justify-center w-full z-50",
        isSticky ? "sticky  left-0 bg-white" : "bg-transparent",
        scrollDirection === "down" ? "-top-20" : "top-0"
      )}
    >
      <BoxedContainer className="flex items-center justify-between">
        <div className="logo">
          <Link
            href="/"
            className={cn(
              "flex flex-col items-center gap-0 uppercase text-white",
              isSticky ? "text-primary" : "text-white"
            )}
          >
            <span className="text-xl font-bold">Snowpeak</span>
            <span>Hotel</span>
          </Link>
        </div>
        <nav className="navbar flex items-center gap-x-2">
          <Button
            variant="secondary"
            className="bg-primary text-white hover:bg-[#4B514D]"
          >
            Book Now
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
