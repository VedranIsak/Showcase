import CircleBackgroundSide from "../enums/CircleBackgroundSide";
import Project from "../models/ProjectModel";

interface ProjectsProps {
    projectsHeader: string;
    projectList: Project[];
    circleBackgroundSide: CircleBackgroundSide;
}

export default ProjectsProps;