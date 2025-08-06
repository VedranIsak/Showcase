import styles from './Top.module.css';
import profileImg from "../../assets/top/profileImg.jpg";
import profileImgSynth from '../../assets/top/profileImgAlt.jpg';
import { JSX, useState } from 'react';
import './Top.css';
import CircleBackground from '../designComponents/CircleBackground';
import TopProps from '../../props/TopProps';

const Top: React.FC<TopProps> = ({circleBackgroundSide}: TopProps): JSX.Element => {
    const [imgSrc, setImgSrc]: [string, React.Dispatch<React.SetStateAction<string>>] 
    = useState<string>(profileImg);

    const switchProfileImg: () => void = (): void => {
        (imgSrc == profileImg) 
        ?
        setImgSrc(profileImgSynth)
        :
        setImgSrc(profileImg);
    }

    return (
        <div className={styles.container}>
            <CircleBackground side={circleBackgroundSide} />
            <div className={styles.imgContainer}>
                <img 
                    data-id="top-img"
                    onClick={() => { switchProfileImg(); }}
                    src={imgSrc}
                    alt="Self taken profile image of Vedran Isak"
                    title="Self taken profile image of Vedran Isak"
                />
            </div>
            <div className={styles.textContainer} data-id="top-text-container">
                <h1>
                    Welcome! I'm Vedran Isak.
                </h1>
                <h2>
                    With this site you can get to know me and see some of my software related endeavours.
                </h2>
            </div>
        </div>
    )
}

export default Top;