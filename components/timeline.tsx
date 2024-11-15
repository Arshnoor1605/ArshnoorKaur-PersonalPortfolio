("use client");

// import React from "react";

// interface TimelineItemProps {
//   date: string;
//   title: string;
//   description: string;
//   link?: string;
//   linkText?: string;
// }

// const TimelineItem: React.FC<TimelineItemProps> = ({
//   date,
//   title,
//   description,
//   link,
//   linkText,
// }) => (
//   <li className="mb-10 ms-4 relative">
//     {/* The div below is for the circles that are on the timeline */}
//     <img className="absolute w-5 h-5 rounded-full mt-1.5 mr-1.5 -start-1.5 dark:border-gray-900 dark:bg-gray-700">
//       {image}
//     </img>
//     <time className="text-base sm:text-sm mb-1 ml-3 font-extrabold leading-none text-white dark:text-gray-500 antialiased">
//       {date}
//     </time>
//     <h3 className="text-base sm:text-sm font-sans font-semibold text-neutral-300 dark:text-white antialiased">
//       {title}
//     </h3>
//     <p className="text-sm sm:text-xs mb-4 font-sans text-white dark:text-gray-400 antialiased">
//       {description}
//     </p>
//     {link && (
//       <a
//         href={link}
//         className="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
//       >
//         {linkText}{" "}
//         <svg
//           className="w-3 h-3 ms-2 rtl:rotate-180"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 14 10"
//         >
//           <path
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M1 5h12m0 0L9 1m4 4L9 9"
//           />
//         </svg>
//       </a>
//     )}
//   </li>
// );

// const Timeline: React.FC = () => (
//   <ol className="relative border-s border-stone-300 dark:border-gray-700">
//     <TimelineItem
//       date="May 2024 - August 2024"
//       title="Software Development Intern (co-op) - Fondation STaBL Foundation"
//       description="loremId enim irure mollit voluptate. Culpa amet exercitation veniam velit incididunt fugiat non excepteur officia veniam reprehenderit proident. Aliqua ullamco laborum ipsum officia enim esse anim. Consequat quis tempor cupidatat sit ex irure deserunt ea. Eiusmod mollit dolor anim in qui quis in est ut do aute laboris consequat. Magna qui ipsum magna reprehenderit anim sunt eu fugiat veniam adipisicing non velit. Irure eiusmod non sunt voluptate officia id voluptate reprehenderit eiusmod labore non minim."
//       link="#"
//       linkText="Learn more"
//     />
//     <TimelineItem
//       date="May 2024 - August 2024"
//       title="Outreach Instructor (co-op) - Fondation STaBL Foundation"
//       description="Esse mollit cupidatat aliqua et tempor adipisicing quis duis aliquip duis aliquip consequat velit. Cillum in ad amet pariatur magna dolor est reprehenderit officia est ea non labore ad. In ipsum proident proident eiusmod eiusmod. Quis do cillum est et non in laborum laboris officia consequat. Dolore qui eu cillum consequat duis incididunt laboris est non ut est dolor.Velit ad voluptate dolor ipsum eiusmod mollit non fugiat. Occaecat aliquip magna do duis exercitation. Enim officia ea non esse culpa ex elit aute do. Cupidatat proident ipsum dolor ullamco sunt ad ullamco laboris consequat ad et ad. Adipisicing aliqua labore do duis nisi. Occaecat ad ea laboris sit officia."
//     />
//     <TimelineItem
//       date="January 2024 - May 2024"
//       title="Software Developer - Fondation STaBL Foundation"
//       description="Sit elit velit commodo nostrud cupidatat esse nulla et pariatur culpa qui incididunt labore exercitation. Exercitation dolor est est ex exercitation in. Aliquip proident sunt irure eiusmod sit enim aliqua nostrud dolore quis ea.Sint pariatur elit officia pariatur laborum tempor occaecat reprehenderit mollit tempor veniam nostrud. Sint qui non aliqua deserunt id. Aliqua ullamco non consequat voluptate exercitation fugiat sint aliqua. Reprehenderit consectetur excepteur nostrud officia anim irure est. Pariatur quis ex duis cillum aute cillum enim."
//     />
//     <TimelineItem
//       date="January 2024 - Present"
//       title="Vice President External - McMaster Start Coding"
//       description="Sit elit velit commodo nostrud cupidatat esse nulla et pariatur culpa qui incididunt labore exercitation. Exercitation dolor est est ex exercitation in. Aliquip proident sunt irure eiusmod sit enim aliqua nostrud dolore quis ea.Sint pariatur elit officia pariatur laborum tempor occaecat reprehenderit mollit tempor veniam nostrud. Sint qui non aliqua deserunt id. Aliqua ullamco non consequat voluptate exercitation fugiat sint aliqua. Reprehenderit consectetur excepteur nostrud officia anim irure est. Pariatur quis ex duis cillum aute cillum enim."
//     />
//   </ol>
// );

