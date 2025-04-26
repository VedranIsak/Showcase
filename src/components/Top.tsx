import styles from './Top.module.css';
import profileImg from "../assets/top/profileImg.jpg";
import profileImgSynth from '../assets/top/profileImgAlt.jpg';
import { useState } from 'react';

const Top = () => {
    const [imgSrc, setImgSrc] = useState<string>(profileImg);
    const switchProfileImg= () => {
        (imgSrc == profileImg) 
        ?
        setImgSrc(profileImgSynth)
        :
        setImgSrc(profileImg);
    }

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img 
                    onClick={() => { switchProfileImg(); }}
                    src={imgSrc}
                    alt="Self taken profile image of Vedran Isak"
                    title="Self taken profile image of Vedran Isak"
                    height="400px"
                    width="400px"
                />
            </div>
            <div className={styles.textContainer}>
                <h1>
                    Hi! I'm <span>Vedran Isak.</span>
                </h1>
                <h2>
                    With this site you can get to know me and see some of my software related endeavours.
                </h2>
            </div>
        </div>
    )
}

export default Top;