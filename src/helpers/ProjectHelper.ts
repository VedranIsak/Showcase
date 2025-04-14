import ProjectType from "../enums/ProjectType";
import Project from "../models/ProjectModel"
import angularLogoSrc from '../assets/angularLogo.png';
import aspDotNetLogoSrc from '../assets/aspDotNetLogo.png';
import reactLogoSrc from '../assets/reactLogo.png';
import cSharpLogoSrc from '../assets/cSharpLogo.png';

const aspDotNetTitle = "";
const aspDotNetAlt ="";
const reactTitle = "";
const reactAlt = "";
const angularTitle = "";
const angularAlt = "";
const cSharpTitle = "";
const cSharpAlt = "";

const GetSchoolProjects = (): Project[] => (
    new Array<Project>(
        new Project(
            "Yugoslav wars doc site (not deployed)", 
            "Created a (almost fully functioning) website documenting the Yugoslav Wars.", 
            aspDotNetLogoSrc, 
            aspDotNetAlt, 
            aspDotNetTitle),
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
            aspDotNetLogoSrc, 
            aspDotNetAlt, 
            aspDotNetTitle),
    )
)

const GetCareerProjects = (): Project[] => (
    new Array<Project>(
        new Project(
            "Report Service maintenance and optimization", 
            "Used the ITextSharp nuget and SQL Server to maintain and optimize a PDF Document Service at SundaHus", 
            aspDotNetLogoSrc, 
            aspDotNetAlt, 
            aspDotNetTitle),
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

export default GetProjects;