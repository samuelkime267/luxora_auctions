import React from "react";

export default function Menu(props: React.SVGProps<SVGSVGElement>) {
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
        d="M3 8V7H20V8H3ZM20 12V13H3V12H20ZM3 17H20V18H3V17Z"
        fill="currentColor"
      />
    </svg>
  );
}
