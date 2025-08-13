import CreateForm from "@/components/form/createForm";
import Header from "@/components/header/header";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import Footer from "@/sections/Footer";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-screen flex flex-col gap-5 items-center">
      <Header />

      <div className="bg-gradient-to-b from-white to-background w-full h-full z-5 rounded">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={
            "-z-5 " +
            cn(
              "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)]"
            )
          }
        />
        <div className="bg-white p-6 w-1/3 m-auto mt-30 text-center">
          <h1 className="text-primary font-extrabold text-3xl md:text-2xl">
            Neuen Beitrag erstellen
          </h1>
        </div>
      </div>

      <CreateForm />

      <Footer />
    </div>
  );
}
