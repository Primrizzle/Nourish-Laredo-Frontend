export default function UtensilsIcon({
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
        d="M3.5 2.33331V10.5C3.5 11.7833 4.55 12.8333 5.83333 12.8333H10.5C11.1188 12.8333 11.7123 12.5875 12.1499 12.1499C12.5875 11.7123 12.8333 11.1188 12.8333 10.5V2.33331"
        stroke={stroke}
        strokeWidth={2.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.16675 2.33331V25.6666"
        stroke={stroke}
        strokeWidth={2.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.5001 17.5V2.33331C22.953 2.33331 21.4693 2.94789 20.3753 4.04186C19.2813 5.13582 18.6667 6.61955 18.6667 8.16665V15.1666C18.6667 16.45 19.7167 17.5 21.0001 17.5H24.5001ZM24.5001 17.5V25.6666"
        stroke={stroke}
        strokeWidth={2.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
