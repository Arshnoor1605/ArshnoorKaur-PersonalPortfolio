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

import React from "react";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  image?: string; // New property for image
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
  link,
  linkText,
  image,
}) => (
  <li className="mb-12 flex flex-col md:flex-row md:items-center relative">
    {/* Timeline circle */}
    <div className="absolute w-4 h-4 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 top-0 left-0 transform translate-x-0 md:translate-x-[-50%]"></div>
    {/* Image */}
    {image && (
      <div className="flex justify-center md:block md:w-16 md:h-16 md:mr-6 rounded-full overflow-hidden bg-white shadow-lg">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
    )}
    <div className="md:ml-20 mt-4 md:mt-0">
      {/* Date */}
      <time className="text-sm font-semibold text-gray-500 dark:text-gray-400">
        {date}
      </time>
      {/* Title */}
      <h3 className="mt-2 text-xl font-bold text-gray-800 dark:text-white">
        {title}
      </h3>
      {/* Description */}
      <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
        {description}
      </p>
      {/* Link */}
      {link && (
        <a
          href={link}
          className="inline-flex items-center mt-4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
        >
          {linkText}
          <svg
            className="w-4 h-4 ml-2 transform rotate-90"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      )}
    </div>
  </li>
);

const Timeline: React.FC = () => (
  <ol className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-6">
    <TimelineItem
      date="May 2024 - August 2024"
      title="Outreach Instructor (Co-op) - Fondation STaBL Foundation"
      description="Educated over 5000+ K-12 students across Canada and internationally, leading engaging programs in functional programming with Elm. Contributed to Agile processes and code reviews, ensuring high-quality content delivery."
      image="/STaBLlogo.png"
      link="https://stablfoundation.org"
      linkText="Learn more"
    />
    <TimelineItem
      date="May 2024 - August 2024"
      title="Educational Software Development Intern (Co-op) - Fondation STaBL Foundation"
      description="Collaborated with developers, educators, and managers to design and implement software improvements, increasing product efficiency by 40%. Led Agile sprints and managed stakeholder communication."
      image="/STaBLlogo.png"
      link="https://stablfoundation.org"
      linkText="Explore Projects"
    />
    <TimelineItem
      date="January 2024 - May 2024"
      title="Software Developer - Fondation STaBL Foundation"
      description="Refined version control systems using Elm, focusing on enhancing software efficiency and reliability through careful prototyping and testing."
      image="/STaBLlogo.png"
    />
    <TimelineItem
      date="January 2024 - Present"
      title="Vice President External - McMaster Start Coding"
      description="Led outreach and partnership initiatives with local schools, tech companies, and community groups, expanding McMaster Start Coding's educational reach. Organized events, workshops, and hackathons, collaborating with external stakeholders."
      image="/MSClogo.png"
      link="https://mcmasterstartcoding.com"
      linkText="Visit McMaster Start Coding"
    />
  </ol>
);

export default Timeline;
