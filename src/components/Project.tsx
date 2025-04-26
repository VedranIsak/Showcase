import ProjectProps from '../props/ProjectProps';
import styles from './Project.module.css';

const Project = ({project}: ProjectProps) => (
    <div className={styles.container}>
        <img
            src={project.imgSrc}
            alt={project.imgAlt}
            title={project.imgTitle} 
        />
        <h2>{project.header}</h2>
        <h3>{project.text}</h3>
    </div>
)

export default Project;