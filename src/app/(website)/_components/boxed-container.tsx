"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BoxedContainerProps {
  className?: string;
  children: ReactNode;
}

const BoxedContainer = ({ className, children }: BoxedContainerProps) => {
  return (
    <div className={cn("container mx-auto px-5 w-full h-full", className)}>
      {children}
    </div>
  );
};

export default BoxedContainer;
