"use client"
import { AutoCompleteObject } from '@/components/AutoComplete'
import { AutocompleteRenderInputParams } from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

const CitiesStates = [
    { label: 'Fortaleza-CE'  }, 
    { label: 'Maranguape-CE' },
    { label: 'Pacatuba-CE'   },
    { label: 'Maracanau-CE'  },
]

export default function CitiesStatesFilter() {
    return <AutoCompleteObject
        id={'cidades_estados'}
        //sx={{ display: 'flex', flex: 1 }}
        
        size={'small'}
        options={CitiesStates}
        renderInput={(params: AutocompleteRenderInputParams) => <TextField {...params} label="Cidade" />} 
    />
}