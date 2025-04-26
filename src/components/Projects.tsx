import styles from './Projects.module.css';
import ProjectsProps from '../props/ProjectsProps';
import ProjectModel from '../models/ProjectModel';
import Project from './Project';

//Måste bryta upp projects-listan i chunks av två.
//Därefter köra två var i varje contentContainer.

const Projects = ({projectsHeader, projectList}: ProjectsProps) => {
    const projects = projectList.map((project: ProjectModel) => (
        <Project project={project} />
    ));

    return (
        <div 
            className={styles.container}
        >
            <div className={styles.headerContainer}>
                <h2 className={styles.header}>{projectsHeader}</h2>
            </div>
            <div 
                className={styles.mainContentContainer}
                style={{
                    gridTemplateRows: `repeat(${projectList.length/2}, 1fr)`
                }}
            >
                {projects}
            </div>
        </div>
    );
}

export default Projects;