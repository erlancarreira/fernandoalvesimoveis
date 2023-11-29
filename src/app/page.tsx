

import Filter from '@/components/Filter'
import Carousel from '@/components/Carousel'
import Container from '@mui/material/Container'
import CardLancamentos from '@/components/CardLancamentos'

import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
//import Grid from '@mui/material/Grid'

import Typography from '@mui/material/Typography'
//import Divider from '@mui/material/Divider'
import CardDefault from '@/components/CardDefault'

import Image from 'next/image'
import casaIcon from '../asserts/images/casas_icon.png'
import apartamentoIcon from '../asserts/images/apartamentos_icon.png'
import { data } from '@/services/fakeData'


export default function Inicio() {
  return (
    <>
      
        <Carousel >
          <Container sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} >
            <Filter />
          </Container>
        </Carousel> 
        
        <Box component={'section'} mb={5} sx={{marginTop: '20px', width: '100%'}} >
          <Container> 
            <Stack flex={'0 0 100%'}>
              <Typography fontSize={'2rem'}> 
                Lançamentos
              </Typography>
            </Stack>
            
            
            <Stack 
              sx={{
                display: 'flex',
                flex: 1,
                flexDirection: { lg: 'row', md: 'row', xs: 'column', sm: 'column', },
                
              }} 
              gap={2} 
               
            >
              {data.lancamentos.map( (item, index) => <CardLancamentos key={index} {...item} /> )}
            </Stack>
             
          </Container>
        </Box>
         
        
        <Container sx={{position: 'relative'}} >
          {/* <Divider sx={{width: '100%', py: 2 }} orientation='horizontal' /> */}
          <Image style={{ 
            position: 'absolute', 
            top: '-20px', 
            left: 0, 
            right: 0, 
            margin: 'auto' 
          }} width={120} src={casaIcon} alt={'Imagem de uma logo de casas'} />
        </Container >

        <Box component={'section'} sx={{ 
            width: '100%', 
            py: '40px', 
            pb: '60px',
            backgroundColor: 'rgb(241, 243, 244)'
          }} 
        >
          <Container > 
            <Stack direction={'column'} justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap'} spacing={2}>
              <Stack >
                <Typography fontSize={'2rem'}> 
                  Imóveis à venda
                </Typography>
              </Stack>
              
              <Stack 
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: { lg: 'nowrap', md: 'nowrap', xs: 'wrap', sm: 'wrap', }
                }} gap={2} 
              >
                {[0,1,2].map( index => <CardDefault key={index} />)}
              </Stack>
              
            </Stack>
            
          </Container>
        </Box>

        <Container sx={{position: 'relative'}} >
          {/* <Divider sx={{width: '100%', py: 2 }} orientation='horizontal' /> */}
          <Image style={{ 
            position: 'absolute', 
            top: '-20px', 
            left: 0, 
            right: 0, 
            margin: 'auto' 
            }} width={120} height={46} src={apartamentoIcon.src} alt={'Imagem de uma logo de apartamentos'} />
        </Container>

        <Box component={'section'} sx={{ 
            width: '100%', 
            py: '40px', 
            pb: '60px',
           
          }} 
        >
          <Container> 
            <Stack direction={'column'} justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap'} spacing={2}>
              <Stack>
                
                <Typography fontSize={'2rem'}> 
                  Apartamentos à venda
                </Typography>
              </Stack>
              
              <Stack sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: { lg: 'nowrap', md: 'nowrap', xs: 'wrap', sm: 'wrap', }
                }} 
                gap={2} 
              >
                <CardDefault />
                <CardDefault />
                <CardDefault />
              </Stack>
              
            </Stack>
            
          </Container>
        </Box>
     
    </>
  )
}
