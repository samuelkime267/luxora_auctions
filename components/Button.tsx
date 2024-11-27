import { cn } from "@/lib/utils";
import React from "react";

type btnType = "primary" | "secondary" | "danger";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnType?: btnType;
}

export default function Button({
  btnType,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(btnType, className)} {...props}>
      {children}

      {(btnType === "primary" || btnType === "danger") && (
        <div className="button-glow" />
      )}
    </button>
  );
}
