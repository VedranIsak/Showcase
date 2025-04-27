import { useCallback, useState } from 'react';
import styles from './Header.module.css';
import SideMenu from './SideMenu';
import linkedInLogo from "../assets/header/linkedInLogo.webp";
import githubLogo from "../assets/header/githubLogo.png";
import gmailLogo from "../assets/header/gmailLogo.png";

const Header = () => {
    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
      };

    const smoothScrollTo = useCallback((targetId: string, duration: number) => {
        const target = document.getElementById(targetId);
        if (!target) return;
    
        const start = window.scrollY;
        const end = target.getBoundingClientRect().top + start;
        const distance = end - start;
        const startTime = performance.now();
    
        const animateScroll = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
    
            window.scrollTo(0, start + distance * easeInOutQuad(progress));
    
            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        };
    
        const easeInOutQuad = (t: number) => {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        };
    
        requestAnimationFrame(animateScroll);
    }, []);
    
      const scrollToContact = () => {
        smoothScrollTo("contactContainer", 1000); // scroll over 1000ms
      };
        
    return (
        <header className={styles.headerAnimate}>
            <nav className={styles.navbar}>
                <ul>
                    <li className={styles.textAnchor}>
                        <a>VI</a>
                    </li>
                    <li>
                        <a 
                            target='_blank'
                            href="https://github.com/VedranIsak"
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
                                alt="Link to Vedran's Github page"
                                title="Image by nerdy besky from icon-icons https://icon-icons.com/users/CWANEwLNzn4fGOJ95Eiug/icon-sets/" 
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
                        <button
                            style={{
                                width: "70px",
                                height: "70px",
                                display: "flex", 
                            }}
                            onClick={scrollToContact}
                        >
                            <img
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                                src={gmailLogo}
                                alt="Link to gmail contact form"
                                title="Image by Amogh Design from icon-icons https://icon-icons.com/users/0aGxNzwwMBBe5UeCBGjLO/icon-sets/" 
                            />    
                        </button>                           
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