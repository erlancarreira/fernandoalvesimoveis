
import Autocomplete from '@mui/material/Autocomplete'
import { HTMLAttributes } from 'react'

interface IOption {
    id?: string | number
    label?: string
}

interface IRenderOption {
    key: string,
    props: HTMLAttributes<HTMLLIElement>
}



export function AutoCompleteObject({key, ...props}: any) {

    return (
        <Autocomplete
            disablePortal
            renderOption={({key, ...props}: IRenderOption, option: IOption) => {
                    return <li key={key} {...props}>{option.label}</li>
                }
            }
            {...props}
        />
    )
}

export default function AutoComplete({key, ...props}: any) {

    return (
        <Autocomplete
            disablePortal
            renderOption={({key, ...props}: IRenderOption, option: string) => {
                    return <li key={key} {...props}>{option}</li>
                }
            }
            {...props}
        />
    )
}