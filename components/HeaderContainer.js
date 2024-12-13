import React from 'react';
import styles from './HeaderContainer.module.css';

function HeaderContainer() {
    return (
        <div className={styles.headerContainer}>
            <img
                className={styles.headerImage}
                src="https://raw.githubusercontent.com/kimberlycoston/ShelfSenseWebsite/main/Website_Title2.png"
                alt="Shelf Sense Logo"
            />
            <p className={styles.tagline}>
                Bringing clinical efficiency to supply chain management
            </p>
            <div className={styles.triangleBg}></div>
        </div>
    );
}

export default HeaderContainer;
