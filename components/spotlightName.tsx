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

export function SpotlightPreview() {
  return (
    <div className="mt-10 h-[60rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="left-0 md:left-60 md:-top-20" fill="white" />
      <div className="max-w-7xl mx-auto relative z-10 w-full md:pt-6">
        {" "}
        {/* Adjusted padding */}
        <h1 className="m-10 text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-cyan-300 to-blue-400 bg-opacity-50">
          About Me
        </h1>
        <p className="text-white">
          Excepteur nostrud sunt amet sint magna. Tempor minim eu tempor sint
          occaecat fugiat commodo. Nisi nulla proident ad eiusmod mollit.
          Consectetur ullamco adipisicing sint sint ullamco irure sit. Laborum
          qui voluptate in magna commodo ut et consequat qui quis consequat
          sint. Ullamco ad laboris qui nulla in adipisicing officia non
          incididunt in sint. Aliquip commodo laborum eu laboris Lorem et culpa
          amet amet nostrud laborum culpa adipisicing est. Esse incididunt
          adipisicing et qui nisi ullamco. Pariatur laborum mollit et amet sint
          officia nostrud cillum irure cupidatat ullamco. Nulla ex quis
          reprehenderit ut ad culpa. Et tempor consectetur incididunt anim
          consequat consectetur deserunt commodo. Amet ipsum fugiat enim quis
          sunt occaecat dolor nulla labore sunt amet cillum esse commodo.
          Reprehenderit proident nostrud ea deserunt id tempor do dolore. Labore
          id ex Lorem aliqua consectetur nulla id dolore cillum reprehenderit
          aliquip.Enim pariatur dolor adipisicing anim ex ipsum commodo. Sit
          commodo dolor eiusmod voluptate sit mollit Lorem reprehenderit minim
          anim laborum. Consequat anim sit nulla nostrud consectetur laboris
          amet. Ad elit culpa pariatur nisi irure officia in consequat quis.
          Dolor laboris irure velit aliquip aliquip consectetur consectetur qui
          voluptate excepteur adipisicing cillum excepteur. Aute id irure
          deserunt ut sunt nulla. Amet qui velit magna ad nisi non
          mollit.Excepteur nostrud minim velit esse non ex nulla labore proident
          cupidatat. Enim ad commodo culpa amet nisi commodo amet. Velit esse
          ipsum Lorem est esse amet ut voluptate mollit. Amet reprehenderit
          laborum et cupidatat voluptate consequat culpa et irure veniam
          occaecat. Irure sit reprehenderit ut fugiat incididunt velit anim et
          incididunt eu veniam laboris.Adipisicing ex irure voluptate pariatur
          velit est culpa excepteur anim. Adipisicing qui aliqua esse cillum
          Lorem qui dolor minim anim commodo tempor officia. Id sit nisi do amet
          elit nisi ea est amet. Reprehenderit qui in nisi do voluptate esse
          culpa in aute ea irure amet. Lorem proident sit culpa ullamco in
          nostrud eu ullamco ut cillum minim.
        </p>
      </div>
    </div>
  );
}
