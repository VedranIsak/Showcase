import { JSX } from "react";
import './CircleBackground.css';
import CircleBackgroundProps from "../props/CircleBackgroundProps";
import CircleBackgroundSide from "../enums/CircleBackgroundSide";

const CircleBackground: React.FC<CircleBackgroundProps> = ({side}: CircleBackgroundProps): JSX.Element => {
    const leftSideClass = "leftSide";
    const rightSideClass = "rightSide";

    return (
        <div className={`circleBackground ${side == CircleBackgroundSide.left ? leftSideClass : rightSideClass}`}
        >
            <div className="circle xxlarge shade1"></div>
            <div className="circle xlarge shade2"></div>
            <div className="circle large shade3"></div>
            <div className="circle medium shade4"></div>
            <div className="circle small shade5"></div>
        </div>
    )
}

export default CircleBackground