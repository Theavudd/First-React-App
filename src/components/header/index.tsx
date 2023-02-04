import React from 'react';
import {NavLink} from 'react-router-dom';
import NavBar from '../navbar';

const Header = () => {
    return (
        <header>
            <NavLink to={'/'}>
                <h1>{'Landing'}</h1>
            </NavLink>
            <NavBar />
        </header>
    );
};

export default Header;
