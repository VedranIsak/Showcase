import styles from './Projects.module.css';

const Projects = () => {
    return (
        <div className={styles.container}>
            <div><h2 className={styles.header}>Some of my Projects</h2></div>
            <div className={styles.sideContainer}>
                <div className={styles.projectContainer}>
                    <img />
                    <div className={styles.slider}></div>
                    <h3>Project Name</h3>
                </div>
                <div className={styles.projectContainer}>
                    <img />
                    <div className={styles.slider}></div>
                    <h3>Project Name</h3>
                </div>
            </div>
            <div className={styles.sideContainer}>
                <div className={styles.projectContainer}>
                    <img />
                    <div className={styles.slider}></div>
                    <h3>Project Name</h3>
                </div>
                <div className={styles.projectContainer}>
                    <img />
                    <div className={styles.slider}></div>
                    <h3>Project Name</h3>
                </div>
            </div>
        </div>
    )
}

export default Projects;