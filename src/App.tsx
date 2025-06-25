import Header from './components/Header';
import Top from './components/Top';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { GetProjects, GetProjectsHeader } from './helpers/ProjectHelper';
import ProjectType from './enums/ProjectType';
import FadeInSection from './components/FadeInSection';
import Infos from './components/Infos';
import { GetInfos, GetInfosHeader } from './helpers/InfoHelper';
import InfoType from './enums/InfoType';
import { JSX } from 'react';
import CircleBackground from './components/CircleBackground';
import CircleBackgroundSide from './enums/CircleBackgroundSide';

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Top circleBackgroundSide={CircleBackgroundSide.left} />
      <FadeInSection>      
        <Infos
          infosHeader={GetInfosHeader(InfoType.Skills)}
          infoList={GetInfos(InfoType.Skills)}
          circleBackgroundSide={CircleBackgroundSide.right}
         />
      </FadeInSection>
      <FadeInSection>
        <Projects 
          projectsHeader = {GetProjectsHeader(ProjectType.HobbyProject)}
          projectList={GetProjects(ProjectType.HobbyProject)}
          circleBackgroundSide={CircleBackgroundSide.left}
        />
      </FadeInSection>
      <FadeInSection>
        <Projects 
          projectsHeader = {GetProjectsHeader(ProjectType.CareerProject)} 
          projectList={GetProjects(ProjectType.CareerProject)}
          circleBackgroundSide={CircleBackgroundSide.right}
        />
      </FadeInSection>
      <FadeInSection>
        <Infos
          infosHeader={GetInfosHeader(InfoType.About)}
          infoList={GetInfos(InfoType.About)}
          circleBackgroundSide={CircleBackgroundSide.left}
        />
      </FadeInSection>
      <Footer />
    </>
  )
}

export default App;
