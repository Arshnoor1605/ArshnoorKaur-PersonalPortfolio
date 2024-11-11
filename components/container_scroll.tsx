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

// import React, { useEffect, useRef } from "react";
// import { ContainerScroll } from "./ui/container-scroll-animation";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const ParallaxImage = () => {
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (ref.current) {
//         ref.current.style.transform = `translateY(${window.scrollY * 0.5}px)`;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className="relative inset-0 bg-cover bg-center"
//       style={{ backgroundImage: "url('/public/next.svg')" }}
//     />
//   );
// };

// export function HeroScrollDemo() {
//   return (
//     <div className="relative flex flex-col overflow-hidden mb-1">
//       {" "}
//       {/* Added margin-bottom */}
//       <ParallaxImage />
//       <ContainerScroll
//         titleComponent={
//           <>
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//               className="relative text-4xl font-semibold text-white dark:text-white z-10 mb-9"
//             >
//               Welcome to my space, this is <br />
//               <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
//                 Arshnoor Kaur
//               </span>
//             </motion.h1>
//           </>
//         }
//       >
//         <Image
//           src={"/FallbyNoor.jpeg"}
//           alt="my image"
//           height={720}
//           width={1400}
//           className="rounded-2xl object-cover h-full object-left-top"
//           draggable={false}
//         />
//       </ContainerScroll>
//     </div>
//   );
// }

// import React, { useEffect, useRef } from "react";
// import { ContainerScroll } from "./ui/container-scroll-animation";
// import Image from "next/image";
// import { motion } from "framer-motion";

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
      className="relative inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/public/next.svg')" }}
    />
  );
};

// export function HeroScrollDemo() {
//   return (
//     <div className="relative flex flex-col overflow-hidden mb-1">
//       {" "}
//       {/* Added margin-bottom */}
//       <ParallaxImage />
//       <ContainerScroll
//         titleComponent={
//           <>
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//               className="relative text-4xl font-semibold text-white dark:text-white z-10 mb-9"
//             >
//               Welcome to my space, this is <br />
//               <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-cyan-300">
//                 Arshnoor Kaur
//               </span>
//             </motion.h1>
//           </>
//         }
//       >
//         {/* <Image
//           src={"/FallbyNoor.jpeg"}
//           alt="my image"
//           height={720}
//           width={1400}
//           className="rounded-2xl object-cover h-full object-left-top"
//           draggable={false}
//         /> */}
//         <Image
//           src="/FallbyNoor.jpeg"
//           alt="my image"
//           height={720}
//           width={1400}
//           className="rounded-2xl object-cover h-auto w-full sm:h-full sm:w-full"
//         />
//       </ContainerScroll>
//     </div>
//   );
// }

// import React, { useEffect, useRef } from "react";
// import { ContainerScroll } from "./ui/container-scroll-animation";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export function HeroScrollDemo() {
//   return (
//     <div className="relative flex flex-col overflow-hidden mt-[3rem] mb-[-5rem] w-full ">
//       <ParallaxImage />
//       <ContainerScroll
//         titleComponent={
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="relative text-4xl text-sans font-semibold text-white dark:text-white z-10 mb-[2rem]" // Added negative margin-bottom
//           >
//             Welcome to my space, this is <br />
//             <span className="text-4xl md:text-[6rem] text-sans font-bold mt-1 leading-none text-cyan-300 text-opacity-45">
//               Arshnoor Kaur
//             </span>
//           </motion.h1>
//         }
//       >
//         <Image
//           src="/FallbyNoor.jpeg"
//           alt="my image"
//           height={720}
//           width={1400}
//           className="rounded-2xl object-cover h-auto w-full" // Ensure full width and auto height
//         />
//       </ContainerScroll>
//     </div>
//   );
// }

import React, { useEffect, useRef } from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroScrollDemo() {
  return (
    <div className="relative flex flex-col overflow-hidden mt-[3rem] mb-[-5rem] w-full">
      <ParallaxImage />
      <ContainerScroll
        titleComponent={
          <div className="flex flex-row justify-between items-center w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative text-4xl font-semibold text-white z-10 mb-[2rem]"
            >
              Welcome to my space, this is <br />
              <span className="text-4xl md:text-[6rem] font-bold text-cyan-300 text-opacity-45">
                Arshnoor Kaur
              </span>
            </motion.h1>

            {/* Right Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-start text-white ml-8"
            >
              <p className="text-lg font-medium">
                Aspiring Developer & Designer
              </p>
              <p className="text-md mt-2">
                AWS Certified | React, Next.js, Tailwind CSS
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="https://github.com/yourprofile" target="_blank">
                  <img
                    src="/icons/github-icon.svg"
                    alt="GitHub"
                    className="w-6 h-6"
                  />
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank">
                  <img
                    src="/icons/linkedin-icon.svg"
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                </a>
                {/* Add more icons as needed */}
              </div>
            </motion.div>
          </div>
        }
      >
        <Image
          src="/FallbyNoor.jpeg"
          alt="my image"
          height={720}
          width={1400}
          className="rounded-2xl object-cover h-auto w-full"
        />
      </ContainerScroll>
    </div>
  );
}
