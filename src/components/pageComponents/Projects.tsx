import styles from './Projects.module.css';
import ProjectsProps from '../../props/ProjectsProps';
import ProjectProps from '../../props/ProjectProps';
import ProjectModel from '../../models/ProjectModel';
import './Projects.css';
import { JSX } from 'react';
import PageHeader from '../generalPageComponents/PageHeader';
import CircleBackground from '../designComponents/CircleBackground';

const Projects: React.FC<ProjectsProps> = ({projectsHeader, projectList, circleBackgroundSide}: ProjectsProps): JSX.Element => {

    const Project: React.FC<ProjectProps> = ({project}: ProjectProps): JSX.Element => (
        <div className={styles.container}>
            <img
                src={project.imgSrc}
                alt={project.imgAlt}
                title={project.imgTitle} 
            />
            <div className={styles.textContainer}>
                <h2>{project.header}</h2>
                <h3>{project.text}</h3>
            </div>
        </div>
    )

    const projects: JSX.Element[] = projectList.map((project: ProjectModel) => (
        <Project project={project} />
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