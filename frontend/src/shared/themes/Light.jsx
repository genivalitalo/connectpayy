import { createTheme } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import '@fontsource/poppins/500.css'

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: deepOrange[500],
            dark: deepOrange[600],
            light: deepOrange[400],
            contrastText: '#ffffff'
        },
        background: {
            default: '#f7f7f7',
            paper: '#ffffff',
        },
            },
    typography: {
        fontFamily:'poppins',
    },
});