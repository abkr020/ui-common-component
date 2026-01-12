import type { FC } from "react"

type ButtonVariant = "primary" | "secondary" | "danger"

type ButtonProps = {
  label: string
  variant?: ButtonVariant
  disabled?: boolean
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  className?: string
}

const Button: FC<ButtonProps> = ({
  label,
  variant = "primary",
  disabled = false,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`uicc-btn uicc-btn--${variant} ${disabled ? "uicc-btn--disabled" : ""} ${className}`}
    >
      {label}
    </button>
  )
}

export default Button
