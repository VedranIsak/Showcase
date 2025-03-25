import Header from './containers/Header';
import Home from './containers/Home';
import linkedInLogo from "./assets/linkedInLogo.webp";
import Projects from './containers/Projects';

//Use this as inspiration? https://www.shujahumayun.com/
//Kolla in fontsizes
//Kolla in fontsizes för media queries (mobilvy, paddvy)
//Kolla in hur många färger man kan ha på en sida (färgpalett)
//Accessibility
//Lightmode och Darkmode
//Vart man använder h1,h2,h3,p etc etc
//Om samma width och height uppkommer på mer än ett ställe, sätt de som variabler
//Behövs stylingen på logon brytas ur? För MQ anpassning?

function App() {
  return (
    <>
    <Header />
    <Home />
    <Projects />
    <a 
      target='_blank'
      href="https://se.linkedin.com/in/vedran-isak-3a0a49202"
      style={{
        position: "absolute",
        width: "50px",
        height: "50px",
        right: "25px",
        bottom: "25px",
        display: "inline-block", 
        animation: "imgSpin 10s linear infinite"
      }}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          animation: "imgSpin 10s linear infinite"
        }}
        src={linkedInLogo}
        alt="Link to Vedran's LinkedIn page"
        title="Image by Amit Jain from icon-icons https://icon-icons.com/users/fQ0EuGDhi5xJAtEEISMXx/icon-sets/" 
       />
    </a>
    </>
  )
}

export default App
