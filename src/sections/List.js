import Item from "@/components/list/item";
import React from "react";

export default function Blog() {
  return (
    <div className="w-auto grid grid-cols-3 gap-5 mt-5 z-10">
      <Item
        title={"Test Title"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
        }
        createdAt={"01.01.2000"}
        image={"https://placehold.co/320x200/WebP"}
      />
      <Item
        title={"Test Title"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
        }
        createdAt={"01.01.2000"}
        image={"https://placehold.co/320x200/WebP"}
      />
      <Item
        title={"Test Title"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
        }
        createdAt={"01.01.2000"}
        image={"https://placehold.co/320x200/WebP"}
      />
    </div>
  );
}
