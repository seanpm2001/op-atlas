export function InfoIconFilled({
  className,
  size = 18,
}: {
  className?: string
  size?: number
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.99984 17.3337C4.39746 17.3337 0.666504 13.6027 0.666504 9.00033C0.666504 4.39795 4.39746 0.666992 8.99984 0.666992C13.6022 0.666992 17.3332 4.39795 17.3332 9.00033C17.3332 13.6027 13.6022 17.3337 8.99984 17.3337ZM8.1665 8.16699V13.167H9.83317V8.16699H8.1665ZM8.1665 4.83366V6.50033H9.83317V4.83366H8.1665Z"
        fill="#3374DB"
      />
    </svg>
  )
}
