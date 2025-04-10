import styles from './Skills.module.css';

const Skills = () => 
    (    
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <h2>My most prominent areas of knowledge</h2>
            </div>
            <div className={styles.mainContentContainer}>
                <div className={styles.contentContainer}>Tshabalala</div>
                <div className={styles.contentContainer}>Tshabalala</div>
                <div className={styles.contentContainer}>Tshabalala</div>
            </div>
        </div>
    )

export default Skills;