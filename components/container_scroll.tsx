// "use client";
// import React from "react";
// import { ContainerScroll } from "./ui/container-scroll-animation";
// import Image from "next/image";

// export function HeroScrollDemo() {
//   return (
//     <div className="flex flex-col overflow-hidden">
//       <ContainerScroll
//         titleComponent={
//           <>
//             <h1 className="text-4xl font-semibold text-white dark:text-white">
//               Welcome to my space—where Arshnoor’s innovative code turns visions{" "}
//               <br />
//               <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
//                 into vibrant realities.
//               </span>
//             </h1>
//           </>
//         }
//       >
//         <Image
//           src={"/public/next.svg"}
//           alt="hero"
//           height={720}
//           width={1400}
//           className="mx-auto rounded-2xl object-cover h-full object-left-top"
//           draggable={false}
//         />
//       </ContainerScroll>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useRef } from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import { motion } from "framer-motion";

const ParallaxImage = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        ref.current.style.transform = `translateY(${window.scrollY * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/public/next.svg')" }}
    />
  );
};

export function HeroScrollDemo() {
  return (
    <div className="relative flex flex-col overflow-hidden">
      <ParallaxImage />
      <ContainerScroll
        titleComponent={
          <>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative text-4xl font-semibold text-white dark:text-white z-10"
            >
              Welcome to my space—where Arshnoor’s innovative code turns visions{" "}
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                into vibrant realities.
              </span>
            </motion.h1>
          </>
        }
      >
        <Image
          src={"/STaBL YMCA SixNations.jpeg"}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
