import React from 'react';

import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNav from "./HeaderNav/HeaderNav";

import './Header.scss'

const Header: React.FC = () => {
    return (
        <header id='header'>
            <div className="container">
                <HeaderLogo/>
                <HeaderNav activeItem="1"/>
            </div>
        </header>
    );
};

export default Header;
