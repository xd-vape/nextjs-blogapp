import React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import SignOutButton from "@/components/signout-button";

import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function NavUserAction() {
  //   const { data: session, isPending } = useSession();

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    console.log("unauthorized");
  }

  return (
    <div className="flex items-center gap-2">
      {session?.user ? (
        <>
          <Button asChild>
            <Link href={"/blog/create"}>Neuer Post</Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="cursor-pointer">
                <Avatar className="w-9 h-9 rounded-lg">
                  <AvatarImage src="" alt={"User Logo"} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
              align="start"
              sideOffset={10}
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={session.user.image} alt={"User Logo"} />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">
                      {session.user.name}
                    </span>
                    <span className="truncate text-xs">
                      {session.user.email}
                    </span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* ROLE SYSTEM BENÖTIGT HIER*/}
              {session?.user.role == "admin" && (
                <>
                  <DropdownMenuItem>Admin</DropdownMenuItem>
                  <DropdownMenuSeparator />
                </>
              )}
              <DropdownMenuItem>
                <Link href={"/settings"}>Einstellungen</Link>
              </DropdownMenuItem>
              <SignOutButton />
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <>
          <Button asChild>
            <Link href={"/login"}>Login</Link>
          </Button>
        </>
      )}
    </div>
  );
}
