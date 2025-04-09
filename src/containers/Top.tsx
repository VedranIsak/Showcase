import styles from './Top.module.css';
import profileImg from "../assets/profileImg.jpg";

const Top = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                                {/* <img 
                    src='../../src/assets/profileImg.jpg'
                    alt="Profile image of Vedran Isak"
                    height="400px"
                    width="300px"
                /> */}

                <img 
                    src={profileImg}
                    alt="Profile image of Vedran Isak"
                    title="Image of me (Vedran Isak)"
                    height="400px"
                    width="400px"
                />
            </div>
        </div>
        </>
    )
}

export default Top;