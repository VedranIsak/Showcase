import ProjectProps from '../props/ProjectProps';
import styles from './Project.module.css';

const Project = ({project}: ProjectProps) => (
    <div className={styles.container}>
        <img
            src={project.imgSrc}
            alt={project.imgAlt}
            title={project.imgTitle} 
        />
        <h3>{project.header}</h3>
        <h4>{project.text}</h4>
    </div>
)

export default Project;