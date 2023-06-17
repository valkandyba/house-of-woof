import React from 'react';

import HeaderNavItem from "./HeaderNavItem/HeaderNavItem";

import './HeaderNav.scss'

interface NavigationProps {
    activeItem: string;
}

const HeaderNav: React.FC<NavigationProps> = ({ activeItem }) => {
    const menuItems = ['Home', 'Shop Now'];

    return (
        <nav>
            <ul>
                {menuItems.map((itemName) => (
                    <HeaderNavItem
                        key={itemName}
                        itemName={itemName}
                        isActive={activeItem === itemName}
                    />
                ))}
            </ul>
        </nav>
    )
}

export default HeaderNav;