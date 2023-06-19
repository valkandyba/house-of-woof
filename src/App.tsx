import React from 'react';
import { createMuiTheme, ThemeProvider } from "@mui/material";

import './App.css';

import HomePage from './pages/HomePage/index';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#9ccfe2'
        }
    },
    typography: {
        fontFamily: 'Quicksand'
    }
})

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
