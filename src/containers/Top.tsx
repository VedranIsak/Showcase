import styles from './Top.module.css';

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
                    src='../../src/assets/profileImg.jpg'
                    alt="Profile image of Vedran Isak"
                    height="400px"
                    width="300px"
                />
            </div>
        </div>
        </>
    )
}

export default Top;