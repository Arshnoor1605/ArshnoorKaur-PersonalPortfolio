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
    <footer className="-mb-10 rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4  md:flex md:items-center bg-yellow-100 md:justify-between">
        <span className="text-sm text-gray-900 sm:text-center dark:text-gray-400 m-4">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline mr-4">
            Arshnoor Kaur™.
          </a>
          All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm ml-4 font-medium text-gray-900 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
