import Header from "@/components/header/header";
import Navbar from "@/components/header/navbar/navbar";
import Blog from "@/sections/List";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />

      {/*  */}
      <Hero />
      <Blog />

      {/*  */}
      <Footer />
    </div>
  );
}
