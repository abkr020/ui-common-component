import { useState, type FC } from "react"

type ButtonVariant = "primary" | "secondary" | "danger"

type ButtonProps = {
    label: string
    variant?: ButtonVariant
    disabled?: boolean
    onClick?: () => void | Promise<void>
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
    const [isLoading, setIsLoading] = useState(false)

    // Convert label to Title Case
    const formatLabel = (text: string) =>
        text
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")

    // Handle click with loading
    const handleClick = async () => {
        if (!onClick) return
        try {
            setIsLoading(true)
            await onClick() // works for async or sync functions
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <button
            type={type}
            disabled={disabled || isLoading}
            onClick={handleClick}
            className={`uicc-btn uicc-btn--${variant} ${disabled || isLoading ? "uicc-btn--disabled" : ""
                } ${className}`}
        >
            {isLoading ? "Loading..." : formatLabel(label)}
        </button>
    )
}

export default Button
