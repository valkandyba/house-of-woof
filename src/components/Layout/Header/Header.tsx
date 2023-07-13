import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Badge, Box, Button, IconButton, Toolbar } from '@mui/material';
import { AccountCircle, Favorite, ShoppingBasket } from '@mui/icons-material';
import Logo from '../../UI/Logo/Logo';
import classes from './Header.module.scss';

export enum AppRoutes {
  HOME_PAGE = '/',
  WISH_LIST = '/wish-list',
  ORDER = '/order',
}

const Header: React.FC = () => {
  return (
    <AppBar position='static' id='header' className={classes.header}>
      <Toolbar className={classes.toolbar}>
        <Link to={AppRoutes.HOME_PAGE} className={classes['logo-link']}>
          <Logo imgWidth={55} />
        </Link>
        <Box className={classes.actions}>
          <Link to={AppRoutes.WISH_LIST} className={classes['nav-link']}>
            <IconButton size='large' color='inherit'>
              <Badge badgeContent={4} color='error'>
                <Favorite />
              </Badge>
            </IconButton>
          </Link>

          <Link to={AppRoutes.ORDER} className={classes['nav-link']}>
            <IconButton size='large' color='inherit'>
              <Badge badgeContent={17} color='error'>
                <ShoppingBasket />
              </Badge>
            </IconButton>
          </Link>
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
