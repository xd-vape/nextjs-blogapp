"use client";
import Link from "next/link";
import React, { useState } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-[430px] flex justify-between items-center p-1 bg-black/20 border-black/20 border rounded backdrop-blur-xl">
      <h1 className="uppercase text-white font-bold text-lg">
        <Link href="/">Blog</Link>
      </h1>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href={"/"}>Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href={"about"}>About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {isLoggedIn ? (
        <Button asChild>
          <Link href={"/create"}>Neuer Post</Link>
        </Button>
      ) : (
        <Button asChild>
          <Link href={"/login"}>Login</Link>
        </Button>
      )}
    </div>
  );
}
