import Header from './components/Header';
import Top from './components/Top';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { GetProjects, GetProjectsHeader } from './helpers/ProjectHelper';
import ProjectType from './enums/ProjectType';
import Contact from './components/Contact';




//Kolla in img title & alt. Eventuellt mer om det behövs.
//Kolla in fontsizes
//Kolla in fontsizes för media queries (mobilvy, paddvy)
//Kolla in hur många färger man kan ha på en sida (färgpalett)
//Vart man använder h1,h2,h3,p etc etc
//Om samma width och height uppkommer på mer än ett ställe, sätt de som variabler
//Lägga till emailservice som skickar emails till vedranisak1998@gmail.com via "Contact" (som Zach har t.ex)
//HOSTA PÅ RIKTIGT OCH INTE VIA GITHUB. Mitt namn ska vara domännamnet: a'la vedranisak.io t.ex

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

export default App
