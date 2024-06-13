import Button from '../ui/Button';

function SupportButton({
  id,
  title,
  openHandler,
}: {
  id: number;
  title: string;
  openHandler: (id: number) => void;
}) {
  return (
    <Button
      onClick={() => openHandler(id)}
      style="mt-10 flex flex-1 flex-col items-center justify-center gap-2 rounded-md border bg-white p-2 text-gray-800 shadow-md"
    >
      {id === 1 && (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M19.56 7.119a8.998 8.998 0 01.001 9.763M15.548 8.452a5.017 5.017 0 11-7.096 7.095 5.017 5.017 0 017.096-7.095"
            stroke="#323232"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.321 7.55l2.584-3.138a1.003 1.003 0 011.483-.072l1.273 1.273a1.002 1.002 0 01-.072 1.483L16.45 9.68"
            fill="#F0C807"
          ></path>
          <path
            d="M14.321 7.55l2.584-3.138a1.003 1.003 0 011.483-.072l1.273 1.273a1.002 1.002 0 01-.072 1.483L16.45 9.68"
            stroke="#323232"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.679 16.45l-2.584 3.138a1.003 1.003 0 01-1.483.072l-1.273-1.273a1.002 1.002 0 01.072-1.483L7.55 14.32"
            fill="#F0C807"
          ></path>
          <path
            d="M9.679 16.45l-2.584 3.138a1.003 1.003 0 01-1.483.072l-1.273-1.273a1.002 1.002 0 01.072-1.483L7.55 14.32"
            stroke="#323232"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.551 9.68l-3.14-2.585a1.003 1.003 0 01-.072-1.483L5.612 4.34a1.002 1.002 0 011.483.072l2.584 3.14"
            fill="#F0C807"
          ></path>
          <path
            d="M7.551 9.68l-3.14-2.585a1.003 1.003 0 01-.072-1.483L5.612 4.34a1.002 1.002 0 011.483.072l2.584 3.14"
            stroke="#323232"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.449 14.321l3.139 2.584c.457.376.49 1.064.072 1.483l-1.273 1.273a1.002 1.002 0 01-1.483-.072L14.32 16.45"
            fill="#F0C807"
          ></path>
          <path
            d="M16.449 14.321l3.139 2.584c.457.376.49 1.064.072 1.483l-1.273 1.273a1.002 1.002 0 01-1.483-.072L14.32 16.45M16.882 19.561a8.998 8.998 0 01-9.763 0M4.439 7.118a8.998 8.998 0 00.001 9.763M16.881 4.44a8.998 8.998 0 00-9.763-.001"
            stroke="#323232"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      )}
      {id === 2 && (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 17H18C17.448 17 17 16.552 17 16V11C17 10.448 17.448 10 18 10H19C20.105 10 21 10.895 21 12V15C21 16.105 20.105 17 19 17Z"
            fill="#F0C807"
            stroke="#323232"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 17H5C3.895 17 3 16.105 3 15V12C3 10.895 3.895 10 5 10H6C6.552 10 7 10.448 7 11V16C7 16.552 6.552 17 6 17Z"
            fill="#F0C807"
            stroke="#323232"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M18.5 10V9.5C18.5 5.91 15.59 3 12 3V3C8.41 3 5.5 5.91 5.5 9.5V10"
            stroke="#323232"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.625 21.25H11.375C10.685 21.25 10.125 20.69 10.125 20C10.125 19.31 10.685 18.75 11.375 18.75H12.625C13.315 18.75 13.875 19.31 13.875 20C13.875 20.69 13.315 21.25 12.625 21.25Z"
            fill="#F0C807"
            stroke="#323232"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M13.875 20H16C17.105 20 18 19.105 18 18V17"
            stroke="#323232"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      )}
      {id === 3 && (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.374 12.718L19.88 9.663C20.581 9.189 21 8.398 21 7.552C21 6.142 19.858 5 18.449 5H5.56601C4.15701 5 3.01501 6.142 3.01501 7.551C3.01501 8.397 3.43401 9.188 4.13501 9.663L8.64101 12.718C10.674 14.096 13.341 14.096 15.374 12.718Z"
            fill="#F0C807"
            stroke="#323232"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M3 7.55103V17C3 18.657 4.343 20 6 20H18C19.657 20 21 18.657 21 17V7.55203"
            stroke="#323232"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      )}
      <span>{title}</span>
    </Button>
  );
}

export default SupportButton;
