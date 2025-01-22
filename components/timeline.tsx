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
//       description="Developed and Enhanced Educational Software Systems: Designed and improved interactive tools using Elm, leveraging functional programming to achieve a 40% increase in system efficiency and reliability while ensuring exceptional user experience.
// Facilitated Agile Processes: Conducted detailed code reviews and actively participated in Agile methodologies, such as sprint planning, daily stand-ups, and retrospectives, ensuring effective communication and teamwork across diverse groups.
// Streamlined Version Control Processes: Led initiatives to enhance version control systems, optimizing workflow accuracy and efficiency, and fostering seamless collaboration within cross-functional teams.
// Created Engaging Educational Tools: Designed and delivered interactive educational applications for K-12 students, transforming complex programming and mathematical concepts into intuitive and accessible tools, highlighting strong content creation and presentation skills.
// Delivered Educational Workshops: Presented technical workshops and programs to over 2,000 K-12 students globally, showcasing excellent verbal and written communication skills, audience engagement, and adaptability to diverse learner needs.
// Collaborated Across Teams: Worked closely with developers, educators, and management to identify and resolve technical challenges, align project goals, and drive initiatives that improved stakeholder satisfaction and team productivity.
// Managed Projects with Precision: Organized and coordinated multiple concurrent projects, maintaining attention to detail, meeting tight deadlines, and adapting to evolving priorities in a fast-paced environment.
// Strengthened Stakeholder Relationships: Maintained effective communication with stakeholders, incorporating feedback to align software development with organizational objectives, emphasizing interpersonal and relationship-building skills."
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
//       description="Community Engagement: Represent McMaster Start Coding at external events, workshops, and conferences, fostering relationships with educational institutions, industry professionals, and community partners.
// Partnership Development: Identify and establish partnerships with organizations that align with the club's mission, securing sponsorships, resources, and opportunities for members.
// Event Coordination: Collaborate with the internal team to organize outreach events, ensuring seamless communication and participation from external stakeholders.
// Promotion and Advocacy: Act as a spokesperson for the club's initiatives, advocating for computer science education and encouraging community involvement.
// Strategic Planning: Work with the executive team to align external engagement strategies with the club's long-term goals, contributing to growth and impact.
// Reporting: Provide regular updates to the executive team on external activities, partnerships, and opportunities for further development."
//       image="/MSClogo.png"
//     />
//   </ol>
// );

// export default Timeline;

