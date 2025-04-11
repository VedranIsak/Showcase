import styles from './Skills.module.css';
import codeImg from '../assets/codeImg.webp';

const Skills = () => 
    (    
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <h2>My most prominent areas of knowledge</h2>
            </div>
            <div className={styles.mainContentContainer}>
                <div className={styles.contentContainer}>
                    <img 
                        src={codeImg} 
                        className={styles.img}
                    />
                    <div className={styles.textContainer}>
                        <h2>ASP.NET MVC</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, sint hic voluptatum ducimus, tempore, itaque animi molestiae assumenda maiores nobis ab! Eligendi tenetur quidem nesciunt ex excepturi, voluptatibus in sed.
                        </p>
                    </div>
                </div>
                <div className={styles.contentContainer}>
                    <img 
                        src={codeImg} 
                        className={styles.img}
                    />
                    <div className={styles.textContainer}>
                        <h2>React</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto delectus corporis nulla alias unde laudantium, sequi error, corrupti excepturi quisquam, eius pariatur. Quidem expedita enim itaque dolorum dolores recusandae voluptate?</p>
                    </div>
                </div>
                <div className={styles.contentContainer}>
                    <img 
                        src={codeImg} 
                        className={styles.img}
                    />
                    <div className={styles.textContainer}>
                        <h2>SQL Server</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores aliquam voluptate harum unde sapiente alias consequatur doloremque molestiae. Similique libero numquam esse aspernatur velit iusto sunt ipsa deleniti architecto voluptas.</p>
                    </div>
                </div>
            </div>
        </div>
    )

export default Skills;