"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export const Heading = () => {
  return (
    <div className="mx-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents & plans, organized with .commands. Write a good
        one! <span className="underline">D Notion</span>
      </h1>
      <h3>
        D Notion is great, it auto sort out everything from
        <br />
        your messy writting
      </h3>
      <Button>
        Enter D Notion
        <ArrowRightIcon className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};
