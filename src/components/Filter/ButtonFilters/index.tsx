"use client"
import { useState, MouseEvent } from 'react'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'

const buttonsTypes = [
    { title: 'Venda'      , id: 'venda'      }, 
    { title: 'Locação'    , id: 'locacao'    }, 
    { title: 'Lançamentos', id: 'lancamentos'}
]

export default function ButtonFilters() {

    const [ currentButton, setCurrentButton ] = useState('venda')
    
    const handleButton = (event: MouseEvent<HTMLButtonElement>) => {
       const e = event.target as HTMLButtonElement
       setCurrentButton(e.id)
    }
    
    return (
        <ButtonGroup
            disableElevation
            aria-label="Disabled elevation buttons"
            sx={{ display: 'flex', flex: 1 }}
        >
            {buttonsTypes.map( (btn) => { 
                return <Button 
                    onClick={handleButton} 
                    variant={btn.id === currentButton ? 'contained' : 'text'} 
                    id={btn.id} 
                    key={btn.id}
                    fullWidth
                    sx={{
                        flex: 1,
                        minHeight: '60px', 
                        borderRadius: 0,
                    }}
                >
                    {btn.title} 
                </Button> }) 
            }
            
        </ButtonGroup>
    )
}