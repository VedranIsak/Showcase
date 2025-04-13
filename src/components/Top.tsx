import styles from './Top.module.css';
import profileImg from "../assets/profileImg.jpg";
import profileImgSynth from '../assets/profileImgAlt.jpg';
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
                    alt="Profile image of Vedran Isak"
                    title="Self taken image of me (Vedran Isak)"
                    height="400px"
                    width="400px"
                />
            </div>
            <div className={styles.textContainer}>
                <h1>
                    Hi! I'm Vedran Isak!
                </h1>
                <h2>
                    Here you can learn about me and my software related endeavours.
                </h2>
            </div>
        </div>
    )
}

export default Top;