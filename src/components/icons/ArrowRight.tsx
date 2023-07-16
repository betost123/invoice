import * as React from "react";

interface IconProps {
  color?: string;
}

export const ArrowRightIcon: React.FC<IconProps> = ({ color = "black" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.8891 20.59L13.9293 16.4615L17.0226 13.9407C18.3258 12.8732 18.3258 11.1369 17.0226 10.0694L8.8891 3.40726C7.82139 2.53269 6 3.16289 6 4.38472L6 11.5999V19.6126C6 20.8472 7.82139 21.4646 8.8891 20.59Z"
        fill="#031E36"
      />
    </svg>
  );
};
