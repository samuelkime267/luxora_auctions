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
        "mb-4 md:mb-6 border-b border-neutral-300 pb-4 md:pb-3.5",
        className
      )}
    >
      <h4 className="font-medium">{title}</h4>
    </div>
  );
}
