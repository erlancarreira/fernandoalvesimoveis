"use client"
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Image from 'next/image'

export const Div = styled(Button)(({theme}) => ({
    position: 'relative',
    borderRadius: '8px',
    overflow: 'hidden',
    display: 'flex', 
    flex: 1,
    padding: 0,
    textAlign: 'inherit',
    maxHeight: '550px',
    [theme.breakpoints.between("xs", "sm")]: {
        maxHeight: '380px'
    },
   
}))

export default function CardLancamentos({ src, alt, url }: {src: string, alt: string, url?: string }) {
    
    return (
        
        <Div href={url}>
        
            <Image src={src} 
                
                loading='lazy' 
                alt={alt} 
                width={0} 
                height={0} 
                sizes={'100vw'} 
                
                objectPosition="center bottom"
                style={{
                    width: '100%',
                    height: 'auto',
                    borderTopLeftRadius: '8px', 
                    borderTopRightRadius: '8px' 
                }} 
            />
            <div style={{
                width: '100%', 
                background: 'rgb(0 0 0 / 39%)', 
                position: 'absolute', 
                bottom: '0',
                height: '100%'
            }}>
                <div style={{position: 'absolute', bottom: '0', padding: '10px'}}>
                    <Typography fontWeight={'bold'} color={'#fff'}>
                        Monguba - Pacatuba
                    </Typography>
                    <Divider sx={{width: '100%', backgroundColor: 'white'}} />
                    <Typography fontWeight={'bold'} color={'#fff'}>
                        2 Quartos | 1 Banheiro | Cozinha Americana | Lavanderia com Tanque
                    </Typography>
                </div>
            </div>
        </Div>
        
        
    )
}