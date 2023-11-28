
import FilterOrderBy from '@/components/FilterOrderBy'
import SiderBar from '@/components/SideBar'

import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardDefault from '@/components/CardDefault'



export default function Alugar() {
  return (
    <>
      {/* <Stack direction={'row'} justifyContent={'space-between'} > */}
      <Stack direction={'column'} minWidth={'100%'}>
      
        <Card sx={{ 
          display: 'flex', 

          justifyContent: 'space-between', 
          alignItems: 'center', 

          flex: 1,
          p: '16px'
        }}>
          <>5 imóveis para locação</>
          <FilterOrderBy />
        </Card>
          
        <Stack sx={{ flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'column' } }} gap={2}>
          <Stack 
            flex={3}
            my={2} 
            justifyContent={'space-between'}
            direction={'row'}
            gap={4}
            id={'imoveis_casas'}
            flexWrap={'wrap'}
          >
            {[ 0, 1, 2, 3 ].map( (index) => <CardDefault 
              key={index} 
              sx={{ 
                flex: { 
                  lg: '0 0 48%', 
                  md: '0 0 48%', 
                  sm: '1 0 100%', 
                  xs: '1 0 100%' 
                } 
              }}  
          /> )}      
          </Stack>
          <SiderBar />  
        </Stack>
      </Stack>
       
    </>
  )
}
