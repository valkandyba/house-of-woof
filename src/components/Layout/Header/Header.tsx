import React from 'react';
import { AppBar, Badge, Box, Button, IconButton, Toolbar } from '@mui/material';
import { AccountCircle, Favorite, ShoppingBasket } from '@mui/icons-material';
import Logo from '../../UI/Logo/Logo';
import classes from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <AppBar position='static' id='header' className={classes.header}>
      <Toolbar className={classes.toolbar}>
        <Logo imgWidth={55} />
        <Box className={classes.actions}>
          <IconButton size='large' color='inherit'>
            <Badge badgeContent={4} color='error'>
              <Favorite />
            </Badge>
          </IconButton>

          <IconButton size='large' color='inherit'>
            <Badge badgeContent={17} color='error'>
              <ShoppingBasket />
            </Badge>
          </IconButton>
          <Button
            variant='outlined'
            startIcon={<AccountCircle />}
            size='large'
            sx={{ color: 'inherit' }}
          >
            LogIn
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
