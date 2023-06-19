import React from 'react';

import {AppBar, Toolbar, Box, IconButton, Badge, Button} from '@mui/material';
import { Favorite, ShoppingBasket, AccountCircle } from '@mui/icons-material';

import Logo from '../../UI/Logo/Logo';

import './Header.scss'

const Header: React.FC = () => {
    return (
        <header id='header'>
            <AppBar position="static" sx={{ py: '5px', color: 'white'}}>
                <Toolbar sx={{ pl: '10px', justifyContent: 'space-between'}}>
                    <Logo imgWidth={55}/>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <Favorite />
                            </Badge>
                        </IconButton>
                        <IconButton size="large" color="inherit" >
                            <Badge badgeContent={17} color="error">
                                <ShoppingBasket />
                            </Badge>
                        </IconButton>
                        <Button
                            variant="outlined"
                            startIcon={<AccountCircle />}
                            size="large"
                            sx={{color: 'inherit'}}
                        >
                            LogIn
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </header>
    );
};

export default Header;
