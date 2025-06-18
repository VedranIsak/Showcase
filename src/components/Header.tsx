import { useCallback, useState } from 'react';
import styles from './Header.module.css';
import linkedInLogo from "../assets/header/linkedInLogo.webp";
import githubLogo from "../assets/header/githubLogo.png";
import emailLogo from "../assets/header/emailLogo.png";
import downArrowsLogo from "../assets/header/downArrows.png";

const Header = () => {
    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(true);
    const toggleMenu = (): void => {
        setIsMenuVisible(isMenuVisible => !isMenuVisible);
    };

    const smoothScrollTo = useCallback((targetId: string) => {
        const start: number = window.scrollY;
        const end: number = targetId === "top"
            ? 0
            : (() => {
                const target = document.getElementById(targetId);
                if (!target) return start; // fallback to current scroll
                return target.getBoundingClientRect().top + start;
            })();

        const distance: number = end - start;
        const startTime: number = performance.now();
        const duration: number = 1000;

        const easeInOutQuad = (t: number): number => {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        };

        const animateScroll = (currentTime: number): void => {
            const elapsed: number = currentTime - startTime;
            const progress: number = Math.min(elapsed / duration, 1);

            window.scrollTo(0, start + distance * easeInOutQuad(progress));

            if (progress < 1) {
            requestAnimationFrame(animateScroll);
            }
        };
        requestAnimationFrame(animateScroll);
    }, []);


    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <ul className={styles.mainList}
                    style={{
                        transition: 'transform 1s ease, opacity 1s ease',
                        transform: !isMenuVisible ? 'translateY(-100%)' : 'translateY(0)',
                        opacity: !isMenuVisible ? 0 : 1,
                    }}
                >
                    <li className={styles.textAnchor}>
                        <a 
                            onClick={() => { if(isMenuVisible) smoothScrollTo("top") }}
                            style={{
                                cursor: isMenuVisible ? 'pointer' : 'default'
                            }}
                        >
                            VI
                        </a>
                    </li>
                    <li>
                        <a 
                            target='_blank'
                            href="https://github.com/VedranIsak"
                            style={{
                                cursor: isMenuVisible ? 'pointer' : 'default'
                            }}
                        >
                            <img
                                src={githubLogo}
                                alt="Link to Vedran's Github page"
                                title="Image by nerdy besky from icon-icons https://icon-icons.com/users/CWANEwLNzn4fGOJ95Eiug/icon-sets/" 
                            />    
                        </a>               
                    </li>                    
                    <li>
                        <a 
                            target='_blank' 
                            href= "https://se.linkedin.com/in/vedran-isak-3a0a49202"
                            style={{
                                cursor: isMenuVisible ? 'pointer' : 'default'
                            }}
                        >
                            <img
                                src={linkedInLogo}
                                alt="Link to Vedran's LinkedIn page"
                                title="Image by Amit Jain from icon-icons https://icon-icons.com/users/fQ0EuGDhi5xJAtEEISMXx/icon-sets/" 
                            />    
                        </a>               
                    </li>
                    <li>
                        <a 
                            onClick={() => { if(isMenuVisible) smoothScrollTo("contactContainer") }}
                            style={{
                                cursor: isMenuVisible ? 'pointer' : 'default'
                            }}
                        >
                            <img
                                src={emailLogo}
                                alt="Link to email contact form"
                                title="Image by shunesburg69 from openclipart https://openclipart.org/detail/295555/red-mail-icon" 
                            />    
                        </a>                           
                    </li>
                    <li className={styles.textAnchor}>
                        <a 
                            onClick={() => { if(isMenuVisible) toggleMenu()}}
                            style={{
                                cursor: isMenuVisible ? 'pointer' : 'default'
                            }}
                        >
                            X
                        </a>
                    </li>
                </ul>
                <ul
                    style={{
                        position: 'absolute',
                        transition: `transform 1s ease, opacity 1s ease`,
                        transform: isMenuVisible ? 'translateY(100%)' : 'translateY(0)',
                        opacity: isMenuVisible ? 0 : 1,
                    }}
                >       
                    <a 
                        className={styles.textAnchor} 
                        onClick={() => { if(!isMenuVisible) toggleMenu(); }}
                        style={{
                            cursor: !isMenuVisible ? 'pointer' : 'default'
                        }}
                    >
                        <img 
                            src={downArrowsLogo}
                            title='AI generated image of two arrows pointing down'
                            alt='Down arrow menu button'
                        />
                    </a>
                </ul>
            </nav>
        </header>
    )
}

export default Header;