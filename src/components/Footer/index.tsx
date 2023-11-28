"use client"
import { styled } from '@mui/material/styles'
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

import Image from 'next/image'

import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import YouTubeIcon from '@mui/icons-material/YouTube'
// import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt'

import logoEscuraCreci from '../../../public/static/images/logo_escura_creci.png'



const AddressContent = styled('a')({ marginBottom: 2 }) 

const MenuFooter = () => {
    return <>
        <Box mb={2}>
            <Typography color={'#fff'}>MENU</Typography>
           
            <Stack direction={'row'} spacing={2} sx={{
                //marginLeft: '16px', 
                color: '#ffffff', 
                "& .MuiListItemButton-root": {
                    padding: 0,
                    width: '100px'
                }} 
            }>
                <Box>
                    <nav aria-label="Inicio, Comprar, Alugar">
                        <List>
                            <ListItem disablePadding> 
                                <ListItemButton component="a" href="/inicio"> 
                                    <ListItemText >
                                        Inicio
                                    </ListItemText>
                                </ListItemButton>  
                            </ListItem> 
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/comprar">
                                    <ListItemText>
                                        Comprar
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem> 
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/alugar">
                                    <ListItemText>
                                        Alugar
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                            
                        </List>
                    </nav>
                </Box>
                <Box sx={{ color: '#ffffff' }}>
                    <nav aria-label="Endereço">
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/lancamentos">
                                    <ListItemText>
                                        Lançamentos
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/institucional">
                                    <ListItemText>
                                        Institucional
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/contato">
                                    <ListItemText>
                                        Contato
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>
                </Box>    
            </Stack>
        </Box>
    </>
}

const MenuService = () => {
    return <>
        <Box mb={2} >
            <Typography color={'#fff'}>ATENDIMENTO</Typography>
        
            <Stack direction={'row'} sx={{ 
                //marginLeft: '16px',
                color: '#ffffff', 
                "& .MuiListItemButton-root": {
                    padding: 0,
                    width: '145px'
                }} 
            }>

                
                <Box>
                    <nav aria-label="Inicio, Comprar, Alugar">
                        <List sx={{
                            "& .MuiListItem-root": {
                                minWidth: '200px'
                            },
                            "& .MuiListItemText-root span": {
                                display: 'flex',
                                justifyContent: 'space-between'
                            }
                        }}>
                            <ListItem disablePadding> 
                                <ListItemText >
                                    <div style={{width: '66px'}}>Segunda</div> - <div>8:00h às 18:00h</div> 
                                </ListItemText>
                            </ListItem> 
                            <ListItem disablePadding> 
                                
                                <ListItemText >
                                    <div style={{width: '66px'}}>Terça</div> - <div>8:00h às 18:00h</div>  
                                </ListItemText>
                                  
                            </ListItem> 
                            <ListItem disablePadding> 
                                
                                <ListItemText >
                                    <div style={{width: '66px'}}>Quarta</div> - <div>8:00h às 18:00h</div>   
                                </ListItemText>
                                
                            </ListItem> 
                            <ListItem disablePadding> 
                                <ListItemText >
                                    <div style={{width: '66px'}}>Quinta</div> - <div>8:00h às 18:00h</div>  
                                </ListItemText>
                            </ListItem> 
                            <ListItem disablePadding> 
                                 
                                <ListItemText >
                                    <div style={{width: '66px'}}>Sexta</div> - <div>8:00h às 18:00h</div> 
                                </ListItemText>  
                            </ListItem> 
                            
                        </List>
                    </nav>
                </Box>
                
            </Stack>
        </Box>
    </>
}

const MenuContacts = () => {
    return <Box mb={2} >
        <Typography color={'#fff'}>TELEFONES</Typography>
    
        <Stack direction={'row'} sx={{
            //marginLeft: '16px', 
            color: '#ffffff', 
            "& .MuiListItemButton-root": {
                padding: 0,
                width: '145px'
            }} 
        }>

            
            <Box>
                <nav aria-label="Inicio, Comprar, Alugar">
                    <List>
                        <ListItem disablePadding> 
                            <ListItemButton component="a" href="/inicio"> 
                                <ListItemText >
                                    (85) XXXXX-XXXX 
                                    
                                </ListItemText>
                            </ListItemButton>  
                        </ListItem> 
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="/comprar">
                                <ListItemText>
                                    (85) XXXXX-XXXX 
                                    
                                </ListItemText>
                            </ListItemButton>
                        </ListItem> 
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="/alugar">
                                <ListItemText>
                                    (85) XXXXX-XXXX 
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                        
                    </List>
                </nav>
            </Box>
            
        </Stack>
    </Box>
    
}

const MenuAddress = () => {
    return <AddressContent href={'/123'} >
        <Typography color={'#fff'} sx={{ display: 'flex' }}>ENDEREÇO</Typography>
        <Stack sx={{ 
            color: '#ffffff', 
            //marginLeft: '16px' 
        }} >
            <nav aria-label="Endereço">
                <List>
                    <ListItem disablePadding>    
                        <ListItemText >
                            Pacatuba - CE
                        </ListItemText>
                    </ListItem> 
                    <ListItem disablePadding>
                        <ListItemText>
                            Rua Tenente Cravo, 1298, Monguba
                        </ListItemText>
                    </ListItem> 
                    {/* <ListItem disablePadding>
                        <ListItemText>
                            Em frente a Praça Rachel de Queiroz
                        </ListItemText>
                    </ListItem> */}
                    <ListItem disablePadding>
                        <ListItemText>
                            61809-100
                        </ListItemText>
                    </ListItem>
                </List>
            </nav>
        </Stack>    

    </AddressContent>
}

const LogoFooter = () => {
    return <Image src={logoEscuraCreci} 
        width={0}
        height={0}
        sizes={'100vw'} 
        loading='lazy' 
        alt={"Logo Escura Creci"} 
        style={{
            width: '100%',
            height: '145px',
            objectFit: 'contain'           
        }}
    />
}

export default function Footer() {

    return <Box component={'footer'} id="footer" sx={{
        minHeight: '300px', 
        backgroundColor: '#1e4560',
        py: '2rem',
        borderTop: 'solid 5px #f4b61e',
        // position: 'absolute', 
        // bottom: 0,
        width: '100%',
        
    }}>
        
        <Container sx={{ px: 
            { 
                lg: '0px !important', 
                md: '0px !important' 
            } 
        }} >   
            <Stack 
                component={'section'} 
                sx={{
                    flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'column'} 
                }} 
                flexWrap={'wrap'} 
                justifyContent={'space-between'}
            >
                <MenuFooter />
                <MenuService />
                <MenuContacts />
                <MenuAddress />
            </Stack>
            <Divider sx={{backgroundColor: '#f4b61e', height: '5px', my: 2, position: 'relative' }} />
            <Stack direction={'row'} sx={{ marginTop: 2 }} spacing={2} >
                <InstagramIcon sx={{ width: '2em', height: '2em', color: '#f4b61e' }} />
                <WhatsAppIcon  sx={{ width: '2em', height: '2em', color: '#f4b61e' }} />
                <YouTubeIcon   sx={{ width: '2em', height: '2em', color: '#f4b61e' }} />
            </Stack>
            <Stack component={'section'} direction={'row'} justifyContent={'center'}>
                <LogoFooter />
            </Stack>
        </Container>
        
    </Box>
}