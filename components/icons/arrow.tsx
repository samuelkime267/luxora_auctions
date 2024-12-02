import React from "react";

export default function Arrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 20.0037V7.75375L5.75 13.0037L5 12.3438L11.5 5.84375L18 12.3438L17.25 13.0037L12 7.75375V20.0037H11Z"
        fill="currentColor"
      />
    </svg>
  );
}
