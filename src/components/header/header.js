import React from "react";
import Navbar from "./navbar/navbar";

export default function Header() {
  return (
    <div className="w-full flex justify-center fixed z-10">
      <Navbar />
    </div>
  );
}
