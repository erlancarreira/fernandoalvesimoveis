"use client"

import AppBar from '@mui/material/AppBar'
//import Paper from '@mui/material/Paper'
import Toolbar from '@mui/material/Toolbar'

import Container from '@mui/material/Container'
import CustomMenu from '../Menu'
import LogoImage from '../LogoImage'

export default function Menu() {
    return (
        <>
            <AppBar
                position="fixed"
                id="header"
                component={'header'} 
                sx={{
                    zIndex: 1300, 
                    minWidth: '100%',
                    flexGrow: 1,
                    minHeight: '90px', 
                    display: 'flex', 
                    flex: 1,
                    justifyContent: 'center', 
                    alignItems: 'center',
                    backgroundColor: '#ffffff',  
                    borderRadius: 0,  
                }}
                color="secondary"
                elevation={9}
            >
                <Toolbar component={Container} disableGutters={true} sx={{ justifyContent: 'space-between'}}>
                    <LogoImage />
                    <CustomMenu />
                </Toolbar>
                
            </AppBar>      
            <div style={{height: '90px'}}></div>
        </>
    )
}