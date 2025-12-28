export default function CalendarIcon({
  width = 28,
  height = 28,
  stroke = "white",
  className = "",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      className={className}
    >
      <path
        d="M9.33325 2.33337V7.00004"
        stroke={stroke}
        strokeWidth={2.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.6667 2.33337V7.00004"
        stroke={stroke}
        strokeWidth={2.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.1667 4.66663H5.83333C4.54467 4.66663 3.5 5.71129 3.5 6.99996V23.3333C3.5 24.622 4.54467 25.6666 5.83333 25.6666H22.1667C23.4553 25.6666 24.5 24.622 24.5 23.3333V6.99996C24.5 5.71129 23.4553 4.66663 22.1667 4.66663Z"
        stroke={stroke}
        strokeWidth={2.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 11.6666H24.5"
        stroke={stroke}
        strokeWidth={2.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
