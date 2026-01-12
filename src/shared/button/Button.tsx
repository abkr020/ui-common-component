type ButtonVariant = "primary" | "secondary" | "danger"

type ButtonProps = {
    label: string
    variant?: ButtonVariant
    disabled?: boolean
    onClick?: () => void
}

function Button({
    label,
    variant = "primary",
    disabled = false,
    onClick,
}: ButtonProps) {
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
