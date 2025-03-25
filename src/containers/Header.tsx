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
                <h1 className={styles.header}>Vedran Isak</h1>
                <h2 
                    className={styles.menuButton}
                    onClick={() => { toggleMenu(); }}
                >
                    + Menu
                </h2>
                <SideMenu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} />
            </nav>
        </header>
    )
}

export default Header;