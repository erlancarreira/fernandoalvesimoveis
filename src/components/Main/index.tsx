"use client"
import { ReactNode, CSSProperties } from 'react'
import { usePathname  } from 'next/navigation'
import useSizeComponents from '../useSizeComponents'


const TagMain = ({children, style }: { children: ReactNode, style?: CSSProperties }) => { 
    
    const pathname = usePathname()
    const isInitialPage = pathname === '/'

    if (isInitialPage) {
        return <main id={'main'} style={style} >{children}</main>
    } 
    
    return <section id={'main'} style={style} >{children}</section> 
}


export default function Main({children}: {
    children: ReactNode
}) {

    const { someHeights } = useSizeComponents()

    const totalOffsetHeight = someHeights()
    
    return <TagMain style={{minHeight: `calc(100vh - ${totalOffsetHeight}px)`}}>
        {children}
    </TagMain>
}