import React from "react";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string | JSX.Element;
  link?: string;
  linkText?: string;
  image?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
  link,
  linkText,
  image,
}) => (
  <li className="mb-10 ms-4 relative">
    <div className="absolute w-12 h-12 rounded-full mt-1.5 mr-3 dark:border-gray-900 dark:bg-gray-700">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-12 h-12 object-contain mr-5 rounded-xl mb-2"
        />
      )}
    </div>
    <time className="text-base sm:text-sm mb-1 ml-14 font-extrabold text-white dark:text-gray-500 antialiased">
      {date}
    </time>
    <h3 className="text-base sm:text-sm ml-14 font-sans font-semibold text-neutral-300 dark:text-white antialiased">
      {title}
    </h3>
    <div className="sm:text-sm text-xs mt-3 mb-4 font-sans text-white dark:text-gray-400 antialiased ml-14">
      {typeof description === "string" ? <p>{description}</p> : description}
    </div>
    {link && (
      <a
        href={link}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        {linkText}{" "}
        <svg
          className="w-3 h-3 ms-2 rtl:rotate-180"
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
  </li>
);

const Timeline: React.FC = () => (
  <ol className="relative border-s border-stone-300 dark:border-gray-700">
    <TimelineItem
      date="May 2024 - August 2024"
      title="Outreach Instructor (Co-op) - Fondation STaBL Foundation"
      description={
        <>
          <ul className="list-disc pl-5">
            <li>
              <strong>
                Developed and Enhanced Educational Software Systems
              </strong>
              : Designed and improved interactive tools using Elm, leveraging
              functional programming to achieve a 40% increase in system
              efficiency and reliability while ensuring exceptional user
              experience.
            </li>
            <li>
              <strong>Facilitated Agile Processes</strong>: Conducted detailed
              code reviews and actively participated in Agile methodologies,
              such as sprint planning, daily stand-ups, and retrospectives,
              ensuring effective communication and teamwork across diverse
              groups.
            </li>
            <li>
              <strong>Streamlined Version Control Processes</strong>: Led
              initiatives to enhance version control systems, optimizing
              workflow accuracy and efficiency, and fostering seamless
              collaboration within cross-functional teams.
            </li>
            <li>
              <strong>Created Engaging Educational Tools</strong>: Designed and
              delivered interactive educational applications for K-12 students,
              transforming complex programming and mathematical concepts into
              intuitive and accessible tools, highlighting strong content
              creation and presentation skills.
            </li>
            <li>
              <strong>Delivered Educational Workshops</strong>: Presented
              technical workshops and programs to over 2,000 K-12 students
              globally, showcasing excellent verbal and written communication
              skills, audience engagement, and adaptability to diverse learner
              needs.
            </li>
            <li>
              <strong>Collaborated Across Teams</strong>: Worked closely with
              developers, educators, and management to identify and resolve
              technical challenges, align project goals, and drive initiatives
              that improved stakeholder satisfaction and team productivity.
            </li>
            <li>
              <strong>Managed Projects with Precision</strong>: Organized and
              coordinated multiple concurrent projects, maintaining attention to
              detail, meeting tight deadlines, and adapting to evolving
              priorities in a fast-paced environment.
            </li>
            <li>
              <strong>Strengthened Stakeholder Relationships</strong>:
              Maintained effective communication with stakeholders,
              incorporating feedback to align software development with
              organizational objectives, emphasizing interpersonal and
              relationship-building skills.
            </li>
          </ul>
        </>
      }
      image="/STaBLlogo.png"
    />
    <TimelineItem
      date="January 2024 - May 2024"
      title="Software Developer - Fondation STaBL Foundation"
      description={
        <>
          <ul className="list-disc pl-5">
            <li>
              <strong>Refined Version Control Processes</strong>: Improved the
              efficiency and reliability of existing software systems using the
              Elm Framework.
            </li>
            <li>
              <strong>Developed and Tested Prototypes</strong>: Ensured the
              successful implementation of improvements in software systems.
            </li>
            <li>
              <strong>Enhanced Software System Efficiency</strong>: Focused on
              optimizing the software and improving the overall user experience.
            </li>
          </ul>
        </>
      }
      image="/STaBLlogo.png"
    />
    <TimelineItem
      date="January 2024 - Present"
      title="Vice President External - McMaster Start Coding"
      description={
        <>
          <ul className="list-disc pl-5">
            <li>
              <strong>Community Engagement</strong>: Represent McMaster Start
              Coding at external events, workshops, and conferences, fostering
              relationships with educational institutions, industry
              professionals, and community partners.
            </li>
            <li>
              <strong>Partnership Development</strong>: Identify and establish
              partnerships with organizations that align with the club's
              mission, securing sponsorships, resources, and opportunities for
              members.
            </li>
            <li>
              <strong>Event Coordination</strong>: Collaborate with the internal
              team to organize outreach events, ensuring seamless communication
              and participation from external stakeholders.
            </li>
            <li>
              <strong>Promotion and Advocacy</strong>: Act as a spokesperson for
              the club's initiatives, advocating for computer science education
              and encouraging community involvement.
            </li>
            <li>
              <strong>Strategic Planning</strong>: Work with the executive team
              to align external engagement strategies with the club's long-term
              goals, contributing to growth and impact.
            </li>
            <li>
              <strong>Reporting</strong>: Provide regular updates to the
              executive team on external activities, partnerships, and
              opportunities for further development.
            </li>
          </ul>
        </>
      }
      image="/MSClogo.png"
    />
  </ol>
);

export default Timeline;
