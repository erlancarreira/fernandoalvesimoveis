"use client"
import React from 'react'
import Box from '@mui/material/Box'
import Link from 'next/link'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import Button from '@mui/material/Button'

import SwipeableDrawer from '@mui/material/SwipeableDrawer'

import { styled, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"

const menuItems = [
    { name: "Início"       , url: '/' },
    { name: "Comprar"      , url: '/imoveis/comprar' },
    { name: "Alugar"       , url: '/imoveis/alugar' },
    { name: "Lançamentos"  , url: '/imoveis/lancamentos' },
    { name: "Institucional", url: '/institucional' },
    { name: "Contato"      , url: '/contato' },   
]

const NavMenu = styled(List)(({ theme }) => {

    const breakpoint = theme.breakpoints.between('xs', 'sm')
   
    return {
        width: '100%', 
        display: 'flex', 
        flexDirection: 'row', 
        "& .MuiListItemText-root": { color: '#000' },
        [breakpoint]: {
            display: 'none !important',
        },
    }
    
})

export default function CustomMenu() {
    
    const [ open, setOpen ] = React.useState(false)
    
    const theme = useTheme()

    const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'))

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return
        }

        setOpen(open)
    }

    const MenuListDrawer = () => {
        return <Box
            sx={{ width: !open ? 'auto' : 250, marginTop: '90px' }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {menuItems.map((item, index) => (
                    <ListItem key={index} >
                        <Link href={item.url}>
                            <ListItemText>
                                {item.name}
                            </ListItemText>
                        </Link>
                    </ListItem>
                ))}
            </List>
            
        </Box>
          
    }

    const DrawerMenuMobile = () => <div>
        <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(!open)}
            sx={{
              mr: 2,
              display: {
                xs: "block",
                sm: "none"
              }
            }}
          >
            <MenuIcon sx={{ color: '#153e5a' }} />
          </IconButton>
        {/* <Button onClick={toggleDrawer(!open)}>MENU</Button> */}
        <SwipeableDrawer
            anchor={'left'}
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
        >
            <MenuListDrawer />
        </SwipeableDrawer>
        
    </div>

    const MenuDesktop = () => {
        return <nav >
            <NavMenu> 
                {menuItems.map( (item, index) => <ListItem key={index} >
                    <Link href={item.url}>
                        <ListItemText>
                            {item.name}
                        </ListItemText>
                    </Link>
                </ListItem>)}
            </NavMenu>
        </nav>
    }

    
    
    return isMobileMode ? <DrawerMenuMobile /> : <MenuDesktop />
}