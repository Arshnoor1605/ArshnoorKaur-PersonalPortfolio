"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar_menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-20 inset-x-0 max-w-xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Profile">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#Skills">Skills</HoveredLink>
            <HoveredLink href="#Certifications">Certifications</HoveredLink>
            <HoveredLink href="#Connectwithme">Contact me</HoveredLink>
            <HoveredLink href="#EducationalBackground">
              Educational Background
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="text-sm grid grid-cols-1 gap-10 p-4">
            <ProductItem
              title="Algorithm Analysis"
              href="https://github.com/Arshnoor1605/Algorithm-Analysis/tree/main"
              src="/Algorithm.jpeg"
              description="This project implements and compares various algorithms to evaluate their performance and efficiency in finding shortest paths under various constraints."
            />
            <ProductItem
              title="Elm Slider Craft "
              href="https://github.com/Arshnoor1605/RecursionGraphic"
              src="/Recursion.jpeg"
              description="A recursive Elm-based slider application with dynamic changes based on state."
            />
            <ProductItem
              title="Math Visualizer"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
          </div>
        </MenuItem>
        <a
          href="#Connectwithme"
          className="cursor-pointer antialiased text-teal-300 hover:opacity-[1] dark:text-white"
        >
          Contact Me
        </a>
        <a
          href="#Relevant Course Work"
          className="cursor-pointer antialiased text-teal-300 hover:opacity-[1] dark:text-white"
        >
          Skills and coursework
        </a>
      </Menu>
    </div>
  );
}
