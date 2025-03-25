import styles from './Home.module.css';

const Home = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <div className={styles.subSubContainer}>
                    <h2>My education</h2>
                    <p className={styles.breadText}>
                        I have a Bachelor's degree from Linköping University in Information Systems (Systemvetenskap) 
                        with a focus on software development.
                        I've also gained a lot of experience and knowledge through self study, particularly in React 
                        and frontend development.
                    </p>
                </div>
                <img 
                    className={styles.imgContainer} 
                    src='../../src/assets/profileImg.jpg'
                    alt="Profile image of Vedran"
                 />
            </div>
            <div className={styles.subContainer}>
                <div className={styles.subSubContainer}>
                    <h2>My work</h2>
                    <p className={styles.breadText}>
                        I've worked for three years as a fullstack developer for Sundahus, an iBinder company. 
                        My work mainly consisted of doing maintenance and project style development in ASP.NET and React.
                    </p>
                    <p className={styles.breadText}>
                        The job also required working with Javascript in general, jQuery, React, SQL Server 
                        and doing server side programming in .NET. We used Git together with Azure and Github for 
                        version control and a lot of work was done (project style) with members of other companies
                        in the iBinder organisation.
                    </p>
                    <p className={styles.breadText}>
                        Pair programming was done regularly as well as Daily Scrum meetings and there was in general 
                        a high level of constant teamwork. Both with colleagues, management and clients.
                    </p>
                </div>
            </div>
            <div className={styles.subContainer}>
                <div className={styles.subSubContainer}>
                    <h2>My interests</h2>
                    <p className={styles.breadText}>
                        In my spare time I like to learn as much frontend development as possible, through React. 
                        I also enjoy studying broad topics in software development such as API:s, software security 
                        and database design.
                    </p>
                </div>
                <img 
                    className={styles.imgContainer} 
                    src='../../src/assets/codeImg.webp'
                    alt="Picture of code"
                    title="Image by Antonio Batinich from pexels https://www.pexels.com/photo/black-screen-with-code-4164418/" 
                 />
            </div>
        </div>
        </>
    )
}

export default Home;