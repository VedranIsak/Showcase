import ProjectType from "../enums/ProjectType";
import Project from "../models/ProjectModel"

const GetSchoolProjects = (): Project[] => (
    new Array<Project>(
        new Project(
            "Yugoslav wars doc site (not deployed)", 
            "Created a (almost fully functioning) website documenting the Yugoslav Wars.", 
            "", "", ""),
        new Project(
            "Ukraine war doc site (deployed)", 
            "Created and published a small website documenting the Russo-Ukrainian conflict.", 
            "", "", ""),
        new Project(
            "Old portfolio site (deployed)", 
            "Created and published a small personal showcase website.", 
            "", "", ""),
        new Project(
            "SAAS start up (not deployed)", 
            "Created a (almost fully functioning) website subscription service for the betting market.", 
            "", "", ""),
    )
)

const GetCareerProjects = (): Project[] => (
    new Array<Project>(
        new Project(
            "Report Service maintenance and optimization", 
            "Used the ITextSharp nuget and SQL Server to maintain and optimize a PDF Document Service at SundaHus", 
            "", "", ""),
        new Project(
            "Angular Material Prototype", 
            "Developed, after extensive prep work doing interviews and Figma, a Angular Material showcase prototype for Region Östergötland", 
            "", "", ""),
        new Project(
            "EPD Module Development", 
            "Expanded the functionality for company workers and customers to input and retrieve new EPD data at SundaHus", 
            "", "", ""),
        new Project(
            "System maintenence", 
            "Did extensive maintenence work and bug fixes on both the company`s website and it`s desktop applications at SundaHus", 
            "", "", ""),
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