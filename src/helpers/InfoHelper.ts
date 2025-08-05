import aspImg from '../assets/skills/aspDotNet.png';
import sqlImg from '../assets/skills/sqlServer.png';
import reactImg from '../assets/skills/react.png';

import lifeImg from "../assets/about/Life.jpg";
import interestsImg from "../assets/about/interests.jpg";
import personalityImg from "../assets/about/personality.jpg";

import InfoType from "../enums/InfoType";
import Info from '../models/InfoModel';

const sqlAlt: string = "AI generated image of a computer with SQL Server Code";
const aspAlt: string = "AI generated image of a computer with ASP.NET Code";
const reactAlt: string = "AI generated image of a computer with React Code";

const aspTitle: string = aspAlt;
const sqlTitle: string = sqlAlt;
const reactTitle: string = reactAlt;

const interestsAlt: string = "Image by unknown from https://appomate.com.au/why-are-microservices-necessary-for-any-entrepreneur-who-needs-app-scaling/. Licensed under CC BY 4.0.";
const lifeAlt: string = "Image by Eric And30 from https://commons.wikimedia.org/wiki/File:Studenthuset-corson.jpg. Licensed under CC BY 4.0.";
const personalityAlt: string = "Image by unknown from https://www.pickpik.com/meditation-view-sunrise-sky-peace-happy-93445. Licensed under CC BY 4.0.";

const interestsTitle: string = interestsAlt;
const lifeTitle: string = lifeAlt;
const personalityTitle: string = personalityAlt;

const GetSkillsInfos: () => Info[] = (): Info[] => (
    new Array<Info>(
        new Info(
            "ASP.NET MVC", 
            "I spent nearly three years working with ASP.NET MVC and WPF as a fullstack developer. The work touched everything"
            + " from WPF applications to websites written using ASP.NET MVC.", 
            aspImg, 
            aspAlt, 
            aspTitle),
        new Info(
            "SQL Server", 
            "I spent nearly three years working with SQL Server and, partially, Entity Framework. This involved creating new relations " +
            " , managing a massive database and mapping rules for foreign keys, constraints and the likes.", 
            sqlImg, 
            sqlAlt, 
            sqlTitle),
        new Info(
            "React", 
            "I've spent several years making projects in React, using primarily Typescript. I've also worked with React professionally in several projects. I've published several websites in React, including this one.", 
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
            In 2020 I moved to Linkoping.
            I graduated in 2021 from Linkoping University with a bachelor's degree in Information Systems, 
            specializing in software development. I then begain working as a software developer for Sundahus until 2024,
             before I took a break.`,
            lifeImg,
            lifeAlt,
            lifeTitle
        ),
        new Info(
            "My interests", 
            `My main interest in terms of software development is most likely mobile app development.
            This is an area I would like to excel at in the future. Previously my main interests have been 
            in web development, using React and .NET. Apart from that I am a huge nerd also when it comes to
            history and geopolitics.`, 
            interestsImg,
            interestsAlt,
            interestsTitle
        ),
        new Info(
            "My personality", 
            `I'm a tad bit of an extravagant individual. But at the same time I'm someone who can often be fairly reserved.
            Friends and family would describe me first and foremost as deeply loyal, empathetic and incredibly determined and humble.
            I am, to my core, an introvert.`,
            personalityImg,
            personalityAlt,
            personalityTitle
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