import styles from './Projects.module.css';
import ProjectProps from '../props/projectProps';

//Måste bryta upp projects-listan i chunks av två.
//Därefter köra två var i varje contentContainer.

const Projects = ({projectsHeader, projects}: ProjectProps) => 
    (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <h2 className={styles.header}>{projectsHeader}</h2>
            </div>
            <div className={styles.mainContentContainer}>
                <div className={styles.contentContainer}>
                    <div className={styles.projectContainer}>
                        <img />
                        <h3>Yugoslav wars doc site (not published)</h3>
                        <h4>Created (almost fully) a website explaining the Yugoslav Wars.</h4>
                    </div>
                    <div className={styles.projectContainer}>
                        <img />
                        <div className={styles.slider}></div>
                        <h3>Ukraine war doc site (published)</h3>
                        <h4>Created and published a small website explaining the Russo-Ukrainian conflict.</h4>
                    </div>
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.projectContainer}>
                        <img />
                        <div className={styles.slider}></div>
                        <h3>Old portfolio site (published)</h3>
                        <h4>Created and published a small personal showcase website.</h4>
                    </div>
                    <div className={styles.projectContainer}>
                        <img />
                        <div className={styles.slider}></div>
                        <h3>SAAS start up (not published)</h3>
                        <h4>
                            I (almost fully) created a website subscription service for the betting market. 
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )

export default Projects;