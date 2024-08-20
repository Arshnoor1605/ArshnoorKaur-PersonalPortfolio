"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { HeroScrollDemo } from "./container_scroll";
export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="h-full rounded-md bg-black flex flex-col items-center justify-center relative w-full">
      <HeroScrollDemo />
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