// export default Timeline;

// import React from "react";

// interface TimelineItemProps {
//   date: string;
//   title: string;
//   description: string;
//   link?: string;
//   linkText?: string;
//   image?: string; // New property for image
// }

// const TimelineItem: React.FC<TimelineItemProps> = ({
//   date,
//   title,
//   description,
//   link,
//   linkText,
//   image, // Destructure the image prop
// }) => (
//   <li className="mb-10 ms-4 relative">
//     {/* The div below is for the circles that are on the timeline */}
//     <div className="absolute w-12 h-12 rounded-full mt-1.5 mr-3 dark:border-gray-900 dark:bg-gray-700">
//       {image && (
//         <img
//           src={image}
//           alt={title}
//           className=" w-12 h-12 object-contain mr-5 rounded-xl mb-2 "
//         />
//       )}{" "}
//       {/* Add the image */}
//     </div>
//     <time className="text-base sm:text-sm mb-1 ml-14 font-extrabold text-white dark:text-gray-500 antialiased">
//       {date}
//     </time>
//     <h3 className="text-base sm:text-sm ml-14 font-sans font-semibold text-neutral-300 dark:text-white antialiased">
//       {title}
//     </h3>
//     <p className="sm:text-sm text-xs mt-3 mb-4 font-sans text-white dark:text-gray-400 antialiased">
//       {description}
//     </p>
//     {link && (
//       <a
//         href={link}
//         className="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
//       >
//         {linkText}{" "}
//         <svg
//           className="w-3 h-3 ms-2 rtl:rotate-180"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 14 10"
//         >
//           <path
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M1 5h12m0 0L9 1m4 4L9 9"
//           />
//         </svg>
//       </a>
//     )}
//   </li>
// );

// const Timeline: React.FC = () => (
//   <ol className="relative border-s border-stone-300 dark:border-gray-700">
//     <TimelineItem
//       date="May 2024 - August 2024"
//       title="Software Development Intern (co-op) - Fondation STaBL Foundation"
//       description="loremId enim irure mollit voluptate. Culpa amet exercitation veniam velit incididunt fugiat non excepteur officia veniam reprehenderit proident. Aliqua ullamco laborum ipsum officia enim esse anim. Consequat quis tempor cupidatat sit ex irure deserunt ea. Eiusmod mollit dolor anim in qui quis in est ut do aute laboris consequat. Magna qui ipsum magna reprehenderit anim sunt eu fugiat veniam adipisicing non velit. Irure eiusmod non sunt voluptate officia id voluptate reprehenderit eiusmod labore non minim."
//       // link="#"
//       // linkText="Learn more"
//       image="/STaBLlogo.png" // Add the image path
//     />
//     <TimelineItem
//       date="May 2024 - August 2024"
//       title="Outreach Instructor (co-op) - Fondation STaBL Foundation"
//       description="Esse mollit cupidatat aliqua et tempor adipisicing quis duis aliquip duis aliquip consequat velit. Cillum in ad amet pariatur magna dolor est reprehenderit officia est ea non labore ad. In ipsum proident proident eiusmod eiusmod. Quis do cillum est et non in laborum laboris officia consequat. Dolore qui eu cillum consequat duis incididunt laboris est non ut est dolor.Velit ad voluptate dolor ipsum eiusmod mollit non fugiat. Occaecat aliquip magna do duis exercitation. Enim officia ea non esse culpa ex elit aute do. Cupidatat proident ipsum dolor ullamco sunt ad ullamco laboris consequat ad et ad. Adipisicing aliqua labore do duis nisi. Occaecat ad ea laboris sit officia."
//       image="/STaBLlogo.png" // Add the image path
//     />
//     <TimelineItem
//       date="January 2024 - May 2024"
//       title="Software Developer - Fondation STaBL Foundation"
//       description="Sit elit velit commodo nostrud cupidatat esse nulla et pariatur culpa qui incididunt labore exercitation. Exercitation dolor est est ex exercitation in. Aliquip proident sunt irure eiusmod sit enim aliqua nostrud dolore quis ea.Sint pariatur elit officia pariatur laborum tempor occaecat reprehenderit mollit tempor veniam nostrud. Sint qui non aliqua deserunt id. Aliqua ullamco non consequat voluptate exercitation fugiat sint aliqua. Reprehenderit consectetur excepteur nostrud officia anim irure est. Pariatur quis ex duis cillum aute cillum enim."
//       image="/STaBLlogo.png" // Add the image path
//     />
//     <TimelineItem
//       date="January 2024 - Present"
//       title="Vice President External - McMaster Start Coding"
//       description="Sit elit velit commodo nostrud cupidatat esse nulla et pariatur culpa qui incididunt labore exercitation. Exercitation dolor est est ex exercitation in. Aliquip proident sunt irure eiusmod sit enim aliqua nostrud dolore quis ea.Sint pariatur elit officia pariatur laborum tempor occaecat reprehenderit mollit tempor veniam nostrud. Sint qui non aliqua deserunt id. Aliqua ullamco non consequat voluptate exercitation fugiat sint aliqua. Reprehenderit consectetur excepteur nostrud officia anim irure est. Pariatur quis ex duis cillum aute cillum enim."
//       image="/MSClogo.png" // Add the image path
//     />
//   </ol>
// );

