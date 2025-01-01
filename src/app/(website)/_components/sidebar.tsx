"use client";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Site_Info } from "@/lib/data";
import { routes } from "@/lib/routes";
import Image from "next/image";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: any;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={() => setIsOpen(!open)}>
      <SheetContent side={"right"} className="z-50">
        <div className="p-4 bg-[#FAF8F5] text-center -m-6">
          <Link
            href="/"
            target="_self"
            className="flex items-center justify-center"
          >
            <Image
              src="/logo_main.svg"
              alt="The Ladakh Avenue Logo"
              width={140}
              height={40}
            />
          </Link>
        </div>
        <div className="space-y-4 flex flex-col mt-10 text-primary-blue-color ">
          {routes.map((route) => {
            return (
              <Link
                key={route.label}
                href={route.path}
                className="hover:text-primary font-medium duration-200 ease-in-out transition-colors"
                onClick={() => setIsOpen(false)}
                target={route.target ? route.target : "_self"}
              >
                {route.label}
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
