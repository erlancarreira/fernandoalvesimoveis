"use client"
import { useState } from 'react'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'

import AutoComplete, { AutoCompleteObject } from '@/components/AutoComplete'
import TextField from "@mui/material/TextField"
import { AutocompleteRenderInputParams } from '@mui/material/Autocomplete'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import CheckboxWithLabels from '../CheckBox'
import IconButton from '@mui/material/IconButton'
import { IconButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import Collapse from '@mui/material/Collapse'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const optionServices = [ 
  'Venda', 
  'Aluguel', 
  'Lançamentos' 
]

const CitiesStates = [
  'Fortaleza-CE', 
  'Maranguape-CE',
  'Pacatuba-CE',
  'Maracanau-CE',
]

const districtOptions = [
  'Pavuna',
  'Monguba',
  'Luzardo Viana',
  'Bandeirantes',
]

const typesProps = [
  { label: 'Apartamento'       , id: 'apartamento'        }, 
  { label: 'Casa'              , id: 'casa'               }, 
  { label: 'Casa de condomínio', id: 'casa_de_condominio' },
  { label: 'Chácara'           , id: 'chacara'            },
  { label: 'Duplex'            , id: 'duplex'             },
  { label: 'Fazenda'           , id: 'fazenda'            },
  { label: 'Loft'              , id: 'loft'               },
  { label: 'Ponto Comercial'   , id: 'ponto_comercial'    },
  { label: 'Prédio Comercial'  , id: 'predio_comercial'   },
  { label: 'Sítio'             , id: 'sitio'              },
  { label: 'Terreno'           , id: 'terreno'            },
  { label: 'Triplex'           , id: 'Triplex'            },
]

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function SiderBar( ) {
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return <Stack 
    component={Paper} 
    elevation={3} 
    id={'filtro'} 
    flex={1} 
    gap={2}
    my={2} 
    sx={{
      p: 2,
      "& .MuiInputBase-input": {
        height: "1.5rem"
      },
      //maxWidth: '300px',
      alignSelf: 'baseline'
    }}
  >
    <Divider>FILTRAR</Divider>
    <Stack >
      <AutoComplete 
        name={'servico'}
        size="small"  
        //placeholder='Que tipo de serviço?' 
        options={optionServices} 
        renderInput={(params: AutocompleteRenderInputParams) => <TextField {...params} label={'Que tipo de serviço?'} />}
      />
    </Stack>

    <Stack component={Paper} >
      <AutoComplete 
        name={'cidade'} 
        size="small"  
        //placeholder='Em qual cidade gostaria?' 
        options={CitiesStates} 
        renderInput={(params: AutocompleteRenderInputParams) => <TextField {...params} label={'Em qual cidade gostaria?'} />}
      />

    </Stack>

    <Stack component={Paper} >
      <AutoComplete 
        name={'bairro'} 
        size="small"  
        //placeholder='Qual o bairro?' 
        options={districtOptions} 
        renderInput={(params: AutocompleteRenderInputParams) => <TextField {...params} label={'Qual o bairro?'} />}
      />
    </Stack>

    <Stack component={Paper} >
      <AutoCompleteObject 
        name={'categoria'}
        size="small"   
        //placeholder='Qual categoria?' 
        options={typesProps} 
        renderInput={(params: AutocompleteRenderInputParams) => <TextField {...params} label={'Qual categoria?'} />}
      />
    </Stack>

    <Stack direction={'row'} spacing={2} >
      
      <TextField sx={{flex: 1}} size="small" name={'quartos'} label='Quartos' placeholder='Quantidade de quartos' type={'number'} />
      <TextField sx={{flex: 1}} size="small" name={'suites'} label='Suítes'  placeholder='Quantidade de suítes' type={'number'} />
    </Stack>

    <Stack direction={'row'} spacing={2} >   
      <TextField sx={{flex: 1}} size="small" name={'banheiros'} label='Banheiros' placeholder='Quantidade de banheiros' type={'number'} />
      <TextField sx={{flex: 1}} size="small" name={'vagas'} label='Vagas' placeholder='Quantidade de vagas' type={'number'} />
    </Stack>
    
    
    <Stack direction={'row'} spacing={2} >
      <TextField size="small" name={'price_min'} label='Preço mínimo' placeholder='R$ 0,00' />
      <TextField size="small" name={'price_max'} label='Preço máximo' placeholder='R$ 0,00' />
    </Stack>
    <Divider>
      Mais opções
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="Exibir mais filtros"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </Divider>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <Stack sx={{
        "& .MuiButtonBase-root": {
          padding: '2px 9px'
        }
      }} >
        <Typography>
          Status
        </Typography>

        <CheckboxWithLabels name={'novo'}          label={'Novo'} />
        <CheckboxWithLabels name={'usado'}         label={'Usado'} />
        <CheckboxWithLabels name={'na_planta'}     label={'Na planta'} />
        <CheckboxWithLabels name={'em_construcao'} label={'Em construção'} />
      </Stack>

      <Stack sx={{
        "& .MuiButtonBase-root": {
          padding: '2px 9px'
        }
      }}>
        <Typography>
          Características
        </Typography>

        <CheckboxWithLabels name={'em_condominio'}  label={'Em condomínio'} />
        <CheckboxWithLabels name={'financiavel'}    label={'Financiável'} />
        <CheckboxWithLabels name={'aceita_permuta'} label={'Aceita permuta'} />
        <CheckboxWithLabels name={'mobiliado_semi'} label={'Mobiliado ou Semi'} />
      </Stack>

      <Stack sx={{
        "& .MuiButtonBase-root": {
          padding: '2px 9px'
        }
      }} >
        <Typography>
          Facilidades
        </Typography>

        <CheckboxWithLabels name={'elevador'}          label={'Elevador'} />
        <CheckboxWithLabels name={'portao_eletronico'} label={'Portão eletrônico'} />
        <CheckboxWithLabels name={'lareira'}           label={'Lareira'} />
        <CheckboxWithLabels name={'sacada'}            label={'Sacada'} />
        <CheckboxWithLabels name={'portaria_24h'}      label={'Portaria 24h'} />
        <CheckboxWithLabels name={'piscina'}           label={'Piscina'} />
        <CheckboxWithLabels name={'churrasqueira'}     label={'Churrasqueira'} />
        <CheckboxWithLabels name={'salao_de_festas'}   label={'Salão de festas'} />
      </Stack>
    </Collapse>

    <Stack spacing={2}>
      <Button variant='contained'>
        Filtrar
      </Button>
     
      <Button variant='contained'>
        Remover filtros     
      </Button>
    </Stack>

  </Stack>

  

}