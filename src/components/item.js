import Image from "next/image";
import React from "react";

export default function Item({ image, title, desc, createdAt }) {
  title = "Test";
  desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.";
  createdAt = "01.01.2000";

  return (
    <div className="bg-white flex flex-col w-[311px] p-4 gap-5 rounded shadow hover:bg-accent/10 cursor-pointer">
      <Image
        src={"https://placehold.co/320x200/WebP"}
        alt="test"
        width={291}
        height={200}
      />
      <div>
        <h3 className="text-primary font-semibold text-xl">{title}</h3>
        <span className="text-secondary font-light text-sm">{desc}</span>
      </div>
      <span className="text-primary font-medium text-sm">{createdAt}</span>
    </div>
  );
}
