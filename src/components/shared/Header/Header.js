import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <header className="header">
            <div className="container">
                <p className="header-text">To Do List</p>
            </div>
        </header>
    )
}
export default Header;