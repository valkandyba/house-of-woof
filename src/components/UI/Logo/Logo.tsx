import React from 'react';
import {Typography} from "@mui/material";

import LogoImg from '../../../assets/logo-house-of-woof.svg';

import './Logo.scss';

type LogoProps = {
    imgWidth: number;
};

const Logo: React.FC<LogoProps> = (imgWidth) => {
    return (
        <div className="logo">
            <a className="logo__link" href='#'>
                <img
                    style={{width: imgWidth + 'px'}}
                    className="logo__img"
                    src={LogoImg}
                    alt='Logo'
                />
                <Typography
                    sx={{
                        lineHeight: 'inherit',
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}
                    variant="h6"
                    component="span">
                    House <br/> of <br/>  Woof!
                </Typography>
            </a>
        </div>
    );
};

export default Logo;
