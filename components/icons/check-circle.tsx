import React from "react";

export default function CheckCircle(props: React.SVGProps<SVGSVGElement>) {
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
        d="M17.15 9.6L10 16.75L6.8 13.55L7.5 12.84L10 15.34L16.44 8.89L17.15 9.6ZM11.5 3C16.75 3 21 7.25 21 12.5C21 17.75 16.75 22 11.5 22C6.25 22 2 17.75 2 12.5C2 7.25 6.25 3 11.5 3ZM11.5 4C6.81 4 3 7.81 3 12.5C3 17.19 6.81 21 11.5 21C16.19 21 20 17.19 20 12.5C20 7.81 16.19 4 11.5 4Z"
        fill="currentColor"
      />
    </svg>
  );
}