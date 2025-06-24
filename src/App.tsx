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

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Top />
      <FadeInSection>      
        <Infos
          infosHeader={GetInfosHeader(InfoType.Skills)}
          infoList={GetInfos(InfoType.Skills)}
         />
      </FadeInSection>
      <FadeInSection>
        <Projects 
          projectsHeader = {GetProjectsHeader(ProjectType.HobbyProject)}
          projectList={GetProjects(ProjectType.HobbyProject)}
        />
      </FadeInSection>
      <FadeInSection>
        <Projects 
          projectsHeader = {GetProjectsHeader(ProjectType.CareerProject)} 
          projectList={GetProjects(ProjectType.CareerProject)}
        />
      </FadeInSection>
      <FadeInSection>
        <Infos
          infosHeader={GetInfosHeader(InfoType.About)}
          infoList={GetInfos(InfoType.About)}
        />
      </FadeInSection>
      <Footer />
    </>
  )
}

export default App;
