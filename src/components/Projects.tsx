import styles from './Projects.module.css';
import ProjectsProps from '../props/ProjectsProps';
import ProjectModel from '../models/ProjectModel';
import Project from './Project';
import './Projects.css';

const Projects = ({projectsHeader, projectList}: ProjectsProps) => {
    const projects = projectList.map((project: ProjectModel) => (
        <Project project={project} />
    ));

    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <h2>{projectsHeader}</h2>
            </div>
            <div data-id="projects-main-content-container" className={styles.mainContentContainer}>
                {projects}
            </div>
        </div>
    );
}

export default Projects;