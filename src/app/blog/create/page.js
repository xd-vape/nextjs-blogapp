import CreateForm from "@/components/form/createForm";
import Header from "@/components/header/header";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import Footer from "@/sections/Footer";
import React from "react";

export default function page() {
  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-b from-white to-background">
      <Header />

      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)]"
        )}
      />

      <CreateForm />

      <Footer />
    </div>
  );
}
