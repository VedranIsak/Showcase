import Header from './components/Header';
import Top from './components/Top';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { GetProjects, GetProjectsHeader } from './helpers/ProjectHelper';
import ProjectType from './enums/ProjectType';



//Lägga till ackreditering & alt till Skills & Projects bilderna:
// https://icon-icons.com/icon/file-csharp/161322
// https://icon-icons.com/icon/angular-logo/145496
// https://icon-icons.com/icon/reactjs-logo/206693
// https://icon-icons.com/icon/prog-aspnet/50818
//Kolla in fontsizes
//Kolla in fontsizes för media queries (mobilvy, paddvy)
//Kolla in hur många färger man kan ha på en sida (färgpalett)
//Accessibility
//Lightmode och Darkmode
//Vart man använder h1,h2,h3,p etc etc
//Om samma width och height uppkommer på mer än ett ställe, sätt de som variabler
//Lägga till emailservice som skickar emails till vedranisak1998@gmail.com via "Contact" (som Zach har t.ex)
//HOSTA PÅ RIKTIGT OCH INTE VIA GITHUB
//Mitt namn ska vara domännamnet: a'la vedranisak.io t.ex

function App() {
  return (
    <>
      <Header />
      <Top />
      <Skills />
      <Projects 
        projectsHeader = {GetProjectsHeader(ProjectType.HobbyProject)}
        projectList={GetProjects(ProjectType.HobbyProject)}
        backgroundStyle={{
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 1) 10%, rgba(48, 25, 52, 1) 100%)'
        }}      
      />
      <Projects 
        projectsHeader = {GetProjectsHeader(ProjectType.CareerProject)} 
        projectList={GetProjects(ProjectType.CareerProject)}
        backgroundStyle={{
          background: 'linear-gradient(180deg, rgba(48, 25, 52, 1) 10%, rgba(0, 0, 0, 1) 100%)'
        }}      
      />
      <Footer />
    </>
  )
}

export default App
