import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Badge, Box, Button, IconButton, Toolbar } from '@mui/material';
import { AccountCircle, Favorite, ShoppingBasket } from '@mui/icons-material';
import CartContext from '../../../store/Cart/cart-context';
import FavoriteContext from '../../../store/Favorite/favorite-context';
import Logo from '../../UI/Logo/Logo';
import classes from './Header.module.scss';
import { AppRoutes } from '../../../constants';
import AddProductDialog from '../../AddProductDialog/AddProductDialog';

const Header: React.FC = () => {
  const { numberOfProductItems } = useContext(CartContext);
  const { numberOfFavoriteProductItems } = useContext(FavoriteContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <AppBar position='fixed' id='header' className={classes.header}>
      <Toolbar className={classes.toolbar}>
        <Logo imgWidth={55} route={AppRoutes.HOME_PAGE} />
        <Box className={classes.actions}>
          <Link to={AppRoutes.WISH_LIST} className={classes['nav-link']}>
            <IconButton size='large' color='inherit'>
              <Badge badgeContent={numberOfFavoriteProductItems} color='error'>
                <Favorite />
              </Badge>
            </IconButton>
          </Link>

          <Link to={AppRoutes.ORDER} className={classes['nav-link']}>
            <IconButton size='large' color='inherit'>
              <Badge badgeContent={numberOfProductItems} color='error'>
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
          <Button variant='text' color='inherit' onClick={handleModalOpen}>
            Add Product
          </Button>
          {isModalOpen && (
            <AddProductDialog open={isModalOpen} onClose={handleModalClose} />
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
