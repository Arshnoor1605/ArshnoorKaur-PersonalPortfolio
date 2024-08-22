import React from "react";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
  link,
  linkText,
}) => (
  <li className="mb-10 ms-4 relative">
    {/* The div below is for the circles that are on the timeline */}
    <div className="absolute w-3 h-3 bg-teal-200 rounded-full mt-1.5 mr-1.5 -start-1.5 dark:border-gray-900 dark:bg-gray-700"></div>
    <time className="text-base sm:text-sm mb-1 ml-3 font-extrabold leading-none text-white dark:text-gray-500 antialiased">
      {date}
    </time>
    <h3 className="text-base sm:text-sm font-sans font-semibold text-neutral-300 dark:text-white antialiased">
      {title}
    </h3>
    <p className="text-sm sm:text-xs mb-4 font-sans text-white dark:text-gray-400 antialiased">
      {description}
    </p>
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
      title="Software Development Intern (co-op) - Fondation STaBL Foundation"
      description="loremId enim irure mollit voluptate. Culpa amet exercitation veniam velit incididunt fugiat non excepteur officia veniam reprehenderit proident. Aliqua ullamco laborum ipsum officia enim esse anim. Consequat quis tempor cupidatat sit ex irure deserunt ea. Eiusmod mollit dolor anim in qui quis in est ut do aute laboris consequat. Magna qui ipsum magna reprehenderit anim sunt eu fugiat veniam adipisicing non velit. Irure eiusmod non sunt voluptate officia id voluptate reprehenderit eiusmod labore non minim."
      link="#"
      linkText="Learn more"
    />
    <TimelineItem
      date="May 2024 - August 2024"
      title="Outreach Instructor (co-op) - Fondation STaBL Foundation"
      description="Esse mollit cupidatat aliqua et tempor adipisicing quis duis aliquip duis aliquip consequat velit. Cillum in ad amet pariatur magna dolor est reprehenderit officia est ea non labore ad. In ipsum proident proident eiusmod eiusmod. Quis do cillum est et non in laborum laboris officia consequat. Dolore qui eu cillum consequat duis incididunt laboris est non ut est dolor.Velit ad voluptate dolor ipsum eiusmod mollit non fugiat. Occaecat aliquip magna do duis exercitation. Enim officia ea non esse culpa ex elit aute do. Cupidatat proident ipsum dolor ullamco sunt ad ullamco laboris consequat ad et ad. Adipisicing aliqua labore do duis nisi. Occaecat ad ea laboris sit officia."
    />
    <TimelineItem
      date="January 2024 - May 2024"
      title="Software Developer - Fondation STaBL Foundation"
      description="Sit elit velit commodo nostrud cupidatat esse nulla et pariatur culpa qui incididunt labore exercitation. Exercitation dolor est est ex exercitation in. Aliquip proident sunt irure eiusmod sit enim aliqua nostrud dolore quis ea.Sint pariatur elit officia pariatur laborum tempor occaecat reprehenderit mollit tempor veniam nostrud. Sint qui non aliqua deserunt id. Aliqua ullamco non consequat voluptate exercitation fugiat sint aliqua. Reprehenderit consectetur excepteur nostrud officia anim irure est. Pariatur quis ex duis cillum aute cillum enim."
    />
    <TimelineItem
      date="January 2024 - Present"
      title="Vice President External - McMaster Start Coding"
      description="Sit elit velit commodo nostrud cupidatat esse nulla et pariatur culpa qui incididunt labore exercitation. Exercitation dolor est est ex exercitation in. Aliquip proident sunt irure eiusmod sit enim aliqua nostrud dolore quis ea.Sint pariatur elit officia pariatur laborum tempor occaecat reprehenderit mollit tempor veniam nostrud. Sint qui non aliqua deserunt id. Aliqua ullamco non consequat voluptate exercitation fugiat sint aliqua. Reprehenderit consectetur excepteur nostrud officia anim irure est. Pariatur quis ex duis cillum aute cillum enim."
    />
  </ol>
);

export default Timeline;
