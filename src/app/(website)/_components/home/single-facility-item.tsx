"use client";

import Image from "next/image";

interface SingleFacilityItemProps {
  title: string;
  desc: string;
  image: string;
}

const SingleFacilityItem = ({
  title,
  desc,
  image,
}: SingleFacilityItemProps) => {
  return (
    <article className="text-center  border-b  last-of-type:border-b-0 md:border-0 lg:border-r p-6 lg:last-of-type:border-r-0">
      <Image
        src={image}
        alt={`${image} icon`}
        className="object-cover mx-auto mb-8"
        width={48}
        height={48}
      />
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-muted-foreground">{desc}</p>
    </article>
  );
};

export default SingleFacilityItem;
