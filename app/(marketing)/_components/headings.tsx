"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {

  const {isAuthenticated, isLoading} = useConvexAuth();
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
      {isLoading &&(
        <div className="w-full flex items-center justify-center">
            <Spinner size="lg"/>
          </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter DNotes
            <ArrowRight className="h-4 w-4 ml-2"/>
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get DNotes Free
            <ArrowRight className="h-4 w-4 ml-2"/>
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
