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
    <div className="absolute w-3 h-3 bg-slate-400 rounded-full mt-1.5 mr-1.5 -start-1.5 dark:border-gray-900 dark:bg-gray-700"></div>
    <time className="mb-1 ml-3 text-xl font-extrabold leading-none text-white dark:text-gray-500">
      {date}
    </time>
    <h3 className="text-lg font-semibold text-white dark:text-white">
      {title}
    </h3>
    <p className="mb-4 text-base font-normal text-white dark:text-gray-400">
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
      date="February 2022"
      title="Application UI code in Tailwind CSS"
      description="loremId enim irure mollit voluptate. Culpa amet exercitation veniam velit incididunt fugiat non excepteur officia veniam reprehenderit proident. Aliqua ullamco laborum ipsum officia enim esse anim. Consequat quis tempor cupidatat sit ex irure deserunt ea. Eiusmod mollit dolor anim in qui quis in est ut do aute laboris consequat. Magna qui ipsum magna reprehenderit anim sunt eu fugiat veniam adipisicing non velit. Irure eiusmod non sunt voluptate officia id voluptate reprehenderit eiusmod labore non minim."
      link="#"
      linkText="Learn more"
    />
    <TimelineItem
      date="March 2022"
      title="Marketing UI design in Figma"
      description="Esse mollit cupidatat aliqua et tempor adipisicing quis duis aliquip duis aliquip consequat velit. Cillum in ad amet pariatur magna dolor est reprehenderit officia est ea non labore ad. In ipsum proident proident eiusmod eiusmod. Quis do cillum est et non in laborum laboris officia consequat. Dolore qui eu cillum consequat duis incididunt laboris est non ut est dolor.Velit ad voluptate dolor ipsum eiusmod mollit non fugiat. Occaecat aliquip magna do duis exercitation. Enim officia ea non esse culpa ex elit aute do. Cupidatat proident ipsum dolor ullamco sunt ad ullamco laboris consequat ad et ad. Adipisicing aliqua labore do duis nisi. Occaecat ad ea laboris sit officia."
    />
    <TimelineItem
      date="April 2022"
      title="E-Commerce UI code in Tailwind CSS"
      description="Sit elit velit commodo nostrud cupidatat esse nulla et pariatur culpa qui incididunt labore exercitation. Exercitation dolor est est ex exercitation in. Aliquip proident sunt irure eiusmod sit enim aliqua nostrud dolore quis ea.Sint pariatur elit officia pariatur laborum tempor occaecat reprehenderit mollit tempor veniam nostrud. Sint qui non aliqua deserunt id. Aliqua ullamco non consequat voluptate exercitation fugiat sint aliqua. Reprehenderit consectetur excepteur nostrud officia anim irure est. Pariatur quis ex duis cillum aute cillum enim."
    />
  </ol>
);

export default Timeline;
