import Header from './containers/Header';
import Top from './containers/Top';
import linkedInLogo from "./assets/linkedInLogo.webp";
import Projects from './containers/Projects';

//Använd denna som inspiration istället! Fast med lila färger istället för gröna: https://www.zachjordan.io/
//Kolla in fontsizes
//Kolla in fontsizes för media queries (mobilvy, paddvy)
//Kolla in hur många färger man kan ha på en sida (färgpalett)
//Accessibility
//Lightmode och Darkmode
//Vart man använder h1,h2,h3,p etc etc
//Om samma width och height uppkommer på mer än ett ställe, sätt de som variabler
//Behövs stylingen på logon brytas ur? För MQ anpassning?
//Lägga till emailservice som skickar emails till vedranisak1998@gmail.com via "Contact" (som Zach har t.ex)
//HOSTA PÅ RIKTIGT OCH INTE VIA GITHUB
//Mitt namn ska vara domännamnet: a'la vedranisak.io t.ex

function App() {
  return (
    <>
    <Header />
    <Top />
    {/* <Projects /> */}
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
        animation: "imgSpin 20s linear infinite",
        zIndex: "11"
      }}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          animation: "imgSpin 20s linear infinite"
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
