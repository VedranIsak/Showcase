import ProjectType from "../enums/ProjectType";
import Project from "../models/ProjectModel"
import angularLogoSrc from '../assets/projects/angularLogo.png';
import reactLogoSrc from '../assets/projects/reactLogo.png';
import cSharpLogoSrc from '../assets/projects/cSharpLogo.png';

const reactTitle = "AI generated image of the React symbol";
const reactAlt = "AI generated image of the React symbol";
const angularTitle = "AI generated image of the Angular symbol";
const angularAlt = "AI generated image of the Angular symbol";
const cSharpTitle = "AI generated image of the C# symbol";
const cSharpAlt = "AI generated image of the C# symbol";

const GetSchoolProjects = (): Project[] => (
    new Array<Project>(
        new Project(
            "Yugoslav wars doc site (not deployed)", 
            "Created a (almost fully functioning) website documenting the Yugoslav Wars.", 
            cSharpLogoSrc, 
            cSharpAlt, 
            cSharpTitle),
        new Project(
            "Ukraine war doc site (deployed)", 
            "Created and published a small website documenting the Russo-Ukrainian conflict.", 
            reactLogoSrc, 
            reactAlt, 
            reactTitle),
        new Project(
            "Old portfolio site (deployed)", 
            "Created and published a small personal showcase website.", 
            reactLogoSrc, 
            reactAlt, 
            reactTitle),
        new Project(
            "SAAS start up (not deployed)", 
            "Created a (almost fully functioning) website subscription service for the betting market.", 
            cSharpLogoSrc, 
            cSharpAlt, 
            cSharpTitle),
    )
)

const GetCareerProjects = (): Project[] => (
    new Array<Project>(
        new Project(
            "Report Service maintenance and optimization", 
            "Used the ITextSharp nuget and SQL Server to maintain and optimize a PDF Document Service at SundaHus", 
            cSharpLogoSrc, 
            cSharpAlt, 
            cSharpTitle),
        new Project(
            "Angular Material Prototype", 
            "Developed, after extensive prep work doing interviews and Figma prototyping, a Angular Material showcase prototype for Region Östergötland", 
            angularLogoSrc, 
            angularAlt, 
            angularTitle),
        new Project(
            "EPD Module Development", 
            "Expanded the functionality for company workers and customers to input and retrieve new EPD data at SundaHus", 
            cSharpLogoSrc, 
            angularAlt, 
            angularTitle),
        new Project(
            "System maintenence", 
            "Did extensive maintenence work and bug fixes on both the company`s website and it`s desktop applications at SundaHus", 
            cSharpLogoSrc, 
            cSharpAlt, 
            cSharpTitle),
    )
)

const GetProjectsHeader = (projectType: ProjectType): string => {
    switch(projectType) {
        case ProjectType.CareerProject:
            return "Some of my past school & work projects";
        case ProjectType.HobbyProject:
            return "Some of my past hobby projects";
        case ProjectType.Other:
            return "Some of my past projects";
    }
}

const GetProjects = (projectType: ProjectType): Project[] => {
    switch(projectType) {
        case ProjectType.CareerProject:
            return GetCareerProjects();
        case ProjectType.HobbyProject:
            return GetSchoolProjects();
        case ProjectType.Other:
            return new Array<Project>(0);
    }
}

export { GetProjects, GetProjectsHeader };