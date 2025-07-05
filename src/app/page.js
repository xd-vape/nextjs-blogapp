import Header from "@/components/header/header";
import Navbar from "@/components/header/navbar/navbar";
import Blog from "@/sections/Blog";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <div className="">
      <Header />

      {/*  */}
      <Hero />
      <Blog />
    </div>
  );
}
