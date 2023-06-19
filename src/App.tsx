import React from 'react';
import { ThemeProvider } from "@mui/material";
import theme from './theme/theme'
import HomePage from './pages/HomePage/index';
import './App.css';

function App() {
  return (
      <ThemeProvider theme={theme}>
          <div className='App'>
              <HomePage />
          </div>
      </ThemeProvider>
  );
}

export default App;
