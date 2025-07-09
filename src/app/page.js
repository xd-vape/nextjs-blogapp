import Header from "@/components/header/header";
import Navbar from "@/components/header/navbar/navbar";
import Blog from "@/sections/List";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";

export default function Home() {
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

      {/*  */}
      <Hero />
      <Blog />

      {/*  */}
      <Footer />
    </div>
  );
}
