export default function IncreasingArrow({
  size = 28,
  stroke = "#2C2C2C",
  className = "",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      className={className}
    >
      <path
        d="M18.6667 8.16669H25.6667V15.1667"
        stroke={stroke}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.6666 8.16669L15.7499 18.0834L9.91659 12.25L2.33325 19.8334"
        stroke={stroke}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
