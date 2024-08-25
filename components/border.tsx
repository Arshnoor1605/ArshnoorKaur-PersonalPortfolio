"use client";
import React from "react";
import { Button } from "./moving_border";
import Footer from "./footer";

export function MovingBorderDemo() {
  return (
    <div>
      <Button className="bg-transparent dark:bg-slate-900 text-white dark:text-white border-white dark:border-slate-800">
        Hello
      </Button>
    </div>
  );
}
