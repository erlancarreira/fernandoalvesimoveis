import { ReactNode } from 'react'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'

export default function Layout({
    children,
  }: {
    children: ReactNode
  }) {
    return <section className='main' >
        <Container component={'article'} className='my-2' > 
            <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'space-between'}>
              {children}
            </Stack> 
        </Container>    
    </section>    
    
  }