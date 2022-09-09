import { useState } from "react";
import "./RoundedButton.css"

const RoundedButton = ({ children, className, onClick }) => {
    const [isSelected, setIsSelected] = useState(false)
    const clickAction = () => {
        setIsSelected(false)
        onClick()
    }
    return (
        <>
            <div
                className={className + " roundedButton" + (isSelected ? " selected" : "")}
                onTouchStart={() => setIsSelected(true)}
                onTouchEnd={clickAction}
            >
                {children}
            </div>
        </>
    );
}

export default RoundedButton;
