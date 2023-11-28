"use client"
import { ReactNode, useMemo } from 'react'
import { createTheme, ThemeProvider } from "@mui/material/styles"
import componentsOverride from './overrides'
import { CssBaseline } from '@mui/material'
import Palette from './Palette'

export default function ThemeCustomization({ children }: { children: ReactNode}) {

    const theme = Palette('light')

    const themeOptions: any = useMemo(
        () => ({
            
            breakpoints: {
                values: {
                    xs: 0,
                    sm: 768,
                    md: 1024,
                    lg: 1266,
                    xl: 1536
                }
            },
            direction: 'ltr',
            mixins: {
                toolbar: {
                    minHeight: 90,
                    paddingTop: 8,
                    paddingBottom: 8
                }
            },
            
        }),
        [theme]
    )
    
    const themes = createTheme(themeOptions)

    themes.components = componentsOverride(themes)


    return <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
    </ThemeProvider>
}