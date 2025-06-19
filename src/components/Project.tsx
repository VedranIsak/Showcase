import ProjectProps from '../props/ProjectProps';
import styles from './Project.module.css';

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

export default Project;