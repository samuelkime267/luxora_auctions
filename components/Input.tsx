/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { UseFormRegister } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
  error?: string;
  success?: boolean;
  label?: string;
  labelText?: string;
  inputClass?: string;
  textarea?: boolean;
  register?: UseFormRegister<any>;
  valueAsNumber?: boolean;
  children?: React.ReactNode;
  placeBefore?: boolean;
}

export default function Input({
  label,
  children,
  className,
  placeBefore,
  register,
  error,
  required,
  name,
  valueAsNumber,
  labelText,
  ...props
}: InputProps) {
  const registration =
    (register &&
      register((name as string) || (label as string), {
        valueAsNumber,
        required,
      })) ||
    {};

  return (
    <div>
      {label && (
        <label
          className={cn("text-sm capitalize", { required })}
          htmlFor={label}
        >
          {labelText || label}
        </label>
      )}
      <div
        className={cn(
          "flex items-center gap-2 border border-neutral-300 p-2 hover:border-neutral-500 focus-within:border-neutral-500 duration-300",
          className,
          {
            "border-neg": error,
          }
        )}
      >
        {placeBefore && children}
        <input
          className="w-full"
          id={label}
          name={name || label}
          {...registration}
          {...props}
        />
        {!placeBefore && children}
      </div>
      {error && (
        <small className="text-neg capitalize text-sm mt-1 block">
          {error}
        </small>
      )}
    </div>
  );
}
