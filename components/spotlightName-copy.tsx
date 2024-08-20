// import React from "react";
// import { cn } from "@/lib/utils";
// import { Spotlight } from "@/components/ui/spotlight";

// export function SpotlightPreview() {
//   return (
//     <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
//       <Spotlight
//         className="-top-40 left-0 md:left-60 md:-top-20"
//         fill="white"
//       />
//       <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-10 md:pt-0">
//         <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-cyan-300 to-blue-400 bg-opacity-50">
//           About Me
//         </h1>
//         <p className="mt-4 font-mono text-base text-neutral-300 max-w-lg text-center mx-auto">
//           Hi there! I'm Arshnoor Kaur, a passionate and driven computer science
//           student in my third year at McMaster University. I specialize in
//           designing and developing beautifully simple and functional solutions,
//           and I absolutely love what I do. With a keen interest in both software
//           development and educational technology, I’ve had the opportunity to
//           work on a variety of exciting projects. From creating engaging
//           learning experiences for kids to developing tools for young students
//           to explore coding and math concepts, I’m always excited to explore new
//           ways to make technology accessible and enjoyable.
//         </p>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./spotlight";
import { TextGenerateEffect } from "./text-generate-effect";
import Timeline from "./timeline";

export function SpotlightPreviewExp() {
  return (
    <div className="mt-10 h-[60rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="left-0 md:left-60 md:-top-20" fill="white" />
      <div className="max-w-7xl mx-auto relative z-10 w-full md:pt-6">
        {" "}
        {/* Adjusted padding */}
        <h1 className="m-10 text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-cyan-300 to-blue-400 bg-opacity-50">
          About Me
        </h1>
        <Timeline />
      </div>
    </div>
  );
}
