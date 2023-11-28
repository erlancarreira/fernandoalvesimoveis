"use client"
import AutoComplete from '@/components/AutoComplete'
import { AutocompleteRenderInputParams } from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

export default function FilterOrderBy() {
    return <>
        <AutoComplete
            size={'small'}  
            name="order_by" 
            options={[ 'Recentes', 'Maior valor', 'Menor valor' ]}
            sx={{ minWidth: "200px" }}
            renderInput={(params: AutocompleteRenderInputParams) => { 
                    return <TextField key={params.id} {...params} label={'Ordernar por: '} />
                } 
            } 
        />
    </> 
}