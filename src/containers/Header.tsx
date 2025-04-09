import { useState } from 'react';
import styles from './Header.module.css';
import SideMenu from './SideMenu';
import linkedInLogo from "../assets/linkedInLogo.webp";
import githubLogo from "../assets/githubLogo.png";
import gmailLogo from "../assets/gmailLogo.png";

const Header = () => {
    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
      };
    return (
        <header>
            <nav className={styles.navbar}>
                <ul>
                    <li><a className={styles.textAnchor}>Vedran Isak</a></li>
                    <li>
                        <a 
                            target='_blank'
                            href="https://se.linkedin.com/in/vedran-isak-3a0a49202"
                            style={{
                                width: "70px",
                                height: "70px",
                                display: "flex", 
                            }}
                        >
                            <img
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                                src={githubLogo}
                                alt="Link to Vedran's LinkedIn page"
                                title="Image by Amit Jain from icon-icons https://icon-icons.com/users/fQ0EuGDhi5xJAtEEISMXx/icon-sets/" 
                            />    
                        </a>               
                    </li>                    
                    <li>
                        <a 
                            target='_blank'
                            href="https://se.linkedin.com/in/vedran-isak-3a0a49202"
                            style={{
                                width: "70px",
                                height: "70px",
                                display: "flex", 
                            }}
                        >
                            <img
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                                src={linkedInLogo}
                                alt="Link to Vedran's LinkedIn page"
                                title="Image by Amit Jain from icon-icons https://icon-icons.com/users/fQ0EuGDhi5xJAtEEISMXx/icon-sets/" 
                            />    
                        </a>               
                    </li>
                    <li>
                        <a 
                            target='_blank'
                            href="https://se.linkedin.com/in/vedran-isak-3a0a49202"
                            style={{
                                width: "70px",
                                height: "70px",
                                display: "flex", 
                            }}
                        >
                            <img
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                                src={gmailLogo}
                                alt="Link to Vedran's LinkedIn page"
                                title="Image by Amit Jain from icon-icons https://icon-icons.com/users/fQ0EuGDhi5xJAtEEISMXx/icon-sets/" 
                            />    
                        </a>                           
                    </li>
                </ul>
                {/* <h2 
                    className={styles.menuButton}
                    onClick={() => { toggleMenu(); }}
                >
                    + Menu
                </h2> */}
                {/* <SideMenu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} /> */}
            </nav>
        </header>
    )
}

export default Header;