import Header from './containers/Header';
import Top from './containers/Top';
import Projects from './containers/Projects';

//Lägga till alt och ackreditering till gmail & github bilderna.
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
    </>
  )
}

export default App
