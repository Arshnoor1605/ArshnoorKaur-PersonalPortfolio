"use client";

import { HeroScrollDemo } from "../../components/container_scroll";
import { ShootingStars } from "../../components/shooting-stars";
import { ShootingStarsAndStarsBackgroundDemo } from "../../components/shooting_stars";
import { StarsBackground } from "../../components/stars-background";
import { SpotlightPreview } from "../../components/spotlightName";
import Timeline from "../../components/timeline";
import Footer from "../../components/footer";
import { SpotlightPreviewExp } from "../../components/spotlightNamecopy";
import { BentoGridThirdDemo } from "../../components/bento";
import { NavbarDemo } from "../../components/navbar";
import { CardHoverEffectDemo } from "../../components/card-hover";
import { AnimatedTestimonialsDemo } from "../../components/project-testimonals";
import { TimelineDemo } from "../../components/timelinedemo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black justify-between p-6">
      <ShootingStars />
      <NavbarDemo />
      <HeroScrollDemo />
      <Image
        src="/headshot.jpeg"
        alt="my headshot"
        width={400}
        height={400}
        className="object-cover rounded-lg border-black border-2 md:w-200 md:h-200 max-w-full"
      />
      <StarsBackground />
      {/* <SpotlightPreview /> */}
      <BentoGridThirdDemo />

      <SpotlightPreviewExp />
      <TimelineDemo />
      {/* <Timeline /> */}

      <CardHoverEffectDemo />
      {/* <AnimatedTestimonialsDemo /> */}

      <Footer />
    </main>
  );
}
