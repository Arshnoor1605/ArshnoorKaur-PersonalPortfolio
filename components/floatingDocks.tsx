import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconBrandLinkedin,
  IconRecordMail,
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Email",
      icon: (
        <IconRecordMail className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "kaura69@mcmaster.ca",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[50rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
