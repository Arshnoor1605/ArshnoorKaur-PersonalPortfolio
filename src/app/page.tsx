import { BackgroundGradientDemo } from "../../components/GradientBackground";
import { SparklesPreview } from "../../components/SP";
import { SidebarDemo } from "../../components/Side-bar";
import { HeroScrollDemo } from "../../components/container_scroll";
import { LampDemo } from "../../components/lamp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black justify-between p-24">
      {/* <BackgroundGradientDemo /> */}
      <HeroScrollDemo />
      {/* <SparklesPreview />
      <LampDemo /> */}
    </main>
  );
}
