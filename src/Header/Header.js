import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <header className={"header"}>
            <a href="#">
                <div className={"hopito-logo"}></div>
            </a>
            <nav className={"navbar"}>
                <ul className={"nav-ul"}>
                    <li>Strona Główna</li>
                    <li>Oferta</li>
                    <li>Newsletter</li>
                    <li>Kontakt</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;