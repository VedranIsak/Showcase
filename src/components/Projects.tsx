import styles from './Projects.module.css';
import ProjectsProps from '../props/ProjectsProps';
import ProjectModel from '../models/ProjectModel';
import Project from './Project';
import './Projects.css';
import { JSX } from 'react';

const Projects = ({projectsHeader, projectList}: ProjectsProps) => {
    const projects: JSX.Element[] = projectList.map((project: ProjectModel) => (
        <Project project={project} />
    ));

const splitSentenceByWords = (sentence: string): [string, string, string] => {
    const words = sentence.trim().split(/\s+/);
    const n = words.length;

    const part1 = words.slice(0, Math.floor(n / 3)).join(' ');
    const part2 = words.slice(Math.floor(n / 3), Math.floor(2 * n / 3)).join(' ');
    const part3 = words.slice(Math.floor(2 * n / 3)).join(' ');
    return [part1, part2, part3];
}

const [part1, part2, part3] = splitSentenceByWords(projectsHeader);

    return (
        <div className={styles.container}>
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