import {createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#9ccfe2'
        }
    },
    typography: {
        fontFamily: 'Quicksand'
    },

    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    color: "#fff",
                },
            },
        },
    }
})

export default theme;