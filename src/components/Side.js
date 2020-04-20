import React from 'react';
import { Link } from 'react-router-dom';

function Side() {
    return (
        <aside>
            <div className="side-head-links">
                <Link to='/profile'>Profile</Link>
                <Link to='/'>Logout</Link>
            </div>
            <div className="avatar-wrapper">
                <div className="avatar-img">
                    <div 
                        style={{
                            background: `url('${require('../assets/avatar.jpg')}') no-repeat center center`
                        }}
                    />
                </div>
            </div>
            <h3 className="user-name">Mohamed Shawky</h3>
            <h4 className="user-job">Front End Web Developer</h4>
        </aside>
    )
}

export default Side;