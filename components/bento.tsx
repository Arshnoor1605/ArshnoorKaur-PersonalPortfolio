"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./bento_grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Spotlight } from "./spotlight";

// export function BentoGridThirdDemo() {
//   return (
//     <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
//       {items.map((item, i) => (
//         <BentoGridItem
//           key={i}
//           title={item.title}
//           description={item.description}
//           header={item.header}
//           className={cn("[&>p:text-lg]", item.className)}
//         />
//       ))}
//     </BentoGrid>
//   );
// }

export function BentoGridThirdDemo() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2
        id="About"
        className="mb-8 sm:mb-4  text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-teal-200 bg-opacity-50"
      >
        About Me
      </h2>
      <BentoGrid className="md:auto-rows-[28rem] ">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };

  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-5 w-5 rounded-full bg-gradient-to-r from-orange-400 to-pink-300 flex-shrink-0" />
        <div className="w-full h-4 rounded-full dark:bg-neutral-900 flex flex-row">
          <p className="sm:text-sm text-xs text-center font-semibold text-black font-sans antialiased">
            Fullname:&nbsp;
          </p>
          <p className="sm:text-sm text-xs text-center font-semibold text-cyan-90 font-sans antialiased">
            Arshnoor Kaur
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border p-2 items-center space-x-2 bg-transparent bg-white dark:bg-black"
      >
        <div className="h-5 w-5 rounded-full bg-gradient-to-r from-lime-500 to-cyan-400 flex-shrink-0" />
        <div className="w-full h-4 rounded-full dark:bg-neutral-900 flex flex-row">
          <p className="text-slate-900 font-semibold text-xs md:text-sm font-sans antialiased">
            Birthdate:&nbsp;
          </p>
          <p className="text-cyan-900 font-semibold text-xs md:text-sm font-sans antialiased">
            May 16th, 2004
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-5 w-5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400 flex-shrink-0" />
        <div className="w-full h-4 rounded-full dark:bg-neutral-900 flex flex-row">
          <p className="text-slate-900 font-semibold text-xs md:text-sm font-sans antialiased">
            Email:&nbsp;
          </p>
          <a
            href="mailto:kaura69@mcmaster.ca"
            className="text-cyan-900 underline font-semibold text-xs md:text-sm font-sans antialiased"
            style={{ pointerEvents: "auto", zIndex: 10 }} // Ensure pointer-events and z-index
          >
            kaura69@mcmaster.ca
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkeletonOne;

// const SkeletonTwo = () => {
//   const variants = {
//     initial: {
//       width: 0,
//     },
//     animate: {
//       width: "100%",
//       transition: {
//         duration: 0.2,
//       },
//     },
//     hover: {
//       width: ["0%", "100%"],
//       transition: {
//         duration: 2,
//       },
//     },
//   };
//   const arr = new Array(6).fill(0);
//   return (
//     <motion.div
//       initial="initial"
//       animate="animate"
//       whileHover="hover"
//       className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
//     >
//       {arr.map((_, i) => (
//         <motion.div
//           key={"skelenton-two" + i}
//           variants={variants}
//           style={{
//             maxWidth: Math.random() * (100 - 40) + 40 + "%",
//           }}
//           className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2
//           items-center space-x-2 bg-white  dark:bg-black w-full h-4"
//         ></motion.div>
//       ))}
//     </motion.div>
//   );
// };
const SkeletonTwo = () => {
  // Array of colors for text
  const colors = [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
    "text-purple-500",
    "text-pink-500",
  ];

  // Array of texts to display in each bar
  const texts = ["Python", "HTML, CSS", "React", "Java", "C", "MS Office"];

  // Array of custom widths for each bar
  const widths = ["40%", "70%", "80%", "60%", "80%", "80%"];

  const arr = new Array(6).fill(0);

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
      {arr.map((_, i) => (
        <div
          key={"skeleton-two-" + i}
          style={{
            width: widths[i % widths.length], // Apply custom width
          }}
          className="flex items-center rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 bg-white dark:bg-black h-4 relative"
        >
          <span
            className={`absolute inset-0 flex items-center justify-left p-2 antialiased font-sans font-bold text-sm sm:text-xs ${
              colors[i % colors.length]
            }`}
          >
            {texts[i % texts.length]}
          </span>
        </div>
      ))}
    </div>
  );
};

// const SkeletonThree = () => {
//   const variants = {
//     initial: {
//       backgroundPosition: "0 50%",
//     },
//     animate: {
//       backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
//     },
//   };
//   return (
//     <motion.div
//       initial="initial"
//       animate="animate"
//       variants={variants}
//       transition={{
//         duration: 5,
//         repeat: Infinity,
//         repeatType: "reverse",
//       }}
//       className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
//       style={{
//         background:
//           "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
//         backgroundSize: "400% 400%",
//       }}
//     >
//       <motion.div className="h-full w-full rounded-lg"></motion.div>
//     </motion.div>
//   );
// };

