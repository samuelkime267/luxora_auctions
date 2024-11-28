import React from "react";

export default function Location(props: React.SVGProps<SVGSVGElement>) {
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
        d="M11.5 7C12.163 7 12.7989 7.26339 13.2678 7.73223C13.7366 8.20107 14 8.83696 14 9.5C14 9.8283 13.9353 10.1534 13.8097 10.4567C13.6841 10.76 13.4999 11.0356 13.2678 11.2678C13.0356 11.4999 12.76 11.6841 12.4567 11.8097C12.1534 11.9353 11.8283 12 11.5 12C10.837 12 10.2011 11.7366 9.73223 11.2678C9.26339 10.7989 9 10.163 9 9.5C9 8.83696 9.26339 8.20107 9.73223 7.73223C10.2011 7.26339 10.837 7 11.5 7ZM11.5 8C11.1022 8 10.7206 8.15804 10.4393 8.43934C10.158 8.72064 10 9.10218 10 9.5C10 9.89782 10.158 10.2794 10.4393 10.5607C10.7206 10.842 11.1022 11 11.5 11C11.8978 11 12.2794 10.842 12.5607 10.5607C12.842 10.2794 13 9.89782 13 9.5C13 9.10218 12.842 8.72064 12.5607 8.43934C12.2794 8.15804 11.8978 8 11.5 8ZM6.8 12.36L11.5 20.09L16.2 12.36C16.71 11.5 17 10.55 17 9.5C17 8.04131 16.4205 6.64236 15.3891 5.61091C14.3576 4.57946 12.9587 4 11.5 4C10.0413 4 8.64236 4.57946 7.61091 5.61091C6.57946 6.64236 6 8.04131 6 9.5C6 10.55 6.29 11.5 6.8 12.36ZM17.05 12.88L11.5 22L5.95 12.88C5.35 11.89 5 10.74 5 9.5C5 7.77609 5.68482 6.12279 6.90381 4.90381C8.12279 3.68482 9.77609 3 11.5 3C13.2239 3 14.8772 3.68482 16.0962 4.90381C17.3152 6.12279 18 7.77609 18 9.5C18 10.74 17.65 11.89 17.05 12.88Z"
        fill="currentColor"
      />
    </svg>
  );
}
