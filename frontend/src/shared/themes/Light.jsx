import { createTheme } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: deepOrange[500],
            dark: deepOrange[600],
            light: deepOrange[400],
            contrastText: '#ffffff'
        },
        background: {
            default: '#ffffff',
            paper: '#F7F7F7',
        }
    }
});