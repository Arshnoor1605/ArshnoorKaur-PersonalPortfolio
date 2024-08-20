"use client";

import { ExpandableCardDemo } from "../../components/music_card";
import { BackgroundGradientDemo } from "../../components/GradientBackground";
import { SparklesPreview } from "../../components/SP";
import { SidebarDemo } from "../../components/Side-bar";
import { HeroScrollDemo } from "../../components/container_scroll";
import { LampDemo } from "../../components/lamp";
import { AuroraBackgroundDemo } from "../../components/aurora_light";
import { FloatingDockDemo } from "../../components/floatingDocks";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { ShootingStarsAndStarsBackgroundDemo } from "../../components/shooting_stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { SpotlightPreview } from "../../components/spotlightName";
import Timeline from "../../components/timeline";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black justify-between p-24">
      {/* <BackgroundGradientDemo /> */}
      <HeroScrollDemo />
      <SpotlightPreview />
      <Timeline />
      {/* <FloatingDockDemo /> */}
      <Footer />
      <ShootingStars />

      <StarsBackground />

      {/* This is the music card <ExpandableCardDemo /> */}
      {/* <SparklesPreview />
      <LampDemo /> */}
    </main>
  );
}
