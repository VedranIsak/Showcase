import { JSX } from "react";
import './CircleBackground.css';
import CircleBackgroundProps from "../props/CircleBackgroundProps";
import CircleBackgroundSide from "../enums/CircleBackgroundSide";

const CircleBackground: React.FC<CircleBackgroundProps> = ({side}: CircleBackgroundProps): JSX.Element => {
    return (
        <div className={`circleBackground ${side == CircleBackgroundSide.left ? "leftSide" : "rightSide"}`}
        >
            <div className={`circle shade1 ${side == CircleBackgroundSide.left ? "xxlargeLeft" : "xxlargeRight"}`}></div>
            <div className={`circle shade2 ${side == CircleBackgroundSide.left ? "xlargeLeft" : "xlargeRight"}`}></div>
            <div className={`circle shade3 ${side == CircleBackgroundSide.left ? "largeLeft" : "largeRight"}`}></div>
            <div className={`circle shade4 ${side == CircleBackgroundSide.left ? "mediumLeft" : "mediumRight"}`}></div>
            <div className={`circle shade5 ${side == CircleBackgroundSide.left ? "smallLeft" : "smallRight"}`}></div>
        </div>
    )
}

export default CircleBackground