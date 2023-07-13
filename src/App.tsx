import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import HomePage from './pages/HomePage/index';
import OrderPage from './pages/OrderPage/index';
import WishListPage from './pages/WishListPage';
import { AppRoutes } from './constants';

import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Router>
          <Routes>
            <Route path={AppRoutes.HOME_PAGE} element={<HomePage />} />
            <Route path={AppRoutes.ORDER} element={<OrderPage />} />
            <Route path={AppRoutes.WISH_LIST} element={<WishListPage />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
