import React from 'react';
import './Footer.css';
import logo from './Logo.png'; // Your logo file

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <img
                        src={logo}
                        alt="Shelf Sense Logo"
                        className="footer-logo"
                    />
                    <span className="footer-title">Shelf Sense</span>
                </div>
                <ul className="footer-links">
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#privacy">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#licensing">Licensing</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="footer-divider" />
            <div className="footer-copyright">
                © {new Date().getFullYear()} Shelf Sense™
            </div>
        </footer>
    );
}

export default Footer;
