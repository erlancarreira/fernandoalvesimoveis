import { ReactNode } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function Layout({
    children,
  }: {
    children: ReactNode
  }) {
    return <>
      <Box sx={{ width: '100%', backgroundColor: '#f4b61e', padding: 2 }} >
        <Container >
          <Typography 
            fontSize={'1.5rem'} 
            sx={{
              textAlign: "center",
              color: "#fff",
              fontWeight: "bold",
            }}
          > 
            INSTITUCIONAL
          </Typography>
        </Container>
      </Box>
      <Container component={'article'} className='my-2' > 
          <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'space-between'}>
            {children}
          </Stack> 
      </Container>    
    </>    
    
  }