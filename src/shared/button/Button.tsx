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
    // Convert label to Title Case
    const formatLabel = (text: string) =>
        text
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`uicc-btn uicc-btn--${variant} ${disabled ? "uicc-btn--disabled" : ""} ${className}`}
        >
            {formatLabel(label)}
        </button>
    )
}

export default Button
