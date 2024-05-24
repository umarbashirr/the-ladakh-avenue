"use client";

import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";

const ImageLightbox = ({ isOpen, closeModal, image }: any) => {
  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="w-full max-w-[100vw] h-full max-h-screen bg-transparent outline-none border-none">
        <div className="relative w-full max-w-[calc(100vw-150px)] mx-auto h-full">
          <Image
            src={image?.src}
            alt={image?.alt}
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightbox;
