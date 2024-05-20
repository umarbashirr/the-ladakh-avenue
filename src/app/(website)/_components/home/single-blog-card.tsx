"use client";

import Image from "next/image";
import Link from "next/link";

interface SingleBlogCardInterface {
  title: string;
  slug: string;
  createdAt: string;
  category: string;
  image: string;
  description: string;
}

const SingleBlogCard = ({
  title,
  slug,
  createdAt,
  category,
  image,
}: SingleBlogCardInterface) => {
  return (
    <article className="shadow-lg rounded-lg overflow-hidden group">
      <div className="relative w-full h-[350px]">
        <Image src={image} alt={title} fill className="object-cover" />
        <div>{createdAt}</div>
      </div>
      <div className="py-10 px-16 relative w-full">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <Link
          href={"/"}
          className="font-semibold text-[#978667] relative after:content-[''] after:bg-[#978667] after:w-[10%] after:h-[2px] after:absolute after:-bottom-2 after:left-0 after:group-hover:w-full after:duration-500 after:ease-in-out after:transition-all"
        >
          Read more
        </Link>
        <div className="absolute rotate-90 left-0 top-[20%] -translate-y-1/2">
          <p className="w-full relative after:content-[''] text-gray-200 after:absolute after:top-3 after:left-[calc(100%+8px)] after:w-[124px] after:h-px after:bg-gray-200">
            {category}
          </p>
        </div>
      </div>
    </article>
  );
};

export default SingleBlogCard;
