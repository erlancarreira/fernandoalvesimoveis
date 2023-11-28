// material-ui
import { createTheme } from '@mui/material/styles'

// // third-party
// import { presetPalettes } from '@ant-design/colors'

// project import
//import ThemeOption from '.'

// ==============================|| DEFAULT THEME - PALETTE  ||============================== //

const Palette = (mode: any) => {
    
    return createTheme({
        palette: {
            mode,
            common: {
                black: '#000',
                white: '#fff'
            },

            primary: {
                main: "#163e5a",
                contrastText: "yellow",
            },
            
            
        }
    })
}

export default Palette