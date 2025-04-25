import { CSSProperties } from "react";
import Project from "../models/ProjectModel";

interface ProjectsProps {
    projectsHeader: string;
    projectList: Project[];
    backgroundStyle: CSSProperties;
}

export default ProjectsProps;