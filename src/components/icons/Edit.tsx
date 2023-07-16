import * as React from "react";

interface IconProps {
  color?: string;
}

export const EditIcon: React.FC<IconProps> = ({ color = "black" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.7768 13V14.7777C20.7768 19.2218 18.9991 20.9995 14.5549 20.9995H9.22188C4.77768 20.9995 3 19.2218 3 14.7777V13.4266"
        stroke="#031E36"
        strokeWidth="0.859728"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9996 3.22266H9.22188C4.77768 3.22266 3 5.00033 3 9.4445"
        stroke="#031E36"
        strokeWidth="0.859728"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.9355 9.45404L19.8688 8.52076C21.0776 7.31194 21.6465 5.90758 19.8688 4.12991C18.0911 2.35224 16.6868 2.9211 15.4779 4.12991L8.47387 11.1339C8.20722 11.4006 7.94057 11.925 7.88724 12.3072L7.50504 14.9826C7.36282 15.9514 8.04723 16.6269 9.01607 16.4936L11.6915 16.1114C12.0648 16.0581 12.5892 15.7914 12.8648 15.5248L15.6913 12.6983L16.3401 12.0494"
        stroke="#031E36"
        strokeWidth="0.859728"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.4746 5.13477C15.0701 7.25908 16.7323 8.9212 18.8655 9.52561"
        stroke="#031E36"
        strokeWidth="0.859728"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
