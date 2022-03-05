import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <ul>
                    <NavLink to="/"> <li>Home</li> </NavLink>
                    <NavLink to="/favorites"> <li>Favorites</li> </NavLink>
                </ul>
            </nav>
            <h1>Music</h1>
        </div>
    );
};

export default Header;