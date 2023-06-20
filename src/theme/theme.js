import {createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#9ccfe2'
        }
    },
    typography: {
        fontFamily: 'Quicksand',
        allVariants: {
            color: '#2f3539'
        }
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