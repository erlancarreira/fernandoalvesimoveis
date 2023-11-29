"use client"

import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { ReactNode } from 'react'
import asset_image from '../../asserts/images/casas_porcima.jpg'

const Div = styled(Box)({
    width: '100%',
    height: '400px',
    position: 'relative',
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${asset_image.src})`,
    backgroundSize:'cover',
}) 

export default function Carousel({ children }: { children: ReactNode }) {
    return <Div>
        {children}
    </Div>
} 