import React from 'react';
import {Link} from 'react-scroll';
import "./Header.css";

const Header = () => {
    return (
        <header className={"header"}>
            <Link to={"app"} smooth={true}>
                <div className={"hopito-logo"}></div>
            </Link>
            <nav className={"navbar"}>
                <ul className={"nav-ul"}>
                    <li>Strona Główna</li>
                    <li>Newsletter</li>
                    <li>Kontakt</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;