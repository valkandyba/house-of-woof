import React from "react";

import Logo from "../../../assets/logo-house-of-woof.png";

const HeaderLogo: React.FC = () => {
  return (
    <div>
      <a href="#">
        <img src={Logo} alt="Logo" />
        <span>House of Woof</span>
      </a>
    </div>
  );
};

export default HeaderLogo;
