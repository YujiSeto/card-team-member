"use client";

import { TeamArea } from "@/components/team/team-area";
import { ThemeToggle } from "@/components/theme-toggle";

const Page = () => {
  return (
    <div className="relative min-h-screen flex justify-center items-center">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="w-full max-w-2xl">
        <TeamArea />
      </div>
    </div>
  );
};

export default Page;
