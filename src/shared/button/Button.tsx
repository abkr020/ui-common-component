import type { FC } from "react"

type ButtonVariant = "primary" | "secondary" | "danger"

type ButtonProps = {
    label: string
    variant?: ButtonVariant
    disabled?: boolean
    onClick?: () => void
}

const Button: FC<ButtonProps> = ({
    label,
    variant = "primary",
    disabled = false,
    onClick,
}) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`btn btn-${variant}`}
            style={{
                padding: "8px 16px",
                borderRadius: "6px",
                border: "none",
                cursor: disabled ? "not-allowed" : "pointer",
            }}
        >
            {label}
        </button>
    )
}

export default Button
