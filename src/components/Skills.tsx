import styles from './Skills.module.css';
import aspImg from '../assets/skills/aspDotNet.png';
import sqlImg from '../assets/skills/sqlServer.png';
import reactImg from '../assets/skills/react.png';
import './Skills.css';

const Skills = () => 
    (    
        <div className={styles.container} data-id="skills-container">
            <div className={styles.headerContainer}>
                <h2>My most prominent areas of knowledge</h2>
            </div>
            <div data-id="skills-main-content-container" className={styles.mainContentContainer}>
                <div data-id="skills-content-container" className={styles.contentContainer}>
                    <img 
                        alt="AI Generated image of a computer with ASP.NET Code"
                        title="AI Generated image of a computer with ASP.NET Code"
                        src={aspImg} 
                        className={styles.img}
                    />
                    <div className={styles.textContainer}>
                        <h2>ASP.NET MVC</h2>
                        <h3>
                            I spent nearly three years working with ASP.NET MVC and WPF as a fullstack developer.
                        </h3>
                    </div>
                </div>
                <div data-id="skills-content-container" className={styles.contentContainer}>
                    <img 
                        alt="AI Generated image of a computer with React Code"
                        title="AI Generated image of a computer with React Code"                    
                        src={reactImg} 
                        className={styles.img}
                    />
                    <div className={styles.textContainer}>
                        <h2>React</h2>
                        <h3>
                            I've spent several years making projects in React. I've also worked with React professionally.
                        </h3>
                    </div>
                </div>
                <div data-id="skills-content-container" className={styles.contentContainer}>
                    <img 
                        alt="AI Generated image of a computer with SQL Server Code"
                        title="AI Generated image of a computer with SQL Server Code"                    
                        src={sqlImg} 
                        className={styles.img}
                    />
                    <div className={styles.textContainer}>
                        <h2>SQL Server</h2>
                        <h3>
                            I spent nearly three years working with SQL Server and, partially, EF.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )

export default Skills;