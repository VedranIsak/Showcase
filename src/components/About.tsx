import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.pageHeader}>
                <h2>
                    <span className='titleWord titleWord1'>Some </span>
                    <span className='titleWord titleWord2'>personal </span>
                    <span className='titleWord titleWord3'>facts</span>
                </h2>
            </div>
            <div className={styles.contentContainer}>
                            <div className={styles.container}>
                <div className={styles.headerContainer}>
                    <h2>My overall life</h2>
                </div>
                <div className={styles.textContainer}>
                    <h3>
                        I was born in 1998 in the lake town of Motala. 
                        I spent all my life there up until 2020, when I moved to Linkoping.
                        I graduated in 2021 from Linkoping University with a bachelor's degree in Information Systems, 
                        specializing in software development. I started shortly thereafter working as a software developer for Sundahus.
                        I did this for three years, until 2024, before I took a break.
                    </h3>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.headerContainer}>
                    <h2>My interests</h2>
                </div>
                <div className={styles.textContainer}>
                    <h3>
                        My main interest in terms of software development is most likely mobile app development.
                        This is an area I would like to excel at in the future. Previously my main interests have been 
                        in web development, using React and .NET. Apart from that I am a huge nerd also when it comes to
                        history and geopolitics.
                    </h3>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.headerContainer}>
                    <h2>My personality</h2>
                </div>
                <div className={styles.textContainer}>
                    <h3>
                        I'm a tad bit of an extravagant individual. But at the same time I'm someone who can often be fairly reserved.
                        Friends and family would describe me first and foremost as deeply loyal, empathetic and incredibly determined.
                        I am, to my core, an introvert. But at the same time I enjoy spending time with people, but preferably in chunks.
                    </h3>
                </div>
            </div>
            </div>
        </div>
    )
}

export default About;