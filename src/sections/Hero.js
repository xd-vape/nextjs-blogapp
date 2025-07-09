import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import React from "react";

export default function Hero() {
  return (
    <div className="bg-white w-1/3 p-6 mt-25 rounded shadow z-20">
      <h1 className="text-primary font-extrabold text-2xl">Blog</h1>
      <p className="text-secondary font-medium">
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
        tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
        suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus
        ante.
      </p>
    </div>
  );
}
