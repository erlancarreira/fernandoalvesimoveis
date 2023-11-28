
import FilterOrderBy from '@/components/FilterOrderBy'
import SiderBar from '@/components/SideBar'

import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardDefault from '@/components/CardDefault'
import CardLancamentos from '@/components/CardLancamentos'



export default function Lancamentos() {
  return (
    <>
      {/* <Stack direction={'row'} justifyContent={'space-between'} > */}
      <Stack direction={'column'} minWidth={'100%'} >
      
        <Stack id={'title_filtro'} >
          <Card sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            flex: 1,
            p: '16px'
          }}>
            <>5 imóveis</>
            <FilterOrderBy />
          </Card>
          
        </Stack>

      
        <Stack sx={{ flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'column' } }} gap={2} >
          <Stack 
            flex={3}
            my={2} 
            justifyContent={'space-between'}
            direction={'row'}
            gap={4}
            id={'imoveis_casas'}
            flexWrap={'wrap'}
          >
          {[ 0, 1, 2, 3 ].map( (index) => {
            return <Stack key={index} 
              sx={{ 
                flex: { 
                  lg: '0 0 48%', 
                  md: '0 0 48%', 
                  sm: '1 0 100%', 
                  xs: '1 0 100%' 
                }
              }}
            >
              <CardLancamentos src={'/static/images/image_1.jpg'} alt={'Imagem da casa em Monguba'} />
            </Stack> 
          })}      
        
        </Stack>
        <SiderBar /> 
      </Stack>  
      </Stack>
        
    </>
  )
}
