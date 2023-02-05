import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.css';

const NavBar = () => {
    return (
        <nav>
            <div className="navbar">
                <ul className="nav-list">
                    <li>
                        <NavLink
                            to={'/'}
                            style={({isActive}) => ({
                                fontWeight: isActive ? '900' : '500',
                            })}
                            className={'list-item'}>
                            {'Home'}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/about'}
                            style={({isActive}) => ({
                                fontWeight: isActive ? '900' : '500',
                            })}
                            className={'list-item'}>
                            {'About'}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/contact'}
                            style={({isActive}) => ({
                                fontWeight: isActive ? '900' : '500',
                            })}
                            className={'list-item'}>
                            {'Contact'}
                        </NavLink>
                    </li>
                </ul>
                <NavLink to={'/'} className={'title'}>
                    {'Landing'}
                </NavLink>
                <div className={'buy-button-container'}>
                    <NavLink
                        to={'/'}
                        title={'Buy Now'}
                        className={'buynow-button'}>
                        {'Buy Now'}
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
