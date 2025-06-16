import Header from './components/Header';
import Top from './components/Top';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { GetProjects, GetProjectsHeader } from './helpers/ProjectHelper';
import ProjectType from './enums/ProjectType';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <Top />
      <Skills />
      <Projects 
        projectsHeader = {GetProjectsHeader(ProjectType.HobbyProject)}
        projectList={GetProjects(ProjectType.HobbyProject)}
      />
      <Projects 
        projectsHeader = {GetProjectsHeader(ProjectType.CareerProject)} 
        projectList={GetProjects(ProjectType.CareerProject)}
      />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
