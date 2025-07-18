import Image from "next/image";
import React from "react";

export default function Item({ image, title, desc, createdAt }) {
  return (
    <div className="bg-white flex flex-col w-[320px] h-[400px] p-4 gap-5 rounded shadow transition-all hover:bg-accent/10 cursor-pointer">
      <Image
        src={image}
        alt="test"
        width={291}
        height={200}
        className="object-cover w-[291px] h-[200px] rounded"
      />
      <div>
        <h3 className="text-primary font-semibold text-xl">{title}</h3>
        <span className="text-secondary font-light text-sm">{desc}</span>
      </div>
      <span className="mt-auto text-primary font-medium text-sm">
        {createdAt}
      </span>
    </div>
  );
}
