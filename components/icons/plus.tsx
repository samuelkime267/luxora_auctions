import React from "react";

export default function Plus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 13V12H11V6H12V12H18V13H12V19H11V13H5Z" fill="currentColor" />
    </svg>
  );
}
