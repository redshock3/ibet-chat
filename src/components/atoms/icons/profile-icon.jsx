export function ProfileIcon({ className, width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "12"}
      height={height || "14"}
      viewBox="0 0 12 14"
      stroke="currentColor"
      fill="currentColor"
      className={className}
    >
      <path d="M6 7C7.9062 7 9.45148 5.433 9.45148 3.5C9.45148 1.567 7.9062 0 6 0C4.0938 0 2.54852 1.567 2.54852 3.5C2.54852 5.433 4.0938 7 6 7Z" />
      <path d="M0.251563 11.655C0.821919 9.212 3.21466 7.875 5.69196 7.875H6.30804C8.78534 7.875 11.1781 9.21112 11.7484 11.655C11.8589 12.1284 11.9469 12.6236 11.9961 13.1268C12.0435 13.608 11.6535 14 11.1772 14H0.822782C0.346478 14 -0.0435387 13.6071 0.00391917 13.1268C0.0531027 12.6236 0.141115 12.1284 0.251563 11.655Z" />
    </svg>
  );
}
