"use client"

import { useState, ChangeEvent } from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox'

interface ICheckBoxProps extends CheckboxProps {
    label: string
} 

export default function CheckboxWithLabels({label, ...props}: ICheckBoxProps) {

    const [checked, setChecked] = useState(false)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }

    return (
        <FormGroup>
            <FormControlLabel 
                control={<Checkbox 
                    checked={checked}
                    onChange={handleChange} 
                    
                    {...props} 
                />} 
            label={label}  
            />
        </FormGroup>
    )
}