// const Timeline: React.FC = () => (
//   <ol className="relative border-s border-stone-300 dark:border-gray-700">
//     <TimelineItem
//       date="May 2024 - August 2024"
//       title="Outreach Instructor (Co-op) - Fondation STaBL Foundation"
//       description="As an Outreach Instructor, I played a pivotal role in educating over 5000+ K-12 students across Canada and internationally. I led the development and delivery of engaging educational programs, focusing on functional programming in Elm. I was also instrumental in conducting code reviews and actively participating in Agile scrum methodologies, including sprint planning, daily stand-ups, and sprint retrospectives, ensuring the delivery of high-quality educational content."
//       image="/STaBLlogo.png"
//     />
//     <TimelineItem
//       date="May 2024 - August 2024"
//       title="Educational Software Development Intern (Co-op) - Fondation STaBL Foundation"
//       description="Led cross-functional collaboration with developers, educators, and management teams to design and implement high-quality software, contributing to improving product efficiency by 40%.
// Spearheaded Agile sprint planning, stand-ups, and retrospectives, ensuring timely delivery of product features and enhancements.
// Managed stakeholder communication to align software development with educational objectives, prioritizing features based on user feedback and product roadmap.
// Successfully educated over 5000 students globally, demonstrating excellent communication, planning, and leadership skills through workshops and programs."
//       image="/STaBLlogo.png"
//     />
//     <TimelineItem
//       date="January 2024 - May 2024"
//       title="Software Developer - Fondation STaBL Foundation"
//       description="During my time as a Software Developer, I specialized in refining version control processes within existing software systems using the Elm Framework. My work focused on enhancing the efficiency and reliability of the software, where I also developed and tested prototypes to ensure the successful implementation of these improvements."
//       image="/STaBLlogo.png"
//     />
//     <TimelineItem
//       date="January 2024 - Present"
//       title="Vice President External - McMaster Start Coding"
//       description="Led outreach efforts to establish and maintain partnerships with external organizations, including local schools, tech companies, and community groups, to expand the reach of McMaster Start Coding's educational programs.
// Coordinated with external stakeholders to organize workshops, hackathons, and events, facilitating opportunities for students to learn and engage with industry professionals.
// Represented the club in external meetings, acting as the primary liaison between McMaster Start Coding and external partners, ensuring alignment of goals and promoting the club’s initiatives.
// Managed communication channels for external partnerships, ensuring timely follow-ups, maintaining strong relationships, and seeking out sponsorship opportunities to support club activities.
// Collaborated with the executive team to strategically plan events, manage resources, and promote McMaster Start Coding's mission to enhance computer science education for youth in the community."
//       image="/MSClogo.png"
//     />
//   </ol>
// );

// export default Timeline;

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Changelog from my journey
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
