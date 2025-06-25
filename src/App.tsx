import Header from './components/generalPageComponents/Header';
import Top from './components/pageComponents/Top';
import Projects from './components/pageComponents/Projects';
import Footer from './components/generalPageComponents/Footer';
import { GetProjects, GetProjectsHeader } from './helpers/ProjectHelper';
import ProjectType from './enums/ProjectType';
import FadeInSection from './components/designComponents/FadeInSection';
import Infos from './components/pageComponents/Infos';
import { GetInfos, GetInfosHeader } from './helpers/InfoHelper';
import InfoType from './enums/InfoType';
import { JSX } from 'react';
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
