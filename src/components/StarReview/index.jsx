import { useState } from "react";
import { FiStar } from "react-icons/fi";
import { GoStarFill } from "react-icons/go";
import { StyledStar } from "./styles";

export function StarReview(){
    const [filled, setFilled] = useState(false);

    const handleStarClick = () => {
        setFilled(!filled);
    };

    return (
        <StyledStar onClick={handleStarClick}>
            {filled ? <GoStarFill /> : <FiStar />}
        </StyledStar>
    );
}