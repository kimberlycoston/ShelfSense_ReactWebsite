import React, { useState } from 'react';
import styles from './Header.module.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggles the menu state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Closes the menu
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                {/* Menu button for small screens */}
                <button className={styles.menuButton} onClick={toggleMenu}>
                    ☰
                </button>

                {/* Navigation links */}
                <ul className={`${styles.navLinks} ${isMenuOpen ? styles.show : ''}`}>
                    <li><a className={styles.navLink} href="#home" onClick={closeMenu}>Home</a></li>
                    <li><a className={styles.navLink} href="#about" onClick={closeMenu}>About</a></li>
                    <li><a className={styles.navLink} href="#option2" onClick={closeMenu}>Option2</a></li>
                    <li><a className={styles.navLink} href="#option3" onClick={closeMenu}>Option3</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
