"use client"
import { styled } from '@mui/material/styles'

export const Image = styled('div')({
    background: `transparent url('/static/images/logo_escura.png') 0% 0% no-repeat padding-box`,
    width: '200px',
    height: '50px',
    marginTop: '17px',
    marginBottom: '18px',
    backgroundSize: 'contain',
}) 

export default function LogoImage() {
    return <Image />
}