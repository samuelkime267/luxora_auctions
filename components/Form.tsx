import React from "react";
import { Info, CheckCircle } from "./icons";
import { cn } from "@/lib/utils";

interface formProps extends React.HTMLProps<HTMLFormElement> {
  title?: string;
  description?: string;
  error?: string | null | undefined;
  success?: string | null | undefined;
  containerClass?: string;
}

export default function Form({
  title,
  description,
  error,
  children,
  containerClass,
  className,
  success,
  ...props
}: formProps) {
  return (
    <div
      className={cn(
        "w-full max-w-[26rem] flex items-start justify-start gap-6 flex-col border border-border p-4 lg:p-8",
        containerClass
      )}
    >
      {(title || description) && (
        <div className="w-full flex items-center justify-center flex-col gap-1.5">
          <h5 className="font-semibold text-center font-grotesk">{title}</h5>
          <small className="text-text/50 text-center">{description}</small>
        </div>
      )}

      {error && (
        <div className="w-full border border-neg flex items-center justify-start gap-2 p-2 bg-neg/10">
          <div className="min-w-6 min-h-6 w-6 h-6">
            <Info className="w-full h-full text-neg" />
          </div>
          <p className="text-neg font-medium capitalize">{error}</p>
        </div>
      )}
      {success && (
        <div className="w-full border border-pos flex items-center justify-start gap-2 p-2 bg-pos/10">
          <div className="min-w-6 min-h-6 w-6 h-6">
            <CheckCircle className="w-full h-full text-pos" />
          </div>
          <p className="text-pos font-medium capitalize">{success}</p>
        </div>
      )}

      <form
        className={cn("w-full grid grid-cols-1 gap-4", className)}
        {...props}
      >
        {children}
      </form>
    </div>
  );
}