const SkeletonThree = () => {
  return (
    <a
      href="https://www.credly.com/badges/b64c1f02-8a70-4960-a35c-7aafafc5487c/public_url" // Replace with your desired URL
      target="_blank" // Opens the link in a new tab
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2 relative"
      style={{
        backgroundImage:
          "url('https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png')",
        backgroundSize: "contain", // Adjust to "contain" to fit the image within the container
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "block", // Ensure the link is a block-level element
        width: "100%", // Ensure the container takes full width
        height: "100%", // Ensure the container takes full height
      }}
    >
      <div className="h-full w-full rounded-lg"></div>
    </a>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/Linkedin.png.webp"
          alt="avatar"
          height="90"
          width="90"
          className="rounded-xl h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          LinkedIn
        </p>
        <a
          href="https://www.linkedin.com/in/arshnoor-kaur1605"
          className="border border-blue-800 bg-blue-800 dark:bg-red-900/20 text-white text-xs rounded-full px-2 py-0.5 mt-4"
        >
          Myprofile
        </a>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="/Resume.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Here is my resume
        </p>
        <a
          href="https://drive.google.com/file/d/1QLzJcLgDvDQ8Ufr_8PHQmQLudGPqLAQ2/view?usp=share_link"
          className="border border-green-500 bg-green-500 dark:bg-green-900/20 text-white text-xs items-center justify-center rounded-full px-2 py-0.5 mt-4"
        >
          Resume
        </a>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/githubLogo.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Find my projects on GitHub
        </p>
        <a
          href="https://github.com/Arshnoor1605"
          className="border border-orange-500 bg-orange-500 dark:bg-orange-900/20 text-white text-xs rounded-full px-2 py-0.5 mt-2"
        >
          Check them out
        </a>
      </motion.div>
    </motion.div>
  );
};
// const SkeletonFive = () => {
//   const variants = {
//     initial: {
//       x: 0,
//     },
//     animate: {
//       x: 10,
//       rotate: 5,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };
//   const variantsSecond = {
//     initial: {
//       x: 0,
//     },
//     animate: {
//       x: -10,
//       rotate: -5,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };

//   return (
//     <motion.div
//       initial="initial"
//       whileHover="animate"
//       className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
//     >
//       <motion.div
//         variants={variants}
//         className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
//       >
//         <Image
//           src="url('https://www.duboischemicals.com/wp-content/uploads/2019/09/McMaster-Logo-1.png')"
//           alt="avatar"
//           height="100"
//           width="100"
//           className="rounded-full h-10 w-10"
//         />
//         <p className="text-xs text-neutral-500">
//           There are a lot of cool framerworks out there like React, Angular,
//           Vue, Svelte that can make your life ....
//         </p>
//       </motion.div>
//       <motion.div
//         variants={variantsSecond}
//         className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
//       >
//         <p className="text-xs text-neutral-500">Use PHP.</p>
//         <div className="h-6 w-6 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 flex-shrink-0" />
//       </motion.div>
//     </motion.div>
//   );
// };

const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-start space-x-2 bg-white dark:bg-black"
      >
        <Image
          src="/McMasterLogo.jpg" // Corrected URL
          alt="avatar"
          height={100} // Height should be a number
          width={100} // Width should be a number
          className="rounded-full h-10 w-10"
        />
        <div className="flex flex-col">
          <p className="text-xs text-black font-bold antialiased">
            McMaster University
          </p>
          <p className="text-xs text-zinc-700 antialiased">
            Bachelors of Applied Sciences in Computer Science
          </p>
          <p className="text-xs text-slate-500 antialiased">
            Expected graduation (2027)
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-start justify-end space-x-2 ml-auto bg-white dark:bg-black"
      >
        <div className="flex flex-col">
          <p className="text-xs text-black font-bold antialiased">
            Gyan Bharati School
          </p>
          <p className="text-xs text-zinc-700 antialiased">
            High School Degree
          </p>
          <p className="text-xs text-slate-500 antialiased">(2019-2022)</p>
        </div>
        <Image
          src="/GBSLogo.jpeg" // Corrected URL
          alt="avatar"
          height={100} // Height should be a number
          width={100} // Width should be a number
          className="rounded-full h-10 w-10"
        />
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Profile",
    description: (
      <span id="Skills" className="text-sm">
        Currently I'm a 3rd year computer science student at McMaster
        University.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
  },
  {
    title: "Skills",
    description: (
      <span id="Certifications" className="text-sm">
        I'm a cell-like independent teamworker, strong in coding and research.
        Below are highlights of my technical skills:
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
  },
  {
    title: "Certifications",
    description: (
      <span id="Connectwithme" className="text-xs">
        I am pleased to hold the AWS Cloud Practitioner certification, which
        underscores my foundational knowledge of cloud computing and Amazon Web
        Services (AWS). This certification validates my understanding of
        essential AWS services, cloud concepts, security, and pricing models
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
  },
  {
    title: "Connect with me",
    description: (
      <span id="EducationalBackground" className="text-sm">
        Whether you’re interested in collaborating on a project, discussing new
        opportunities, or just saying hello, you can find me on various social
        media platforms. I’m always excited to connect with like-minded
        individuals and explore new ideas. Let’s connect!
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
  },

  {
    title: "Background Education",
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
