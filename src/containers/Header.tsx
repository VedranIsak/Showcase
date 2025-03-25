import styles from './Header.module.css';

const Header = () => {
    return (
        <header>
            <nav className={styles.navbar}>
                <h1 className={styles.header}>Vedran Isak</h1>
                <h2 className={styles.menuButton}>+ Menu</h2>
            </nav>
        </header>
    )
}

export default Header;