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
            <div className={styles.container}>
                <div className={styles.headerContainer}>
                    <h2>My overall life</h2>
                </div>
                <div className={styles.textContainer}>
                    <h3>
                        I was born in 1998 in the lake town of Motala. 
                        I spent all my life there up until 2020, when I moved to Linkoping.
                        During my time in Motala I mainly focused on living a normal childhood. I was a
                        ferocious reader, played a lot of sports and developed an unusually high interest in 
                        geopolitics and history. 
                    </h3>
                    <h3>
                        In the summer of 2021, one year after moving to Linkoping, I graduated from Linkoping university with a Bachelor's degree in Information Systems
                        and I began working as a software developer shortly there after. I spent three years working as a software developer for Sundahus, a 
                        business that operated mainly in the construction industry.
                    </h3>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.headerContainer}>
                    <h2>My interests</h2>
                </div>
                <div className={styles.textContainer}>
                    <h3>My hobbies are PING PONG, NUDE MALE WRESTLING</h3>
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
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default About;