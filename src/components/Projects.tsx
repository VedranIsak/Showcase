import styles from './Projects.module.css';
import ProjectsProps from '../props/ProjectsProps';
import ProjectProps from '../props/ProjectProps';
import ProjectModel from '../models/ProjectModel';
import './Projects.css';
import { JSX } from 'react';
import splitSentenceByWords from '../helpers/HeaderHelper';

const Projects = ({projectsHeader, projectList}: ProjectsProps) => {
    const Project = ({project}: ProjectProps) => (
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

const [part1, part2, part3] = splitSentenceByWords(projectsHeader);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.headerContainer}>
                <h2>
                    <span className='titleWord titleWord1'>{part1} </span>
                    <span className='titleWord titleWord2'>{part2} </span>
                    <span className='titleWord titleWord3'>{part3}</span>
                </h2>
            </div>
            <div data-id="projects-main-content-container" className={styles.mainContentContainer}>
                {projects}
            </div>
        </div>
    );
}

export default Projects;