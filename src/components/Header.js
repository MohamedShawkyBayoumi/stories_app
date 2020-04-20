import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <ul>
                <li>
                    <Link to='/' className={'tab-active'}>Home</Link>
                </li>
                <li>
                    <Link to='/stories'>Stories</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;