import ProjectType from "../enums/ProjectType";
import Project from "../models/ProjectModel"
import angularLogoSrc from '../assets/projects/angularLogo.png';
import reactLogoSrc from '../assets/projects/reactLogo.png';
import cSharpLogoSrc from '../assets/projects/cSharpLogo.png';

const reactTitle: string = "AI generated image of the React symbol";
const reactAlt: string = "AI generated image of the React symbol";
const angularTitle: string = "AI generated image of the Angular symbol";
const angularAlt: string = "AI generated image of the Angular symbol";
const cSharpTitle: string = "AI generated image of the C# symbol";
const cSharpAlt: string = "AI generated image of the C# symbol";

const GetSchoolProjects: () => Project[] = (): Project[] => (
    new Array<Project>(
        new Project(
            "Yugoslav wars doc site (not deployed)", 
            "Created a (almost fully functioning) website documenting the Yugoslav Wars. " +
            "The website was written using ASP.NET and also utilized Javascript for the frontend.", 
            cSharpLogoSrc, 
            cSharpAlt, 
            cSharpTitle),
        new Project(
            "Ukraine war doc site (deployed)", 
            "Created and published a small website documenting the Russo-Ukrainian conflict. The website was written using React and published through Github Pages.", 
            reactLogoSrc, 
            reactAlt, 
            reactTitle),
        new Project(
            "Old portfolio site (deployed)", 
            "Created and published a small personal showcase website. The site was written over the span of a month using React and deployed through Github Pages.", 
            reactLogoSrc, 
            reactAlt, 
            reactTitle),
        new Project(
            "SAAS start up (not deployed)", 
            "Created a (almost fully functioning) website subscription service for the betting market. The site utilized several APIs and external providers " + 
            "of data services, such as Stripe for payments and Google for user sign in.", 
            cSharpLogoSrc, 
            cSharpAlt, 
            cSharpTitle),
    )
)

const GetCareerProjects: () => Project[] = (): Project[] => (
    new Array<Project>(
        new Project(
            "Report Service maintenance and optimization", 
            "Used the ITextSharp nuget and SQL Server to maintain and optimize a Document Service at SundaHus. " +
            "The service was connected to a ASP.NET MVC website and allowed for around the clock document generation by the end users.", 
            cSharpLogoSrc, 
            cSharpAlt, 
            cSharpTitle),
        new Project(
            "Angular Material Prototype", 
            "Developed, after extensive prep work doing interviews and Figma prototyping, a Angular Material showcase prototype for Region Östergötland." +
            "The project lasted a couple of months and was done together with a colleague.", 
            angularLogoSrc, 
            angularAlt, 
            angularTitle),
        new Project(
            "EPD Module Development", 
            "Expanded the functionality for company workers and customers to input and retrieve new EPD data at SundaHus. " +
            "EPD is standard for accumulating relevant environmental data and the development was done in WPF, ASP.NET MVC and SQL Server.", 
            cSharpLogoSrc, 
            angularAlt, 
            angularTitle),
        new Project(
            "System maintenence", 
            "Did extensive maintenence work and bug fixes on both the company`s website and it`s desktop applications at SundaHus. " +
            "The work involved technologies such as WPF, ASP.NET MVC, Javascript (jQuery), SQL Server and React.", 
            cSharpLogoSrc, 
            cSharpAlt, 
            cSharpTitle),
    )
)

const GetProjectsHeader: (projectType: ProjectType) => string = (projectType: ProjectType): string => {
    switch(projectType) {
        case ProjectType.CareerProject:
            return "Some of my past school & work projects";
        case ProjectType.HobbyProject:
            return "Some of my past hobby projects";
        case ProjectType.Other:
            return "Some of my past projects";
    }
}

const GetProjects: (projectType: ProjectType) => Project[] = (projectType: ProjectType): Project[] => {
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