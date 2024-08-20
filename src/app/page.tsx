"use client";

import { HeroScrollDemo } from "../../components/container_scroll";
import { ShootingStars } from "../../components/shooting-stars";
import { ShootingStarsAndStarsBackgroundDemo } from "../../components/shooting_stars";
import { StarsBackground } from "../../components/stars-background";
import { SpotlightPreview } from "../../components/spotlightName";
import Timeline from "../../components/timeline";
import Footer from "../../components/footer";
import { SpotlightPreviewExp } from "../../components/spotlightName-copy";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black justify-between p-24">
      <HeroScrollDemo />
      <SpotlightPreview />
      <SpotlightPreviewExp />
      {/* <Timeline /> */}

      <Footer />
      <ShootingStars />

      <StarsBackground />
    </main>
  );
}
