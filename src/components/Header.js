import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <ul>
                <li>
                    <NavLink to='/' exact={true} activeClassName='tab-active'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/stories' activeClassName='tab-active'>Stories</NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Header;