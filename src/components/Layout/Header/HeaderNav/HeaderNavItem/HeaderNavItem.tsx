import React from 'react';

import './HeaderNavItem.scss'

interface NavItemProps {
    itemName: string;
    isActive: boolean;
}

const HeaderNavItem: React.FC<NavItemProps> = ({ itemName, isActive }) => {
    return (
        <li>
            <button
                className={isActive ? 'active' : ''}
            >
                {itemName}
            </button>
        </li>
    )
}

export default HeaderNavItem;