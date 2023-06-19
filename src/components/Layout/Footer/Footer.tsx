import React from 'react';

import {Box, Button, Container, Typography} from "@mui/material";

import Logo from "../../UI/Logo/Logo";
import './Footer.scss'

const Footer: React.FC = () => {
    return (
        <footer id='footer'>
            <Container maxWidth="lg">
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <Logo imgWidth={35}/>
                    <Typography sx={{px: '1'}} component="span">
                        &copy; Copyright House of woof. All Rights Reserved
                    </Typography>
                    <Button variant="text" sx={{color: 'inherit'}}>
                        Contact us
                    </Button>
                </Box>
            </Container>
        </footer>
    )
}

export default Footer;