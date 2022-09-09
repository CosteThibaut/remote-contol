import { useState } from "react";
import "./ActionButton.css"

const ActionButton = ({ children, className, onClick }) => {
    const [isSelected, setIsSelected] = useState(false)
    const clickAction = () => {
        setIsSelected(false)
        onClick()
    }
    return (
        <>
            <div
                className={className + " actionButton" + (isSelected ? " selected" : "")}
                onTouchStart={() => setIsSelected(true)}
                onTouchEnd={clickAction}
            >
                {children}
            </div>
        </>
    );
}

export default ActionButton;
