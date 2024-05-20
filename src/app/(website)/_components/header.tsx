"use client";

import Link from "next/link";
import BoxedContainer from "./boxed-container";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="h-20 flex items-center justify-center w-full">
      <BoxedContainer className="flex items-center justify-between">
        <div className="logo">
          <Link href="/" className="flex flex-col items-center gap-0">
            <span className="text-2xl font-bold">Snowpeak</span>
            <span>Hotel</span>
          </Link>
        </div>
        <nav className="navbar flex items-center gap-x-2">
          <Button>Book Now</Button>
          <Button size="icon" variant="ghost">
            <MenuIcon />
          </Button>
        </nav>
      </BoxedContainer>
    </header>
  );
};

export default Header;
