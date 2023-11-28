"use client"
import { SxProps, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

import quartos from '../../../public/static/images/quarto.png'
import banheiro from '../../../public/static/images/banheira_simples.png'
import garagem from '../../../public/static/images/carro-esporte.png'

import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'


const CardContainer = styled(Box)({
   
    width: '100%',
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    borderRadius: '8px',
    position: 'relative',
}) 

const CardContainerImage = styled(Box)({
    //height: '380px',
    overflow: 'hidden',
    position: 'relative',
}) 

const CardImage = () => {

    return <Button sx={{p:0, width: '100%'}}>
        <Image 
            src={'/static/images/image_1.jpg'} 
            alt={'Imagem do imovel'} 
            width={0} 
            height={0} 
            sizes={'100vw'} 
            //fill
            objectFit='cover'
            style={{
                width: '100%',
                height: 'auto',
                borderTopLeftRadius: '8px', 
                borderTopRightRadius: '8px' 
            }} 
        />
    </Button>
}

const CardContent = styled(Box)({
    width: '100%',
    padding: '1.2rem',
    backgroundColor: '#ffffff',
    position: 'relative',
}) 

export default function CardDefault({ sx }: { sx?: SxProps }) {
    return <CardContainer sx={sx}>
        <CardContainerImage>
            <CardImage />
        </CardContainerImage>
        <CardContent >
            <Box sx={{position: 'absolute', top: -42, left: 0, width: '100%', backgroundColor: '#ffffffc4', padding: '5px' }}>
                <Stack direction={'row'} spacing={'5px'} justifyContent={'space-between'}>
                    
                    <Stack 
                        direction={'row'} 
                        alignItems={'flex-end'} 
                        justifyContent={'center'} 
                        px={2} 
                        spacing={'5px'}
                        sx={{
                            "&::after": {
                                content: "''",
                                border: '1px solid #0000001f'
                            }
                        }}
                    >
                        <span style={{fontSize: '18px'}}>2x</span>
                        <Image src={quartos} alt={'Quantidade de quartos'} width={32} height={32} />
                    </Stack>
                    
                
                    <Stack direction={'row'} alignItems={'flex-end'} justifyContent={'center'} px={2} spacing={'5px'}>
                        <span style={{fontSize: '18px'}}>2x</span><Image src={banheiro} alt={'Quantidade de quartos'} width={32} height={32} />
                    </Stack>
                
                    <Stack direction={'row'} alignItems={'flex-end'} justifyContent={'center'} px={2} spacing={'5px'}>
                        <span style={{fontSize: '18px'}}>2x</span><Image src={garagem} alt={'Quantidade de quartos'} width={32} height={32} />
                    </Stack>
                    
                </Stack>
            </Box>
            
            <Typography py={1}>Casa Monguba</Typography>
            <Typography pb={1}>Região de Monguba</Typography>
            <Typography sx={{
                display: "-webkit-box",
                maxWidth: "390px",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden"
            }} >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.</Typography>
            <Divider sx={{margin: '20px auto'}} />
            <Typography pb={1}>R$ 190.000,00</Typography>
        </CardContent>
    </CardContainer>
}