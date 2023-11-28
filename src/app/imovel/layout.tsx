"use client"
import { ReactNode } from 'react'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material'

const ImageOverlay = () => {
  return <div style={{ 
    position: 'absolute', 
    top: 0, 
    bottom: 0, 
    left: 0, 
    right: 0, 
    backgroundColor: "rgb(0 0 0 / 30%)", 
    zIndex: 1  
  }}></div>
}

const BackgroundImage = () => {
  return <div 
    style={{ position: 'absolute', width: '100%', height: '100%' }}
  >
    <Image 
      
      // Make the image display full width
      // width={0}
      // height={0}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      //sizes="100vw"
      fill
      
      //quality={100}
      style={{
        objectFit: 'cover',
        //objectPosition: '0 36%',
        zIndex: 0,
        
      }}
      src={'/static/images/background_image.jpg'} 
      alt={'Imagem de fundo de background'}
    />
    <ImageOverlay />
  </div>
}

const FlexItem = styled("div")({
  flex: 1,
  minWidth: '200px',
  borderRadius: '4px',
  backgroundColor: '#ffffffd1',
  margin: '5px',
  padding: '6px 12px',
})


export default function Layout({
    children,
  }: {
    children: ReactNode
  }) {
    return <>
      
      <Stack direction={'row'} position={'relative'} height={'300px'} >
        
          
        {/* <div style={{
          position: 'absolute',
          top: 0,
          right: "-60px",
          
          width: 0, 
          height: 0, 
          borderTop: "60px solid transparent",
          borderBottom: "60px solid transparent",
          borderLeft: "60px solid #1e4560",

          zIndex:3
        }}></div> */}
        {/* <div style={{
          position: 'absolute',
          bottom: 0,
          right: "-60px",
          
          width: 0, 
          height: 0, 
          borderTop: "60px solid transparent",
          borderBottom: "60px solid transparent",
          borderLeft: "60px solid #1e4560",

          zIndex:3
        }}></div> */}
        
        <Container sx={{zIndex: 3, my: 2 }} >
          <Stack direction={'row'} minHeight={'100%'} justifyContent={'space-between'} flexWrap={'wrap'} >
            <Stack flex={1} direction={'column'} justifyContent={'space-between'} color={'#fff'}>
              <div>
                <Typography sx={{ fontSize: { lg: '2rem', md: '2rem', sm: '1.4rem', xs: '1.4rem' } }}>Casa Venda Monguba CE Financia</Typography>
                <Typography sx={{ fontSize: {  lg: '1.5rem', md: '1.5rem', sm: '1.2rem', xs: '1.2rem'} }}>Guaramiranga - CE</Typography>
              </div>
              <div>
                
                <Typography sx={{ fontSize: { lg: '1.5rem', md: '1.5rem', sm: '1.1rem', xs: '1.1rem' } }}>Locação R$ 3.000</Typography>
                <Typography sx={{ fontSize: { lg: '1.5rem', md: '1.5rem', sm: '1.1rem', xs: '1.1rem' } }}>Condomínio R$ 560</Typography>
              </div>
             
            </Stack>
            <Stack flex={1} direction={'row'} alignContent={'end'} flexWrap={'wrap'} sx={{
              display: {md: 'flex', sm: 'none', xs: 'none'}
            }}>
              <FlexItem>
                Área construída 52,45 m²
              </FlexItem>
              <FlexItem>
                Área total terreno 52,45 m²
              </FlexItem>
              <FlexItem>
                2 Quartos sendo 1 suíte 
              </FlexItem>
              <FlexItem>
                2 Banheiros
              </FlexItem>
              <FlexItem>
                1 Vaga na garagem
                
              </FlexItem>
              
            </Stack>
           
          </Stack>
        </Container>
        
         
        
        <BackgroundImage />
      </Stack>
      
      <Container component={'article'} className='my-2' > 
        <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'space-between'}>
          {children}
        </Stack> 
      </Container>    
    </>    
    
  }