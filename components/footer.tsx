// // components/Footer.tsx
// "use client";

// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="fixed bottom-0 left-0 w-full bg-transparent text-orange-50 bg-yellow-200 px-6 py-4">
//       <div className="container mx-auto text-center">
//         <p className="text-lg">
//           &copy; {new Date().getFullYear()} Arshnoor Kaur. All rights reserved.
//         </p>
//         <div className="mt-4">
//           <a href="#" className="text-slate-300 hover:text-gray-300 mx-4">
//             Privacy Policy
//           </a>
//           <a href="#" className="text-slate-300 hover:text-gray-300 mx-4">
//             Terms of Service
//           </a>
//           <a href="#" className="text-slate-300 hover:text-gray-300 mx-4">
//             Contact
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// // components/Footer.tsx
"use client";

import React from "react";
const Footer = () => {
  return (
    <footer className="relative bottom-0 rounded-lg shadow m-4 dark:bg-gray-800 md:p-2">
      <div className="w-full mx-auto max-w-screen-xl p-4  md:flex flex-col md:items-center bg-transparent md:justify-between">
        <span className="text-xs sm:text-sm text-center text-gray-100 sm:text-center dark:text-gray-400 m-4">
          © 2024 Arshnoor Kaur™
        </span>
        <ul className="flex flex-wrap  bg-teal-800 bg-opacity-95 p-3 rounded-xl backdrop-blur-sm items-center mt-3 text-sm sm:text-xs ml-4 font-medium text-gray-100 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="#About"
              className="text-xs sm:text-sm font-semibold antialiased text-purple-400 hover:underline me-4 md:me-6 hover:text-teal-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xs sm:text-sm font-semibold text-sky-500 antialiased hover:underline me-4 md:me-6 hover:text-teal-200"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xs text-yellow-400 font-semibold antialiased sm:text-sm hover:underline me-4 md:me-6 hover:text-teal-200"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="mailto:kaura69@mcmaster.ca"
              className="text-xs text-lime-400 font-semibold antialiased sm:text-sm hover:underline hover:text-teal-200"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
