import Header from './components/Header';
import Top from './components/Top';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { GetProjects, GetProjectsHeader } from './helpers/ProjectHelper';
import ProjectType from './enums/ProjectType';
import About from './components/About';
import FadeInSection from './components/FadeInSection';
import Infos from './components/Infos';

function App() {
  return (
    <>
      <Header />
      <Top />
      <FadeInSection>      
        <Infos 
          infosHeader=''
          infoList=[]
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
        <About />
      </FadeInSection>
      <Footer />
    </>
  )
}

export default App;
