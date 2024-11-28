import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  children?: React.ReactNode;
  placeBefore?: boolean;
}

export default function Input({
  label,
  children,
  placeBefore,
  className,
  ...props
}: InputProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 border border-neutral-300 p-2 hover:border-neutral-500 focus-within:border-neutral-500 duration-300",
        className
      )}
    >
      {label && <label htmlFor={props.id}>{label}</label>}
      {placeBefore && children}
      <input {...props} />
      {!placeBefore && children}
    </div>
  );
}
