import React from "react";
import Navbar from "./navbar/navbar";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full flex justify-center mt-2 z-10 fixed">
      <Navbar />
    </div>
  );
}
