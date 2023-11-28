// third-party
import { merge } from 'lodash'


// project import

import Button from './Button'
import { Theme } from '@mui/material'
// import Badge from './Badge'
// import CardContent from './CardContent'
// import Checkbox from './Checkbox'
// import Chip from './Chip'
// import IconButton from './IconButton'
// import InputLabel from './InputLabel'
// import LinearProgress from './LinearProgress'
// import Link from './Link'
// import ListItemIcon from './ListItemIcon'
// import OutlinedInput from './OutlinedInput'
// import Tab from './Tab'
// import TableCell from './TableCell'
// import TableHead from './TableHead'
// import Tabs from './Tabs'
// import Typography from './Typography'
// import Autocomplete from './Autocomplete'

// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentsOverrides(theme: Theme) {
    return merge(
        Button(theme),
        // Badge(theme),
        // CardContent(),
        // Checkbox(theme),
        // Chip(theme),
        // IconButton(theme),
        // InputLabel(theme),
        // LinearProgress(),
        // Link(),
        // ListItemIcon(),
        // Autocomplete(),
        // OutlinedInput(theme),
        
        // Tab(theme),
        // TableCell(theme),
        // TableHead(theme),
        // Tabs(),
        // Typography()
    )
}