import Link from "next/link";
import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="w-1/4 flex justify-between items-center mt-2 p-2 bg-black/20 border-black/20 border rounded backdrop-blur-xl">
      <h1 className="uppercase text-white font-bold text-xl">Blog</h1>
      <NavigationMenu>
        <NavigationMenuLink>
          <Link href={"google"}>Home</Link>
        </NavigationMenuLink>
        <NavigationMenuLink>
          <Link href={"google"}>About</Link>
        </NavigationMenuLink>
      </NavigationMenu>
      <Button>Login</Button>
    </div>
  );
}
