import aspImg from '../assets/skills/aspDotNet.png';
import sqlImg from '../assets/skills/sqlServer.png';
import reactImg from '../assets/skills/react.png';
import InfoType from "../enums/InfoType";
import Info from '../models/InfoModel';

const sqlAlt: string = "AI generated image of a computer with SQL Server Code";
const aspAlt: string = "AI generated image of a computer with ASP.NET Code";
const reactAlt: string = "AI generated image of a computer with React Code";

const aspTitle: string = aspAlt;
const sqlTitle: string = sqlAlt;
const reactTitle: string = reactAlt;

const GetSkillsInfos: () => Info[] = (): Info[] => (
    new Array<Info>(
        new Info(
            "ASP.NET MVC", 
            "I spent nearly three years working with ASP.NET MVC and WPF as a fullstack developer.", 
            aspImg, 
            aspAlt, 
            aspTitle),
        new Info(
            "SQL Server", 
            "I spent nearly three years working with SQL Server and, partially, Entity Framework.", 
            sqlImg, 
            sqlAlt, 
            sqlTitle),
        new Info(
            "React", 
            "I've spent several years making projects in React. I've also worked with React professionally.", 
            reactImg, 
            reactAlt, 
            reactTitle)
    )
);

const GetAboutInfos: () => Info[] = (): Info[] => (
    new Array<Info>(
        new Info(
            "My overall life", 
            `I was born in 1998 in the lake town of Motala. 
            I spent all my life there up until 2020, when I moved to Linkoping.
            I graduated in 2021 from Linkoping University with a bachelor's degree in Information Systems, 
            specializing in software development. I started shortly thereafter working as a software developer for Sundahus.
            I did this for three years, until 2024, before I took a break.`
        ),
        new Info(
            "My interests", 
            `My main interest in terms of software development is most likely mobile app development.
            This is an area I would like to excel at in the future. Previously my main interests have been 
            in web development, using React and .NET. Apart from that I am a huge nerd also when it comes to
            history and geopolitics.`, 
        ),
        new Info(
            "My personality", 
            `I'm a tad bit of an extravagant individual. But at the same time I'm someone who can often be fairly reserved.
            Friends and family would describe me first and foremost as deeply loyal, empathetic and incredibly determined.
            I am, to my core, an introvert. But at the same time I enjoy spending time with people, but preferably in chunks.`
        )
    )
);

const GetInfosHeader: (infoType: InfoType) => string = (infoType: InfoType): string => {
    switch(infoType) {
        case InfoType.Skills:
            return "Some of my areas of knowledge";
        case InfoType.About:
            return "Some small bits about me";
        case InfoType.Other:
            return "Some general information";
    }
}

const GetInfos: (infoType: InfoType) => Info[] = (infoType: InfoType): Info[] => {
    switch(infoType) {
        case InfoType.Skills:
            return GetSkillsInfos();
        case InfoType.About:
            return GetAboutInfos();
        case InfoType.Other:
            return new Array<Info>(0);
    }
}

export { GetInfos, GetInfosHeader };