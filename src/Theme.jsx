import { createTheme } from "@mui/material";


// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)


const lightTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: 'hsl(0, 0%, 98%)',
        },
        secondary: {
            main: '#f50057',
        },
        nav: {
            main: "hsl(0, 0%, 100%)"
        },
        text: {
            main: " hsl(200, 15%, 8%)"
        }
    },
});

const darkTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: 'hsl(207, 26%, 17%)',
        },
        secondary: {
            main: '#f50057',
        },
        button: {
            main: ""
        },
        nav: {
            main: "hsl(209, 23%, 22%)"
        },
        text: {
            main: "hsl(0, 0%, 100%)"
        }
    },
});

export { lightTheme, darkTheme };