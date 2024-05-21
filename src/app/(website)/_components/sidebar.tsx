"use client";

import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { Site_Info } from "@/lib/data";
import { useState } from "react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: any;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={() => setIsOpen(!open)}>
      <SheetContent side={"right"} className="z-50">
        <div className="p-8 bg-[#FAF8F5] text-center -m-6">
          <p className="uppercase whitespace">
            <p className="font-bold text-xl">{Site_Info.title.split(" ")[0]}</p>
            <p>{Site_Info.title.split(" ")[1]}</p>
          </p>
        </div>
        <div className="space-y-4 flex flex-col mt-10 text-primary-blue-color ">
          {routes.map((route) => {
            return (
              <Link
                key={route.label}
                href={route.path}
                className="hover:text-[#978667] font-medium duration-200 ease-in-out transition-colors"
                onClick={() => setIsOpen(false)}
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
