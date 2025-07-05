import Item from "@/components/item";
import React from "react";

export default function Blog() {
  return (
    <div className="w-full flex flex-col items-center mt-5">
      <div className="w-auto grid grid-cols-3 gap-5">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}
