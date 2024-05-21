"use client";

import Link from "next/link";
import BoxedContainer from "./boxed-container";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import Sidebar from "./sidebar";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="relative h-20 flex items-center justify-center w-full z-50">
      <BoxedContainer className="flex items-center justify-between">
        <div className="logo">
          <Link
            href="/"
            className="flex flex-col items-center gap-0 uppercase text-white"
          >
            <span className="text-xl font-bold">Snowpeak</span>
            <span>Hotel</span>
          </Link>
        </div>
        <nav className="navbar flex items-center gap-x-2">
          <Button
            variant="secondary"
            className="bg-[#978667] text-white hover:bg-[#4B514D]"
          >
            Book Now
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-transparent"
            onClick={() => setIsOpen(true)}
          >
            <MenuIcon className="text-white" />
          </Button>
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </nav>
      </BoxedContainer>
    </header>
  );
};

export default Header;
