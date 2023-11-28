import { Theme } from "@mui/material";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Button(theme: Theme) {
    // const disabledStyle = {
    //     '&.Mui-disabled': {
    //         backgroundColor: theme.palette.grey[200]
    //     }
    // };

    return {
        MuiButton: {
            root: { 
                styleOverrides: {
                    
                    backgroundColor: '#163e5a', // Some CSS
                    fontFamily: inter.style.fontFamily,
                    fontSize: '60px'
                    
                }
            },
            // defaultProps: {
            //     disableElevation: true
            // },
            // styleOverrides: {
            //     root: {
            //         fontWeight: 400
            //     },
            //     contained: {
            //         ...disabledStyle
            //     },
            //     outlined: {
            //         ...disabledStyle
            //     }
            // }
        
        },
        MuiButtonBase: {
            styleOverrides: {
                root: { // Name of the rule
                    "&:hover": {
                        background: '#163e5a', // Some CSS
                    },
                    fontFamily: inter.style.fontFamily,
                    fontSize: '2rem'
                },
            }
        }
    }
}