import React from 'react';

import Logo from '../../../../assets/logo-house-of-woof.png';

import './HeaderLogo.scss';

const HeaderLogo: React.FC = () => {
  return (
    <div className="header-logo">
      <a href='#'>
        <img src={Logo} alt='Logo' />
      </a>
    </div>
  );
};

export default HeaderLogo;
