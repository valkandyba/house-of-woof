import { createTheme } from '@mui/material';

const white = '#ffffff';
const lightBlue = '#9ccfe2';
const mediumGray = '#2f3539';

const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue,
    },
  },
  typography: {
    fontFamily: 'Quicksand',
    allVariants: {
      color: mediumGray,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: white,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: white,
        },
      },
    },
    MuiTableHead: {
      defaultProps: {
        sx: {
          backgroundColor: theme => theme.palette.primary.main,
        },
      },
      styleOverrides: {
        root: {
          '& .MuiTableCell-root': {
            color: white,
            fontWeight: 'bold',
            fontSize: '1.1rem',
          },
        },
      },
    },
  },
});

export default theme;
