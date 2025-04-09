import { useState } from 'react';
import styles from './Header.module.css';
import SideMenu from './SideMenu';

const Header = () => {
    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
      };
    return (
        <header>
            <nav className={styles.navbar}>
                <ul>
                    <li><a>Vedran Isak</a></li>
                    <li><a href="#section1">Github</a></li>
                    <li><a>LinkedIn</a></li>
                    <li><a>Contact me</a></li>
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