import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <header className="header">
            <div className="container">
            <Link to={'/'}>
                <p className="header-text">To Do List</p>
                </Link>
            </div>
        </header>
    )
}
export default Header;