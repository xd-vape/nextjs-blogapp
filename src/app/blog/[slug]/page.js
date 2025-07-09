import Header from "@/components/header/header";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import Footer from "@/sections/Footer";
import React from "react";

export default async function Page({ params }) {
  const { slug } = await params;
  return (
    <div className="w-full flex flex-col items-center">
      <Header />

      {/*  */}

      <div className="bg-gradient-to-b from-white to-background w-full h-80 z-5 rounded">
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
        <h1 className="bg-white p-6 w-1/3 m-auto mt-35 text-center text-primary font-extrabold text-2xl">
          ÜHypixel Skyblock – Best 1.21.5 Mods
        </h1>
      </div>

      <div className="bg-white w-1/2 p-6 rounded z-5 shadow">
        Hypixel Skyblock Foraging Update The long-awaited Foraging Update for
        Hypixel Skyblock is finally here, introducing exciting new content along
        with technical changes. Players will now explore the all-new Foraging
        Island, where they can gather new resources and enjoy an improved
        experience overall. With this update, Hypixel is making a bold step.
        While Skyblock used to run on 1.8.9 servers, the new Foraging Island
        will only work with Minecraft Version 1.21.5. That alone marks a major
        change and potentially signals what’s to come for the future of
        SkyBlock. Skyblock Version Shift – from 1.8.9 to 1.21.5 For years,
        Minecraft 1.8.9 with Forge was the go-to version for most Hypixel
        players. With the server running on 1.8.9 and a huge library of mods for
        Forge, it was the ideal way of playing Skyblock. Now, with the Foraging
        Update being in 1.21.5 the old setup won’t work. For newer versions,
        Forge has mostly been replaced by Fabric, another modern Mod Loader.
        Because of that – and all the changes Minecraft rolled out in the last
        years – you won’t be able to just update your Forge-Version and launch
        your Minecraft. With this change, players now need to download new tools
        and mods, set up new configs, and possibly troubleshoot compatibility
        issues. That’s a lot of effort, especially if you just want to log in
        and play. But don’t worry! Later in this post, we’ll show you a simple
        way to get everything set up quickly. The Best 1.21.5 Hypixel Skyblock
        Mods When updating, you don’t want to miss any of the tools and features
        you relied on before. To make the most of the new version, we have
        listed five essential Skyblock mods fully compatible with Minecraft
        1.21.5. SkyHanni An all-in-one Hypixel Skyblock mod that was already a
        favorite among 1.8.9 players, and has now been updated to Minecraft
        version 1.21.5. It offers overlays, stat tracking, inventory helpers,
        and many more QoL features tailored for Hypixel. Roughly Enough Items
        (REI) A clean and intuitive item browser, similar to Just Enough Items.
        What makes REI stand out for Hypixel is that it makes all the custom
        Skyblock items and recipes accessible directly in-game. Skyblocker
        Skyblocker offers an extensive set of tools designed for Hypixel
        Skyblock. It includes puzzle solvers for dungeons, helpful features for
        Slayer bosses, and a variety of HUD elements that give you easy access
        to important information. There’s even more to discover, so feel free to
        check it out in-game! Firmament Designed for the modern Hypixel Skyblock
        environment, Firmament offers several QoL features such as slot locking,
        a cursor position saver, and a fairy soul highlighter. Cookies-mod
        Cookies-mod, another mod tailored for Hypxiel Skyblock, mainly offers
        enhancements for Farming, Mining, and Dungeons. It also brings a few
        improvements to your UI by replacing the vanilla hearts and armor bar
        with a health and mana bar. What’s the easiest way to set up 1.21.5 for
        Hypixel Skyblock? Setting all this up manually can be a nightmare:
        different mod versions, configs, bad performance… It’s a lot to deal
        with. That’s the reason why we created a pre-configured Skyblock profile
        in the NoRisk Client. It comes with all the best 1.21.5 Skyblock mods, a
        set of performance mods, and our own NoRisk Client exclusive mods –
        including McReal, stunning Cosmetics, and many more QoL features. Just
        download our launcher, select the Skyblock profile, and launch the game.
        No extra effort needed. A gif showing how to select the new Hypixel
        Skyblock profile Final Thoughts The transition from 1.8.9 to 1.21.5
        isn’t easy, but it’s a step forward. With the right tools and the best
        Skyblock mods, the new version runs smoother and offers more than ever
        before. If you are looking for the fastest way to get started, download
        the NoRisk Client and jump into Skyblock today!
      </div>
      {/*  */}
      <Footer />
    </div>
  );
}
