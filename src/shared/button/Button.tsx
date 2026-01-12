import { useMemo, useState, type FC } from "react"

type ButtonVariant = "primary" | "secondary" | "danger"

type ButtonProps = {
    label?: string
    variant?: ButtonVariant
    disabled?: boolean
    onClick?: () => void | Promise<void>
    type?: "button" | "submit" | "reset"
    className?: string
}

const Button: FC<ButtonProps> = ({
    label: propsLabel = "",
    variant: propsVariant = "primary",
    disabled: propsDisabled = false,
    onClick: propsOnClick,
    type: propsType = "button",
    className: propsClassName = "",
}) => {
    const [isLoading, setIsLoading] = useState(false)

    // Convert propsLabel to Title Case
    const formatLabel = (text: string) => {
        console.log("lable calculate");

        return (

            text
                .split(" ")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")
        )
    }
    // const displayLabel = isLoading ? "Loading..." : formatLabel(propsLabel)

    const formattedLabel = useMemo(() => {
        console.log("label calculate")
        return propsLabel
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
    }, [propsLabel])

    const displayLabel = isLoading ? "Loading..." : formattedLabel


    // Handle click with loading
    const handleClick = async () => {
        if (!propsOnClick || isLoading) return
        try {
            setIsLoading(true)
            await propsOnClick() // works for async or sync functions
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <button
            type={propsType}
            disabled={propsDisabled || isLoading}
            onClick={handleClick}
            className={`uicc-btn uicc-btn--${propsVariant} ${propsDisabled || isLoading ? "uicc-btn--disabled" : ""
                } ${propsClassName}`}
        >
            {/* {isLoading ? "Loading..." : formatLabel(propsLabel)} */}
            {displayLabel}

        </button>
    )
}

export default Button
