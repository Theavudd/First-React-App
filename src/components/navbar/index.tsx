import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <div className="navbar">
                <ul className="nav-list">
                    <li>
                        <NavLink to={'/'}>{'Home'}</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'}>{'About'}</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/contact'}>{'Contact'}</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
