"use client";
import React from "react";
import { ShootingStars } from "./shooting-stars";
import { StarsBackground } from "./stars-background";
import { HeroScrollDemo } from "./container_scroll";
import Image from "next/image";

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="h-full rounded-md bg-black flex flex-col items-center justify-center relative w-full">
      <HeroScrollDemo />
      <ShootingStars />
      <StarsBackground />
      <Image
        src="/headshot.jpeg"
        alt="my headshot"
        width={270}
        height={220}
        className="object-cover border-emerald-100 border-2 md:w-48 md:h-48 max-w-full"
      />
    </div>
  );
}
