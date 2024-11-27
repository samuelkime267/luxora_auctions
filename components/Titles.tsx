import React from "react";
import { cn } from "@/lib/utils";

type titleProps = {
  title: string;
  className?: string;
};

export default function Titles({ className, title }: titleProps) {
  return (
    <div
      className={cn(
        "mb-4 md:mb-6 border-b border-neutral-300 pb:4 md:pb-6",
        className
      )}
    >
      <h3>{title}</h3>
    </div>
  );
}
