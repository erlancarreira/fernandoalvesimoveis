"use client"
import { AutoCompleteObject } from '@/components/AutoComplete'
import { AutocompleteRenderInputParams } from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

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

export default function TypesProperties() {
    return <AutoCompleteObject
        id={'tipo_propriedades'}
        //sx={{ display: 'flex', flex: 1 }}
        size={'small'}
        options={typesProps}
        renderInput={(params: AutocompleteRenderInputParams) => <TextField {...params} label="Tipo" />} 
    />
}