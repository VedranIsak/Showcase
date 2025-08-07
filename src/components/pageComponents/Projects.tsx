import styles from './Projects.module.css';
import ProjectsProps from '../../props/ProjectsProps';
import ProjectModel from '../../models/ProjectModel';
import './Projects.css';
import { JSX } from 'react';
import PageHeader from '../generalPageComponents/PageHeader';
import CircleBackground from '../designComponents/CircleBackground';
import ProjectProps from '../../props/ProjectProps';

const Projects: React.FC<ProjectsProps> = ({projectsHeader, projectList, circleBackgroundSide}: ProjectsProps): JSX.Element => {

    const Project: React.FC<ProjectProps> = ({project}: ProjectProps): JSX.Element => (
        <div className={styles.container} data-id="project-container">
            <img
                src={project.imgSrc}
                alt={project.imgAlt}
            />
            <div className={styles.textContainer}>
                <h3>{project.header}</h3>
                <p>{project.text}</p>
            </div>
        </div>
    )

    const projects: JSX.Element[] = projectList.map((project: ProjectModel) => (
        <Project project={project} key={project.header} />
    ));

    return (
        <div className={styles.mainContainer}>
            <PageHeader headerText={projectsHeader} />
            <CircleBackground side={circleBackgroundSide} />
            <div data-id="projects-main-content-container" className={styles.mainContentContainer}>
                {projects}
            </div>
        </div>
    );
}

export default Projects;