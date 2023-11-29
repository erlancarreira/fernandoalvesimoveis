
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import chavesLogo from '../../assets/images/chave_dos_seus_sonhos.png'
import Image from 'next/image'

export default function Institucional() {
  return (
    <>
      <Stack direction={'row'} spacing={2} >
        <Box>
          <Typography fontSize={'2rem'} my={3}> 
            Quem eu sou?
          </Typography>
          <Typography my={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et venenatis dolor. Fusce vel nisi quis arcu semper imperdiet non ut mi. Donec et erat varius, convallis ex nec, hendrerit risus. Suspendisse tincidunt rhoncus volutpat. Curabitur sodales elit libero, at luctus sapien ornare nec. Duis lacinia massa justo, eu tristique magna maximus ac. Donec metus eros, cursus quis magna ac, tempus mollis dolor. Morbi lobortis pellentesque felis nec dapibus. In felis leo, elementum porta dui accumsan, consectetur molestie mauris. Fusce dictum euismod velit, vel dignissim libero vestibulum eleifend. Vestibulum maximus scelerisque consectetur. Vivamus vitae nibh at tortor faucibus maximus. In hac habitasse platea dictumst. Vivamus laoreet tortor at leo efficitur, id ornare dui sollicitudin.
            Fusce dolor libero, dapibus at tellus sed, aliquet semper erat. Sed vel ligula nunc. Praesent ut tempor diam, vitae tristique est. Morbi elementum, est feugiat aliquet mattis, ex arcu laoreet felis, nec luctus augue leo a metus. Maecenas ut consequat ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec accumsan nulla massa, ac pulvinar nulla faucibus sed. Vestibulum efficitur accumsan lectus, id ornare massa tempor sit amet. In et tincidunt nulla, in feugiat urna.
            Sed rhoncus turpis dui, quis elementum dolor lobortis a. Maecenas ipsum sem, pulvinar nec ex in, tristique fringilla ligula. Aliquam viverra vitae lectus eu rutrum. Fusce vestibulum luctus mi vitae dignissim. Aliquam ut massa ut augue efficitur pulvinar. Aliquam erat volutpat. Duis consectetur dui venenatis diam imperdiet gravida.
          </Typography>
        </Box>

        {/* <Box >
          <Image src={chavesLogo} alt={'Imagem das chaves de seus sonhos'} 
            //height={0} 
            //width={0} 
            //sizes={'100vw'} 
            sizes="100vw"
            style={{
              width: '300px',
              height: 'auto',
            }}
          />
        
          <Typography fontSize={'1.2rem'}>Fernando Alves - Corretor de Imóveis</Typography>
          <Typography fontSize={'1.2rem'}>Empreendedor(a)</Typography>
          <Typography fontSize={'1.2rem'}>Transformamos o seu sonho em Realidade 🏡🏙</Typography>
          <Typography fontSize={'1.2rem'}>👨‍💼 | Corretor de Imóveis - CRECI 21.240</Typography>
          <Typography fontSize={'1.2rem'}>🎓 | Pós-Graduado Gestão Financeiro</Typography>
          <Typography fontSize={'1.2rem'}>🎯 | Seu Lar dos Sonhos Aqui👇</Typography>
          
        </Box> */}
      </Stack>
        
    </>
  )
}
