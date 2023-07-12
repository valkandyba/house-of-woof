import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import HomePage from './pages/HomePage/index';
import OrderPage from './pages/OrderPage/index';
import WishListPage from './pages/WishListPage';

import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/order' element={<OrderPage />} />
            <Route path='/wish-list' element={<WishListPage />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
